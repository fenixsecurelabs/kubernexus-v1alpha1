import {graphql, requestSubscription} from "react-relay";
import environment from "../../../lib/relayEnvironment";

const mesheryControllersStatusSubscription = graphql`
 subscription NexusControllersStatusSubscription($kubernetesContextIDs: [String!]) {
    subscribeMesheryControllersStatus(kubernetesContextIDs: $kubernetesContextIDs) {
          contextID 
          controller
          status
        }
      }
`;

export default function subscribeMesheryControllersStatus(dataCB) {
    return requestSubscription(environment, {
        subscription: mesheryControllersStatusSubscription,
        variables: {kubernetesContextIDs: [""]},
        onNext: dataCB,
        onError: (error) => console.log(`An error occured:`, error),
    });
}

