import {fetchQuery, graphql} from "react-relay";
import environment from "../../../lib/relayEnvironment";

/**
 *
 * @param variables
 * @returns
 */
export default function MeshsyncStatusQuery(variables: { kubernetesContextID: {} }) {
    const vars = {kubernetesContextID: variables.kubernetesContextID};

    const query = graphql`
    query MeshsyncStatusQuery($kubernetesContextID: String!)  {
        controller: getMeshsyncStatus(kubernetesContextID: $kubernetesContextID){
            name
            version
            status
        }
    }
  `;

    return fetchQuery(environment, query, vars);
}
