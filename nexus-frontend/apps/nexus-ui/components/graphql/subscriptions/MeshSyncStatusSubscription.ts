import {graphql, requestSubscription} from "react-relay";
import environment from "../../../lib/relayEnvironment";

const meshSyncStatusSubscription = graphql`
subscription MeshSyncStatusSubscription($kubernetesContextIDs: [String!]) {
  listenToMeshSyncEvents(kubernetesContextIDs: $kubernetesContextIDs) {
    contextID
    OperatorControllerStatus {
      name
      status
      version
      error {
        code
        description
      }
    }
  }
}
`;

export default function subscribeMeshSyncStatusEvents(dataCB, contextIds) {
    return requestSubscription(environment, {
        subscription: meshSyncStatusSubscription,
        variables: {kubernetesContextIDs: contextIds},
        onNext: dataCB,
        onError: (error) => console.log("An error occured:", error),
    });
}
