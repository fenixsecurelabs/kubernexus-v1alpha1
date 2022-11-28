import {fetchQuery, graphql} from "react-relay";
import environment from "../../../lib/relayEnvironment";

/**
 *
 * @param variables
 * @returns
 */
export default function deployMeshSync(variables: {}) {
    const query = graphql`
      query DeployMeshSyncQuery($kubernetesContextID: String!) {
      deployMeshsync (kubernetesContextID: $kubernetesContextID)
      }
    `;

    return fetchQuery(environment, query, variables);
}