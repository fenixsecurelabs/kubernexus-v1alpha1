import {fetchQuery, graphql} from "react-relay";
import environment from "../../../lib/relayEnvironment";

/**
 *
 * @param variables
 * @returns
 */
export default function connectToNATS(variables: {}) {

    const query = graphql`
      query DeployNatsQuery($kubernetesContextID: String!)  {
        connectToNats (kubernetesContextID: $kubernetesContextID)
      }
    `;

    return fetchQuery(environment, query, variables);
}
