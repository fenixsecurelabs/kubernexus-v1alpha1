import {fetchQuery, graphql} from "react-relay";
import environment from "../../../lib/relayEnvironment";

export default function fetchAvailableNamespaces(vars: any) {
    const query = graphql`
        query NamespaceQuery($kubernetesClusterIDs: [String!]) {
            namespaces: getAvailableNamespaces(kubernetesClusterIDs: $kubernetesClusterIDs) {
                namespace
            }
        }
    `;
    return fetchQuery(environment, query, vars);
}