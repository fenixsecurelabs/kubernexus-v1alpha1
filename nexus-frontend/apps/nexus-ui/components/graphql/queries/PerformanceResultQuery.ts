import {fetchQuery, graphql} from "react-relay";
import environment from "../../../lib/relayEnvironment";

/**
 *
 * @param variables
 * @returns
 */
export default function fetchPerformanceResults(variables: { selector: {}, profileID: {} }) {
    const vars = {
        selector: variables.selector,
        profileID: variables.profileID
    }

    const query = graphql`
        query PerformanceResultQuery($selector: PageFilter!, $profileID: String!) {
                fetchResults(selector: $selector, profileID: $profileID) {
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

    return fetchQuery(environment, query, vars)
}
