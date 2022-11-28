import {fetchQuery, graphql} from "react-relay";
import environment from "../../../lib/relayEnvironment";

/**
 *
 * @param variables
 * @returns
 */
export default function fetchPerformanceProfiles(variables: { selector: {} }) {
    const vars = {selector: variables.selector}

    const query = graphql`
        query PerformanceProfilesQuery($selector: PageFilter!) {
          getPerformanceProfiles(selector: $selector) {
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

    return fetchQuery(environment, query, vars)
}
