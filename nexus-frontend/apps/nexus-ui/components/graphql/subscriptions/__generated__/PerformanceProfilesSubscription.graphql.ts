/**
 * @generated SignedSource<<cf4b47b57f5762469b30a37e755f7c4b>>
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
export type PerformanceProfilesSubscription$variables = {
    selector: PageFilter;
};
export type PerformanceProfilesSubscription$data = {
    readonly subscribePerfProfiles: {
        readonly page: number;
        readonly pageSize: number;
        readonly profiles: ReadonlyArray<{
            readonly concurrentRequest: number;
            readonly contentType: string | null;
            readonly createdAt: string | null;
            readonly duration: string;
            readonly endpoints: ReadonlyArray<string | null> | null;
            readonly id: string;
            readonly lastRun: string | null;
            readonly loadGenerators: string | null;
            readonly name: string | null;
            readonly qps: number | null;
            readonly requestBody: string | null;
            readonly requestCookies: string | null;
            readonly requestHeaders: string | null;
            readonly serviceMesh: string | null;
            readonly totalResults: number | null;
            readonly updatedAt: string | null;
            readonly userID: string | null;
        } | null> | null;
        readonly totalCount: number;
    };
};
export type PerformanceProfilesSubscription = {
    response: PerformanceProfilesSubscription$data;
    variables: PerformanceProfilesSubscription$variables;
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
                "concreteType": "PerfPageProfiles",
                "kind": "LinkedField",
                "name": "subscribePerfProfiles",
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
                        "concreteType": "PerfProfile",
                        "kind": "LinkedField",
                        "name": "profiles",
                        "plural": true,
                        "selections": [
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "concurrentRequest",
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
                                "name": "duration",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "endpoints",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "id",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "lastRun",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "loadGenerators",
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
                                "name": "qps",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "totalResults",
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
                                "name": "userID",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "requestBody",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "requestCookies",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "requestHeaders",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "contentType",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "serviceMesh",
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
            "name": "PerformanceProfilesSubscription",
            "selections": (v1/*: any*/),
            "type": "Subscription",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0/*: any*/),
            "kind": "Operation",
            "name": "PerformanceProfilesSubscription",
            "selections": (v1/*: any*/)
        },
        "params": {
            "cacheID": "c5a9507735467037e6a51e858d966f3f",
            "id": null,
            "metadata": {},
            "name": "PerformanceProfilesSubscription",
            "operationKind": "subscription",
            "text": "subscription PerformanceProfilesSubscription(\n  $selector: PageFilter!\n) {\n  subscribePerfProfiles(selector: $selector) {\n    page\n    pageSize\n    totalCount\n    profiles {\n      concurrentRequest\n      createdAt\n      duration\n      endpoints\n      id\n      lastRun\n      loadGenerators\n      name\n      qps\n      totalResults\n      updatedAt\n      userID\n      requestBody\n      requestCookies\n      requestHeaders\n      contentType\n      serviceMesh\n    }\n  }\n}\n"
        }
    };
})();

(node as any).hash = "32c5c1dfe281361d5ff52689e0db0db8";

export default node;
