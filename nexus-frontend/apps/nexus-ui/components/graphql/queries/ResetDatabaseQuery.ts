import {fetchQuery, graphql} from "relay-runtime"
import environment from "../../../lib/relayEnvironment";


export default function resetDatabase(variables) {
    const vars = {selector: variables.selector, kubernetesContextID: variables.kubernetesContextID};

    const query = graphql`
        query ResetDatabaseQuery($selector: ResyncActions!, $kubernetesContextID: String!) {
           resetStatus: resyncCluster(selector: $selector, kubernetesContextID: $kubernetesContextID) 
        }
    `;

    return fetchQuery(environment, query, vars)
}
