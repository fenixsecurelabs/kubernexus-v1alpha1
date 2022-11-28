/**
 * @generated SignedSource<<c5c3ac2e8745e6fdab2d5d50e8302c61>>
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
export type PerformanceResultQuery$variables = {
    profileID: string;
    selector: PageFilter;
};
export type PerformanceResultQuery$data = {
    readonly fetchResults: {
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
export type PerformanceResultQuery = {
    response: PerformanceResultQuery$data;
    variables: PerformanceResultQuery$variables;
};

const node: ConcreteRequest = (function () {
    var v0 = {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "profileID"
        },
        v1 = {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "selector"
        },
        v2 = [
            {
                "alias": null,
                "args": [
                    {
                        "kind": "Variable",
                        "name": "profileID",
                        "variableName": "profileID"
                    },
                    {
                        "kind": "Variable",
                        "name": "selector",
                        "variableName": "selector"
                    }
                ],
                "concreteType": "PerfPageResult",
                "kind": "LinkedField",
                "name": "fetchResults",
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
            "argumentDefinitions": [
                (v0/*: any*/),
                (v1/*: any*/)
            ],
            "kind": "Fragment",
            "metadata": null,
            "name": "PerformanceResultQuery",
            "selections": (v2/*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [
                (v1/*: any*/),
                (v0/*: any*/)
            ],
            "kind": "Operation",
            "name": "PerformanceResultQuery",
            "selections": (v2/*: any*/)
        },
        "params": {
            "cacheID": "afe657e219f55a75c4f0fafc921cc32b",
            "id": null,
            "metadata": {},
            "name": "PerformanceResultQuery",
            "operationKind": "query",
            "text": "query PerformanceResultQuery(\n  $selector: PageFilter!\n  $profileID: String!\n) {\n  fetchResults(selector: $selector, profileID: $profileID) {\n    page\n    pageSize\n    totalCount\n    results {\n      mesheryID\n      name\n      mesh\n      performanceProfile\n      testID\n      serverMetrics\n      testStartTime\n      createdAt\n      userID\n      updatedAt\n      runnerResults\n    }\n  }\n}\n"
        }
    };
})();

(node as any).hash = "a876771d9e84be49c07422c93d892830";

export default node;
