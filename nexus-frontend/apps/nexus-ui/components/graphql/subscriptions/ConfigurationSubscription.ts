import {graphql, requestSubscription} from "react-relay";
import environment from "../../../lib/relayEnvironment";


const configurationSubscription = graphql`
  subscription ConfigurationSubscription($applicationSelector: PageFilter!, $patternSelector: PageFilter!, $filterSelector: PageFilter!) {
    configuration: subscribeConfiguration(applicationSelector: $applicationSelector, patternSelector: $patternSelector, filterSelector: $filterSelector) {
      applications {
        page
        pageSize
        totalCount
        applications {
          id
          name
          applicationFile
          type {
            String
            Valid
          }
          userID
          createdAt
          updatedAt
        }
      }
      patterns {
        page
        pageSize
        totalCount
        patterns {
          id
          name
          userID
          patternFile
          visibility
          catalogData
          canSupport
          errmsg
          createdAt
          updatedAt
        }
      }
      filters {
        page
        pageSize
        totalCount
        filters {
          id
          name
          filterFile
          visibility
          catalogData
          userID
          createdAt
          updatedAt
        }
      }
    }
  }
`;

export default function ConfigurationSubscription(onNext, variables) {
    return requestSubscription(environment, {
        subscription: configurationSubscription,
        variables: variables,
        onNext: onNext,
        onError: error => console.log("ERROR OCCURED IN CONFIGURATION SUBCRIPTION", error)
    });
}
