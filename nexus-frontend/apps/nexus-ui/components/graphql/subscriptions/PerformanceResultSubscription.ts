import {graphql, requestSubscription} from "react-relay";
import environment from "../../../lib/relayEnvironment";

const performanceResultSubscription = graphql`
subscription PerformanceResultSubscription($selector: PageFilter!, $profileID: String!) {
    subscribePerfResults(selector: $selector, profileID: $profileID) {
            page
            pageSize
            totalCount
            results {
                mesheryID
                name
                mesh
                performanceProfile
                testID
                serverMetrics
                testStartTime
                createdAt
                userID
                updatedAt
                runnerResults
            }
        }
    }
`;
export default function subscribePerformanceProfiles(dataCB, variables) {
    return requestSubscription(environment, {
        subscription: performanceResultSubscription,
        variables: variables,
        onNext: dataCB,
        onError: (error) => console.log(`requestSubscription error:`, error),
    });
}