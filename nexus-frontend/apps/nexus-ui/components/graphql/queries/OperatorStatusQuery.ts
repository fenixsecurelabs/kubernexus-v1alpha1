import {fetchQuery, graphql} from "react-relay";
import environment from "../../../lib/relayEnvironment";

export default function fetchMesheryOperatorStatus(variables: { kubernetesContextID: {} }) {
    const vars = {kubernetesContextID: variables.kubernetesContextID};

    const query = graphql`
        query OperatorStatusQuery($kubernetesContextID: String!) {
          operator: getOperatorStatus(kubernetesContextID: $kubernetesContextID) {
            status
            version
            controllers {
                name
                version
                status
            }
            error {
              code
              description
            }
          }
        }
    `;

    return fetchQuery(environment, query, vars)
}
