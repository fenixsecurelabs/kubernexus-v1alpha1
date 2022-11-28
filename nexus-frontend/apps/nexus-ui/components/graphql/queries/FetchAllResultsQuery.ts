import {fetchQuery, graphql} from "react-relay";
import environment from "../../../lib/relayEnvironment";

/**
 *
 * @param variables
 * @returns
 */
export default function fetchAllResults(variables: { selector: {} }) {
    const vars = {selector: variables.selector};

    const query = graphql`
    query FetchAllResultsQuery($selector: PageFilter!) {
      fetchAllResults(selector: $selector) {
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

    return fetchQuery(environment, query, vars);
}
