import {graphql, requestSubscription} from "react-relay";
import environment from "../../../lib/relayEnvironment";

const performanceProfilesSubscription = graphql`
subscription PerformanceProfilesSubscription($selector: PageFilter!) {
    subscribePerfProfiles(selector: $selector) {
    page
    pageSize
    totalCount
    profiles {
      concurrentRequest
      createdAt
      duration
      endpoints
      id
      lastRun
      loadGenerators
      name
      qps
      totalResults
      updatedAt
      userID
      requestBody
      requestCookies
      requestHeaders
      contentType
      serviceMesh
    }
  }
}
`;
export default function subscribePerformanceProfiles(dataCB, variables) {
    return requestSubscription(environment, {
        subscription: performanceProfilesSubscription,
        variables: variables,
        onNext: dataCB,
        onError: (error) => console.log(`requestSubscription error:`, error),
    });
}