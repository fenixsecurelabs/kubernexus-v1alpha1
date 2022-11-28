// import { promisifiedDataFetch } from "../../../packages/lib/dataFetch";
import {Environment, GraphQLResponse, Network, RecordSource, RequestParameters, Store, Variables } from 'relay-runtime'
// import { createClient } from 'graphql-ws'

async function fetchQuery(operation: RequestParameters, variables: Variables): Promise<GraphQLResponse> {
    const response = await fetch("/api/system/graphql/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    })

    return response.json()
}

/*
const wsClient = createClient({
    url: 'ws://localhost:3000'
})


async function setupSubscription(operation: RequestParameters, variables: Variables, cacheConfig: CacheConfig) {
    return Observable.create((sink) => {
        return wsClient.subscribe(
            {
                operationName: operation.name,
                query: operation.text,
                variables,
            },
            sink,
        );
    })
}
*/

const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource)
});

export default environment