import {fetchQuery, graphql} from "react-relay";
import environment from "../../../lib/relayEnvironment";

/**
 *
 * @param ctxIDs
 * @param namespace
 * @returns
 */
export default function fetchClusterResources(ctxIDs: {}, namespace: {}) {
    const vars = {
        kubernetesContextIDs: ctxIDs,
        namespace: namespace
    }

    const query = graphql`
      query ClusterResourcesQuery($kubernetesContextIDs: [String!], $namespace: String!) {
        clusterResources: getClusterResources(kubernetesContextIDs: $kubernetesContextIDs, namespace: $namespace) {
          resources {
            kind
            count
          }
        }
      }
    `;

    return fetchQuery(environment, query, vars)
}
