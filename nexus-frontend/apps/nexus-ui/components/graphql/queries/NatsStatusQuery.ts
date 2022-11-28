import {fetchQuery, graphql} from "react-relay";
import environment from "../../../lib/relayEnvironment";

/**
 *
 * @param variables
 * @returns
 */
export default function NatsStatusQuery(variables: {}) {
    const query = graphql`
    query NatsStatusQuery($kubernetesContextID: String!) {
      controller: getNatsStatus(kubernetesContextID: $kubernetesContextID){
            name
            version
            status
        }
    }
  `;

    return fetchQuery(environment, query, variables);
}
