import {graphql, requestSubscription} from "react-relay";
import environment from "../../../lib/relayEnvironment";

const meshSyncEventsSubscription = graphql`
 subscription MeshSyncEventsSubscription($kubernetesContextIDs: [String!]) {
    subscribeMeshSyncEvents(kubernetesContextIDs: $kubernetesContextIDs) {
         type
    		 object
    		 contextID
        }
      }
`;

export default function subcribeControllersStatus(dataCB) {
    return requestSubscription(environment, {
        subscription: meshSyncEventsSubscription,
        variables: {kubernetesContextIDs: [""]},
        onNext: dataCB,
        onError: (error) => console.log("An error occured:", error),
    });
}

