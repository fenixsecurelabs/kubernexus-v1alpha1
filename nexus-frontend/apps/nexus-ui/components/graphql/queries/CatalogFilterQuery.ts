import {fetchQuery, graphql} from "react-relay";
import environment from "../../../lib/relayEnvironment";

/**
 *
 * @param variables
 * @returns
 */
export default function fetchCatalogFilter(variables: {}) {
    const query = graphql`
        query CatalogFilterQuery($selector: CatalogSelector!) {
          catalogFilters: fetchFilterCatalogContent(selector: $selector) {
              id
              name
              userID
              filterFile
              visibility
              catalogData
              createdAt
              updatedAt
          }
        }
      `;

    return fetchQuery(environment, query, variables)
}