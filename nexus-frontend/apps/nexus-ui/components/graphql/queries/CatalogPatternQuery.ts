import {fetchQuery, graphql} from "react-relay";
import environment from "../../../lib/relayEnvironment";

/**
 *
 * @param variables
 * @returns
 */
export default function fetchCatalogPattern(variables: {}) {
    const query = graphql`
        query CatalogPatternQuery($selector: CatalogSelector!) {
          catalogPatterns: fetchPatternCatalogContent(selector: $selector) { 
            id
            name
            userID
            patternFile
            visibility
            catalogData
            createdAt
            updatedAt
          }
        }
      `;

    return fetchQuery(environment, query, variables)
}