/**
 * @generated SignedSource<<30e6ee8ae09c446d0da4ace6f606618d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';

export type PageFilter = {
    from?: string | null;
    order?: string | null;
    page: string;
    pageSize: number;
    search?: string | null;
    to?: string | null;
};
export type FetchAllResultsQuery$variables = {
    selector: PageFilter;
};
export type FetchAllResultsQuery$data = {
    readonly fetchAllResults: {
        readonly page: number;
        readonly pageSize: number;
        readonly results: ReadonlyArray<{
            readonly createdAt: string | null;
            readonly mesh: string | null;
            readonly mesheryID: string | null;
            readonly name: string | null;
            readonly performanceProfile: string | null;
            readonly runnerResults: any | null;
            readonly serverMetrics: any | null;
            readonly testID: string | null;
            readonly testStartTime: string | null;
            readonly updatedAt: string | null;
            readonly userID: string | null;
        } | null> | null;
        readonly totalCount: number;
    };
};
export type FetchAllResultsQuery = {
    response: FetchAllResultsQuery$data;
    variables: FetchAllResultsQuery$variables;
};

const node: ConcreteRequest = (function () {
    var v0 = [
            {
                "defaultValue": null,
                "kind": "LocalArgument",
                "name": "selector"
            }
        ],
        v1 = [
            {
                "alias": null,
                "args": [
                    {
                        "kind": "Variable",
                        "name": "selector",
                        "variableName": "selector"
                    }
                ],
                "concreteType": "PerfPageResult",
                "kind": "LinkedField",
                "name": "fetchAllResults",
                "plural": false,
                "selections": [
                    {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "page",
                        "storageKey": null
                    },
                    {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "pageSize",
                        "storageKey": null
                    },
                    {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "totalCount",
                        "storageKey": null
                    },
                    {
                        "alias": null,
                        "args": null,
                        "concreteType": "MesheryResult",
                        "kind": "LinkedField",
                        "name": "results",
                        "plural": true,
                        "selections": [
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "mesheryID",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "name",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "mesh",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "performanceProfile",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "testID",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "serverMetrics",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "testStartTime",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "createdAt",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "userID",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "updatedAt",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "runnerResults",
                                "storageKey": null
                            }
                        ],
                        "storageKey": null
                    }
                ],
                "storageKey": null
            }
        ];
    return {
        "fragment": {
            "argumentDefinitions": (v0/*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "FetchAllResultsQuery",
            "selections": (v1/*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0/*: any*/),
            "kind": "Operation",
            "name": "FetchAllResultsQuery",
            "selections": (v1/*: any*/)
        },
        "params": {
            "cacheID": "bac94bb7c870d593bd21f96aa5221c8f",
            "id": null,
            "metadata": {},
            "name": "FetchAllResultsQuery",
            "operationKind": "query",
            "text": "query FetchAllResultsQuery(\n  $selector: PageFilter!\n) {\n  fetchAllResults(selector: $selector) {\n    page\n    pageSize\n    totalCount\n    results {\n      mesheryID\n      name\n      mesh\n      performanceProfile\n      testID\n      serverMetrics\n      testStartTime\n      createdAt\n      userID\n      updatedAt\n      runnerResults\n    }\n  }\n}\n"
        }
    };
})();

(node as any).hash = "78f7036372f7affc41679a17af722fa7";

export default node;
