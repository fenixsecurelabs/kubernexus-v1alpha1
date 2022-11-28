import React, {Component} from 'react'
import {dataFetch} from "../../../packages/lib/dataFetch"
import {getKubernetesClusterIDsFromContextID} from './constants/Constants'
import {submitGrafanaConfigure} from './GrafanaComponent'
import fetchAvailableAddons from './graphql/queries/AddonsStatusQuery'
import fetchClusterResources from './graphql/queries/ClusterResourcesQuery'
import fetchControlPlanes from './graphql/queries/ControlPlanesQuery'
import fetchDataPlanes from './graphql/queries/DataPlanesQuery'
import fetchAvailableNamespaces from './graphql/queries/NamespaceQuery'
import subscribeClusterResources from './graphql/subscriptions/ClusterResourcesSubscription'
import {submitPrometheusConfigure} from './PrometheusComponent'
import PropTypes from 'prop-types'
import {updateGrafanaConfig, updateProgress} from '../lib/store'
import {bindActionCreators} from 'redux'
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

// MUI styles

// Props and State Type declaration
type Props = {
    grafana: string
    grafanaURL: string | ""
    grafanaAPIKey: string
    grafanaBoards: string
    selectedBoardsConfigs: []
    prometheus: string

    kubernetesConfig: string[]
    selectedKubernetesContexts: string[]
    meshAdapters: any
    meshAdaptersTimeStamp: Date
    mts: Date

    updateProgress: any
    enqueueSnackbar: any
    closeSnackbar: any
}

type State = {
    boardConfigs: string[]
    grafanaURL: Props["grafanaURL"]
    grafanaAPIKey: Props["grafanaAPIKey"]
    grafanaBoardSearch: string
    grafanaConfigSuccess: Props["grafana"]
    selectedBoardsConfigs: Props["selectedBoardsConfigs"]
    ts: Props["grafana"]
    kts: Date
    mts: Date

    prometheus: string
    prometheusURL: string

    isMetricsConfigured: Props["grafanaURL"]

    availableAdapters: []
    contextsFromFile: []
    controlPlaneState: unknown
    dataPlaneState: unknown
    kubernetesFileError: false
    meshLocationURLError: false

    activeMeshScanNamespace: {}
    clusterResources: []
    meshScan: {}
    meshScanNamespaces: {}
    namespaceList: []
    selectedNamespace: "default"

    // subscription disposable
    namespaceQuery: any
    clusterResourcesQuery: any
    dataPlaneSubscription: any
    controlPlaneSubscription: any
    clusterResourcesSubscription: any

    _isMounted: boolean
    updateProgress: boolean
}

class DashboardComponent extends Component<Props, State> {
    state: State = {
        activeMeshScanNamespace: {},
        availableAdapters: [],
        boardConfigs: [],
        clusterResources: [],
        clusterResourcesQuery: undefined,
        clusterResourcesSubscription: undefined,
        contextsFromFile: [],
        controlPlaneState: undefined,
        controlPlaneSubscription: undefined,
        dataPlaneState: undefined,
        dataPlaneSubscription: undefined,
        grafanaAPIKey: "",
        grafanaBoardSearch: "",
        grafanaConfigSuccess: "",
        grafanaURL: "",
        isMetricsConfigured: "",
        kts: new Date(),
        kubernetesFileError: false,
        meshLocationURLError: false,
        meshScan: {},
        meshScanNamespaces: {},
        mts: new Date(),
        namespaceList: [],
        namespaceQuery: undefined,
        prometheus: "",
        prometheusURL: "",
        selectedBoardsConfigs: [],
        selectedNamespace: "default",
        ts: "",
        updateProgress: true,
        _isMounted: false
    }

    static propTypes: { classes: PropTypes.Validator<object> }

    /**
     * componentDidMount
     */
    componentDidMount(): void {
        this.setState({_isMounted: true})
        // this.fetchAvailableAdapters();

        if (this.state.isMetricsConfigured) {
            this.fetchMetricComponents();
        }

        if (this.state._isMounted) {
            this.initMeshSyncControlPlaneSubscription();
            this.initDashboardClusterResourcesQuery();
            this.initDashboardClusterResourcesSubscription();
            this.initNamespaceQuery()
        }
    };

    /**
     * componentWillUnmount
     */
    componentWillUnmount(): void {
        this.setState({_isMounted: false})
        this.fetchAvailableAdapters();
    }

    /**
     * componentDidUpdate
     * @param prevProps
     * @param prevState
     * @param snapshot
     */
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        // ...
        let updateControlPlane = false;
        let updateDataPlane = false;

        if (JSON.stringify(prevState.controlPlaneState) !== JSON.stringify(this.state.controlPlaneState)) {
            updateControlPlane = true;
        }

        if (JSON.stringify(prevState.dataPlaneState) != JSON.stringify(this.state.dataPlaneState)) {
            updateDataPlane = true;
        }

        if (updateDataPlane || updateControlPlane) {
            this.setMeshScanData(
                updateControlPlane ? this.state.controlPlaneState : prevState.controlPlaneState,
                updateDataPlane ? this.state.dataPlaneState : prevState.dataPlaneState
            )
        }

        // handle subscriptions update on switching Kubernetes Contexts
        if (prevProps?.selectedKubernetesContexts !== this.props?.selectedKubernetesContexts || prevProps.kubernetesConfig !== this.props.kubernetesConfig) {
            this.disposeSubscription();
            this.initMeshSyncControlPlaneSubscription();
            this.initDashboardClusterResourcesQuery();
            this.initMeshSyncControlPlaneSubscription();
            this.initNamespaceQuery();
        }

        if (prevState?.selectedNamespace !== this.state?.selectedNamespace) {
            this.disposeWorkloadWidgetSubscription();
            this.initMeshSyncControlPlaneSubscription();
            this.initDashboardClusterResourcesQuery();
            this.initNamespaceQuery();
        }
    }

    /**
     * getDerivedStateFromProps
     * @param props
     * @param state
     * @returns
     */
    static getDerivedStateFromProps(props: Props, state: State) {
        const {grafana, kubernetesConfig, mts, meshAdapters, meshAdaptersTimeStamp, prometheus} = props
        const st = {grafana, kubernetesConfig, mts, meshAdapters, meshAdaptersTimeStamp, prometheus}

        if (meshAdaptersTimeStamp > state.mts) {
            st.meshAdapters = meshAdapters;
            st.mts = meshAdaptersTimeStamp;
        }
        st.grafana = grafana;
        st.prometheus = prometheus;
        st.kubernetesConfig = props.kubernetesConfig
        return st
    }

    /**
     * disposeWorkloadWidgetSubscription
     */
    disposeWorkloadWidgetSubscription = () => {
        this.state.namespaceQuery && this.state.namespaceQuery.unsubscribe();
        this.state.clusterResourcesQuery && this.state.clusterResourcesQuery.unsubscribe();
        this.state.clusterResourcesSubscription && this.state.clusterResourcesSubscription.unsubscribe();
    }

    /**
     * disposeSubscription
     */
    disposeSubscription = () => {
        if (this.state.dataPlaneSubscription) {
            this.state.dataPlaneSubscription.unsubscribe()
        }
        if (this.state.controlPlaneSubscription) {
            this.state.controlPlaneSubscription.unsubscribe()
        }
        this.disposeWorkloadWidgetSubscription();
    }

    /**
     * initMeshSyncControlPlaneSubscription
     */
    initMeshSyncControlPlaneSubscription = () => {
        /**
         * ALL_MESH
         */
        const self = this;
        this.setState({_isMounted: true})
        const ALL_MESH = {type: "ALL_MESH", kubernetesClusterIDs: self.getKubernetesClusterIDs()};

        if (this.state._isMounted) {
            const controlPlaneSubscription = fetchControlPlanes(ALL_MESH).subscribe({
                next: (controlPlanesRes) => {
                    this.setState({controlPlaneState: controlPlanesRes})
                },
                error: (err) => console.error(err)
            });

            const dataPlaneSubscription = fetchDataPlanes(ALL_MESH).subscribe({
                next: (dataPlaneRes) => {
                    this.setState({dataPlaneState: dataPlaneRes})
                },
                error: (err) => console.error(err)
            });

            this.setState({controlPlaneSubscription, dataPlaneSubscription});
        }
    }

    /**
     * getKubernetesClusterIDs
     */
    getKubernetesClusterIDs = () => {
        return getKubernetesClusterIDsFromContextID(this.props.selectedKubernetesContexts, this.props.kubernetesConfig)
    }

    /**
     * handleError
     */
    handleError = (msg) => (error) => {
        this.props.updateProgress({showProgress: false});
        const self = this;
        this.props.enqueueSnackbar(`${msg}: ${error}`, {
            variant: "error", preventDuplicate: true,
            action: (key) => (
                <IconButton key="close" aria-label="Close" color="inherit"
                            onClick={() => self.props.closeSnackbar(key)}>
                    <CloseIcon/>
                </IconButton>
            ),
            autoHideDuration: 7000,
        });
    };

    /**
     * fetchMetricComponents
     */
    fetchMetricComponents = () => {
        const self = this;
        let selector = {type: "ALL_MESH", kubernetesClusterIDs: this.getKubernetesClusterIDs()};

        dataFetch(
            "/api/telemetry/metrics/config",
            {
                method: "GET",
                credentials: "include",
                headers: {"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",},
            },
            (result) => {
                self.props.updateProgress({showProgress: false}); // redux store
                if (typeof result !== "undefined" && result?.prometheusURL && result?.prometheusURL != "") {
                    fetchAvailableAddons(selector).subscribe({ // graphql addons status query
                        next: (res) => {
                            res?.addonsState?.forEach((addon) => {
                                if (addon.name === "prometheus" && (self.state.prometheusURL === "" || self.state.prometheusURL == undefined)) {
                                    self.setState({prometheusURL: "http://" + addon.endpoint})
                                    submitPrometheusConfigure(self, () => console.log("Prometheus added"));
                                }
                            });
                        },
                        error: (err) => console.log("error registering prometheus: " + err),
                    });
                }
            },
            self.handleError("Error getting prometheus config")
        );

        dataFetch(
            "/api/telemetry/metrics/grafana/config",
            {
                method: "GET",
                credentials: "include",
                headers: {"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",},
            },
            (result) => {
                self.props.updateProgress({showProgress: false});
                if (typeof result !== "undefined" && result?.grafanaURL && result?.grafanaURL != "") {
                    fetchAvailableAddons(selector).subscribe({
                        next: (res) => {
                            res?.addonsState?.forEach((addon) => {
                                if (addon.name === "grafana" && (self.state.grafanaURL === "" || self.state.grafanaURL == undefined)) {
                                    self.setState({grafanaURL: "http://" + addon.endpoint})
                                    submitGrafanaConfigure(self, () => {
                                        self.state.selectedBoardsConfigs.push(self.state.boardConfigs);
                                        console.info("Grafana added");
                                    });
                                }
                            });
                        },
                        error: (err) => console.log("error registering grafana: " + err),
                    });
                }
            },
            self.handleError("There was an error communicating with grafana config")
        );
        /**
         * fetchAvailableAddons
         */
        fetchAvailableAddons(selector).subscribe({
            next: (res) => {
                res?.addonsState?.forEach((addon) => {
                    if (addon.name === "prometheus" && (self.state.prometheusURL === "" || self.state.prometheusURL == undefined)) {
                        self.setState({prometheusURL: "http://" + addon.endpoint})
                        submitPrometheusConfigure(self, () => console.log("Prometheus connected"));
                    } else if (addon.name === "grafana" && (self.state.grafanaURL === "" || self.state.grafanaURL == undefined)) {
                        self.setState({grafanaURL: "http://" + addon.endpoint})
                        submitGrafanaConfigure(self, () => {
                            self.state.selectedBoardsConfigs.push(self.state.boardConfigs);
                            console.log("Grafana added");
                        });
                    }
                });
            },
            error: (err) => console.log("error registering addons: " + err),
        });
    }

    fetchAvailableAdapters = () => {
        const self = this;
        this.props.updateProgress({showProgress: true});
        dataFetch(
            "/api/system/adapters",
            {
                method: "GET",
                credentials: "include",
            },
            (result) => {
                this.props.updateProgress({showProgress: false});
                if (typeof result !== "undefined") {
                    const options = result.map((res) => ({
                        value: res.adapter_location,
                        label: res.adapter_location,
                    }));
                    this.setState({availableAdapters: options});
                }
            },
            self.handleError("Unable to fetch list of adapters.")
        );
    };

    /**
     * initNamespaceQuery
     */
    initNamespaceQuery = () => {
        const self = this;
        const namespaceQuery = fetchAvailableNamespaces({kubernetesClusterIDs: self.getKubernetesClusterIDs()})
            .subscribe({
                next: res => {
                    let namespaces: Record<string, any> = {namespaces: [], namespaceList: []};
                    res?.namespaces?.map((ns: { namespace: any }) => {
                        namespaces.push(ns?.namespace)
                    })
                    namespaces.sort((a: number, b: number) => {
                        a > b ? 1 : -1
                    })
                    self.setState({namespaceList: namespaces})
                },
                error: (err) => console.log("error at namespace fetch: " + err),
            })
        this.setState({namespaceQuery})
    }

    /**
     * initDashboardClusterResourcesQuery
     */
    initDashboardClusterResourcesQuery = () => {
        // ...
        const self = this;
        let k8s = self.getKubernetesClusterIDs();
        let namespace = self.state.selectedNamespace;

        if (this.state._isMounted) {
            const clusterResourcesQuery = fetchClusterResources(k8s, namespace).subscribe({
                next: (res) => {
                    this.setState({clusterResources: res?.clusterResources})
                },
                error: (err) => console.log(err)
            })
        }

    }

    /**
     * initDashboardClusterResourcesSubscription
     */
    initDashboardClusterResourcesSubscription = () => {
        const self = this;
        let k8s = self.getKubernetesClusterIDs();
        let namespace = self.state.selectedNamespace;

        if (this.state._isMounted) {
            const clusterResourcesSubscription = subscribeClusterResources((res) => {
                this.setState({clusterResources: res?.clusterResources})
            }, {
                kubernetesContextIDs: k8s,
                namespace: namespace,
            });
            this.setState({clusterResourcesSubscription})
        }
    }

    /**
     * setMeshScanData
     * @param controlPlanesData
     * @param dataPlanesData
     */
    setMeshScanData = (controlPlanesData, dataPlanesData) => {
        const self = this;
        const namespaces: Record<string, any> = {};
        const activeNamespaces: Record<string, any> = {};
        const processedControlPlanesData = controlPlanesData?.controlPlanesState?.map((mesh) => {
            if (!mesh?.members?.length) {
                return;
            }

            let proxies: any[] = []
            if (Array.isArray(dataPlanesData?.dataPlanesState)) {
                const dataplane = dataPlanesData.dataPlanesState.find((mesh_: { name: any }) => mesh_.name === mesh.name)

                if (Array.isArray(dataplane?.proxies)) proxies = dataplane.proxies
            }

            const processedMember = mesh?.members?.map((member: {
                data_planes: any; name: any; namespace: any
            }) => {
                if (namespaces[mesh.name]) {
                    namespaces[mesh.name].add(member.namespace)
                } else {
                    namespaces[mesh.name] = new Set([member.namespace]);
                }

                if (proxies.length > 0) {
                    const controlPlaneMemberProxies = proxies.filter(proxy => proxy.controlPlaneMemberName === member.name)

                    if (controlPlaneMemberProxies.length > 0) {
                        member = {
                            ...member,
                            data_planes: controlPlaneMemberProxies
                        }
                    }
                }
                return member
            });
            namespaces[mesh.name] = [...namespaces[mesh.name]];
            activeNamespaces[mesh.name] = namespaces[mesh.name][0] || "";

            return {
                ...mesh,
                members: processedMember
            }
        });
        self.setState({meshScan: processedControlPlanesData?.filter(data => !!data).filter((data) => data.members?.length > 0)});
        self.setState({meshScanNamespaces: namespaces, activeMeshScanNamespace: activeNamespaces});
    };

    /**
     * generateMeshScanPodName
     * @param podname
     * @param hash
     * @param custom
     * @returns
     */
    generateMeshScanPodName = (podname, hash, custom) => {
        const str = custom || podname;
        return {
            full: podname,
            trimmed: str.substring(0, (hash ? str.indexOf(hash) : str.length) - 1),
        };
    };

    render() {
        return <div></div>
    }
}


// Redux + Type declarations
DashboardComponent.propTypes = {classes: PropTypes.object.isRequired,};

export const mapStateToProps = (dispatch: string) => ({
    updateProgress: bindActionCreators(updateProgress, dispatch),
    updateGrafanaConfig: bindActionCreators(updateGrafanaConfig, dispatch),
    // updatePrometheusConfig:bindActionCreators(updatePrometheusConfig, dispatch),
})

export const mapDispatchToProps = {}

export default DashboardComponent
