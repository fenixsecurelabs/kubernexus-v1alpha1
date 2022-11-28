// helper components
export const disposeSubscription = () => {
}
export const disposeWorkloadWidgetSubscription = () => {
}

export const initNamespaceQuery = () => {
}
export const initDashboardClusterResourcesQuery = () => {
}
export const initDashboardClusterResourcesSubscription = () => {
}

export const initMeshSyncControlPlaneSubscription = () => {
}

export const getKubernetesClusterIDs = () => {
}

/**
 * This function takes in all the context and returns
 * their respective cluster IDs associated to them
 * @param {Array.<string>} selectedContexts
 * @param {Array.<string>} kubernetesConfig
 * @returns
 */
export const getKubernetesClusterIDsFromContextID = (selectedContexts: Array<string>, kubernetesConfig: Array<string>) => {
    if (selectedContexts.length === 0) {
        return []
    }

    if (selectedContexts.includes("all")) {
        return ["all"]
    }

    const clusterIDs: any[] = [];

    selectedContexts.forEach(context => {
        const clusterID = kubernetesConfig.find(cfg => cfg.id === context)?.kubernetes_server_id
        if (clusterID) {
            clusterIDs.push(clusterID)
        }
    });
    return clusterIDs;
}

export const fetchDataPlanes = () => {
}
export const fetchControlPlanes = () => {
}
export const fetchMetricComponents = () => {
}
export const fetchAvailableAdapters = () => {
}
export const fetchAvailableNamespaces = () => {
}

export const setMeshScanData = () => {
}
export const generateMeshScanPodName = () => {
}

export const submitGrafanaConfigure = () => {
}
export const submitPrometheusConfigure = () => {
}
