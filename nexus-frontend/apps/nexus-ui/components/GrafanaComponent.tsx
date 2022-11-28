import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {Component} from "react"
import {dataFetch} from "../../../packages/lib/dataFetch";
import {getKubernetesClusterIDsFromContextID} from "./constants/Constants";
import propTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import fetchAvailableAddons from "./graphql/queries/AddonsStatusQuery";

type Props = {
    grafana: any
    grafanaURL: string
    grafanaAPIKey: string
    grafanaBoards: string[]
    grafanaBoardSearch: string
    grafanaConfigSuccess: boolean
    selectedBoardsConfig: string[]
    ts: Date

    isMeshConfigured: boolean
    kubernetesConfig: string[]
    selectedKubernetesContexts: string[]

    updateProgress: any
    enqueueSnackbar: any
    closeSnackbar: any

}
type State = {
    grafanaURL: Props["grafana"]
    grafanaAPIKey: Props["grafanaAPIKey"]
    grafanaBoards: Props["grafanaBoards"]
    grafanaBoardSearch: Props["grafanaBoardSearch"]
    grafanaConfigSuccess: boolean
    selectedBoardsConfigs: Props["selectedBoardsConfig"]

    urlError: boolean

    ts: Props["grafana"]
}

class GrafanaComponent extends Component<Props, State> {
    static propTypes: { classes: propTypes.Validator<object>; };

    constructor(props: Props) {
        // ...
        super(props)
    }

    /**
     * Deprecated, use static getDerivedStateFromProps
     * @param nextProps
     * @param nextContext
     * @returns
     */
    UNSAFE_componentWillReceiveProps(nextProps: Readonly<Props>, nextContext: any) {
        const {grafanaURL, grafanaAPIKey, selectedBoardsConfigs} = nextProps.grafana;
        if (nextProps.grafana.ts > this.state.ts) {
            this.setState(
                {
                    grafanaURL,
                    grafanaAPIKey,
                    selectedBoardsConfigs,
                    // grafanaConfigSuccess: grafanaURL !== "",
                    ts: nextProps.ts,
                },
                () => getGrafanaBoards(this)
            );
        }
        return {};
    }

    /**
     * getDerivedStateFromProps
     * @param props
     * @param state
     */
    static getDerivedStateFromProps(props: Props, state: State) {
        const {grafana, grafanaURL, grafanaAPIKey, selectedBoardsConfig} = props
    }

    componentDidMount(): void {
        const self = this;

        if (self.props.isMeshConfigured)
            dataFetch(
                "/api/telemetry/metrics/grafana/config",
                {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    },
                },
                (result) => {
                    self.props.updateProgress({showProgress: false});
                    if (!(typeof result !== "undefined" && result?.grafanaURL && result?.grafanaURL != "")) {
                        let selector = {
                            type: "ALL_MESH",
                            k8sClusterIDs: this.getKubernetesClusterIDs()
                        };
                        fetchAvailableAddons(selector).subscribe({
                            next: (res) => {
                                res?.addonsState?.forEach((addon) => {
                                    if (addon.name === "grafana" && self.state.grafanaURL === "") {
                                        self.setState({grafanaURL: "http://" + addon.endpoint})
                                        submitGrafanaConfigure(self, () => self.setState({
                                            selectedBoardsConfigs: self.state.grafanaBoards?.[2]
                                                ? [self.state.grafanaBoards[2]]
                                                : []
                                        }));
                                    }
                                });
                            },
                            error: (err) => console.log("error registering Grafana: " + err),
                        });
                    }
                },
                self.handleError("There was an error communicating with grafana config")
            )
    }

    /**
     * getKubernetesClusterIDs
     * @returns
     */
    getKubernetesClusterIDs = () => {
        return getKubernetesClusterIDsFromContextID(this.props.selectedKubernetesContexts, this.props.kubernetesConfig)
    }

    handleChange = () => () => {
    }

    handleChangeApiKey = () => () => {
    }

    /**
     * handleGrafanaConfigure
     * @returns
     */
    handleGrafanaConfigure = () => {
        const {grafanaURL} = this.state;
        if (grafanaURL === "" || !(grafanaURL.toLowerCase().startsWith("http://") || grafanaURL.toLowerCase().startsWith("https://"))
        ) {
            this.setState({urlError: true})
            return;
        }
        submitGrafanaConfigure(this);
    };

    handleGrafanaChipDelete = () => {
        this.props.updateProgress({showProgress: true})

        const self = this;
        dataFetch(
            "/api/telemetry/metrics/grafana/config",
            {
                method: "DELETE",
                credentials: "include",
            },
            (result) => {
                this.props.updateProgress({showProgress: false});
                if (typeof result !== "undefined") {
                    self.setState({
                        grafanaConfigSuccess: false,
                        grafanaURL: "",
                        grafanaAPIKey: "",
                        grafanaBoardSearch: "",
                        grafanaBoards: [],
                        selectedBoardsConfigs: [],
                    });
                    self.props.updateGrafanaConfig({
                        grafana: {
                            grafanaURL: "",
                            grafanaAPIKey: "",
                            grafanaBoardSearch: "",
                            grafanaBoards: [],
                            selectedBoardsConfigs: [],
                        },
                    });
                }
            },
            self.handleError("There was an error communicating with Grafana")
        );
    };

    /**
     * handleError
     * @param msg
     * @returns
     */
    handleError = (msg) => () => {
        const self = this;
        // this.setState({timerDialogOpen: false });
        // this.props.updateProgress({ showProgress: false });
        this.props.enqueueSnackbar(msg, {
            variant: "error",
            action: (key) => (
                <IconButton key="close" aria-label="Close" color="inherit"
                            onClick={() => self.props.closeSnackbar(key)}>
                    <CloseIcon/>
                </IconButton>
            ),
            autoHideDuration: 8000,
        });
    };
}

const getGrafanaBoards = (self, cb = () => {
}) => {
    const {
        grafanaURL, grafanaAPIKey, grafanaBoardSearch, selectedBoardsConfigs
    } = self.state;
    if (typeof grafanaURL === "undefined" || grafanaURL === "") {
        return;
    }
    self.props.updateProgress({showProgress: true});
    dataFetch(
        `/api/telemetry/metrics/grafana/boards?dashboardSearch=${grafanaBoardSearch}`,
        {
            method: "GET",
            credentials: "include",
        },
        (result) => {
            self.props.updateProgress({showProgress: false});
            if (typeof result !== "undefined") {
                self.setState({grafanaBoards: result});
                self.props.updateGrafanaConfig({
                    grafana: {
                        grafanaURL,
                        grafanaAPIKey,
                        grafanaBoardSearch,
                        grafanaBoards: result,
                        selectedBoardsConfigs,
                    },
                });
                cb()
            }
        },
        self.handleError("There was an error communicating with Grafana")
    );
};

export const submitGrafanaConfigure = (self, cb = () => {
}) => {
    const {grafanaURL, grafanaAPIKey, grafanaBoards, grafanaBoardSearch, selectedBoardsConfigs} = self.state;
    if (grafanaURL === "") {
        return;
    }
    const data = {
        grafanaURL: string,
        grafanaAPIKey: string,
    };
    const params = Object.keys(data)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join("&");
    // console.log(`data to be submitted for load test: ${params}`);
    self.props.updateProgress({showProgress: true});
    dataFetch(
        "/api/telemetry/metrics/grafana/config",
        {

            method: "POST",
            credentials: "include",
            headers: {"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",},
            body: params,
        },
        (result) => {
            self.props.updateProgress({showProgress: false});
            if (typeof result !== "undefined") {
                self.props.enqueueSnackbar("Grafana was successfully configured!", {
                    variant: "success",
                    autoHideDuration: 2000,
                    action: function Loader(key) {
                        return (
                            <IconButton key="close" aria-label="Close" color="inherit"
                                        onClick={() => self.props.closeSnackbar(key)}>
                                <CloseIcon/>
                            </IconButton>
                        );
                    },
                });
                self.setState({grafanaConfigSuccess: true});
                self.props.updateGrafanaConfig({
                    grafana: {
                        grafanaURL,
                        grafanaAPIKey,
                        grafanaBoardSearch,
                        grafanaBoards,
                        selectedBoardsConfigs,
                    },
                });
                getGrafanaBoards(self, cb);
            }
        },
        self.handleError("There was an error communicating with Grafana")
    );
};

GrafanaComponent.propTypes = {classes: propTypes.object.isRequired};

const mapDispatchToProps = (dispatch) => ({
    updateGrafanaConfig: bindActionCreators(updateGrafanaConfig, dispatch),
    updateProgress: bindActionCreators(updateProgress, dispatch),
});

export default GrafanaComponent
