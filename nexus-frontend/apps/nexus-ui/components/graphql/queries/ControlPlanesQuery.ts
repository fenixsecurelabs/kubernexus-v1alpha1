import {fetchQuery, graphql} from "react-relay";
import environment from "../../../lib/relayEnvironment";

/**
 *
 * @param variables
 * @returns
 */
export default function fetchControlPlanes(variables: {}) {
    const vars = {filter: variables};

    const query = graphql`
      query ControlPlanesQuery($filter: ServiceMeshFilter) {
        controlPlanesState: getControlPlanes(filter: $filter) {
          name
          members {
            name
            version
            component
            namespace
          } 
        }
      }
    `;

    return fetchQuery(environment, query, vars);
}