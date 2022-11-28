/**
 * @generated SignedSource<<b2f21d80a6be057278770d319af9bcdc>>
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
export type PerformanceResultSubscription$variables = {
    profileID: string;
    selector: PageFilter;
};
export type PerformanceResultSubscription$data = {
    readonly subscribePerfResults: {
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
export type PerformanceResultSubscription = {
    response: PerformanceResultSubscription$data;
    variables: PerformanceResultSubscription$variables;
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
                "name": "subscribePerfResults",
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
            "name": "PerformanceResultSubscription",
            "selections": (v2/*: any*/),
            "type": "Subscription",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [
                (v1/*: any*/),
                (v0/*: any*/)
            ],
            "kind": "Operation",
            "name": "PerformanceResultSubscription",
            "selections": (v2/*: any*/)
        },
        "params": {
            "cacheID": "f232d4131f59c34e885f7dd6437190c1",
            "id": null,
            "metadata": {},
            "name": "PerformanceResultSubscription",
            "operationKind": "subscription",
            "text": "subscription PerformanceResultSubscription(\n  $selector: PageFilter!\n  $profileID: String!\n) {\n  subscribePerfResults(selector: $selector, profileID: $profileID) {\n    page\n    pageSize\n    totalCount\n    results {\n      mesheryID\n      name\n      mesh\n      performanceProfile\n      testID\n      serverMetrics\n      testStartTime\n      createdAt\n      userID\n      updatedAt\n      runnerResults\n    }\n  }\n}\n"
        }
    };
})();

(node as any).hash = "e3796fe4d9592757108066ff843b915f";

export default node;
