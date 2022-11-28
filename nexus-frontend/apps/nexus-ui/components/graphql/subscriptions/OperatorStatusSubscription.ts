import {graphql, requestSubscription} from "react-relay";
import environment from "../../../lib/relayEnvironment";

const operatorStatusSubscription = graphql`
  subscription OperatorStatusSubscription($kubernetesContextIDs: [String!]) {
    operator: listenToOperatorState(kubernetesContextIDs: $kubernetesContextIDs) {
      contextID
      operatorStatus {
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
  }
`;

export default function subscribeOperatorStatusEvents(dataCB, contextIds) {
    return requestSubscription(environment, {
        subscription: operatorStatusSubscription,
        variables: {kubernetesContextIDs: contextIds},
        onNext: dataCB,
        onError: (error) => console.log("An error occured:", error),
    });
}
