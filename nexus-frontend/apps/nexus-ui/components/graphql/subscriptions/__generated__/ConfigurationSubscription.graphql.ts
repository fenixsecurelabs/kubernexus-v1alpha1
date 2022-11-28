/**
 * @generated SignedSource<<3eaac4cb097362b72292801f4dba7f24>>
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
export type ConfigurationSubscription$variables = {
    applicationSelector: PageFilter;
    filterSelector: PageFilter;
    patternSelector: PageFilter;
};
export type ConfigurationSubscription$data = {
    readonly configuration: {
        readonly applications: {
            readonly applications: ReadonlyArray<{
                readonly applicationFile: string;
                readonly createdAt: string | null;
                readonly id: string;
                readonly name: string;
                readonly type: {
                    readonly String: string;
                    readonly Valid: boolean | null;
                };
                readonly updatedAt: string | null;
                readonly userID: string;
            } | null> | null;
            readonly page: number;
            readonly pageSize: number;
            readonly totalCount: number;
        } | null;
        readonly filters: {
            readonly filters: ReadonlyArray<{
                readonly catalogData: any | null;
                readonly createdAt: string | null;
                readonly filterFile: string;
                readonly id: string;
                readonly name: string;
                readonly updatedAt: string | null;
                readonly userID: string;
                readonly visibility: string;
            } | null> | null;
            readonly page: number;
            readonly pageSize: number;
            readonly totalCount: number;
        } | null;
        readonly patterns: {
            readonly page: number;
            readonly pageSize: number;
            readonly patterns: ReadonlyArray<{
                readonly canSupport: boolean;
                readonly catalogData: any | null;
                readonly createdAt: string | null;
                readonly errmsg: string | null;
                readonly id: string;
                readonly name: string;
                readonly patternFile: string;
                readonly updatedAt: string | null;
                readonly userID: string;
                readonly visibility: string;
            } | null> | null;
            readonly totalCount: number;
        } | null;
    };
};
export type ConfigurationSubscription = {
    response: ConfigurationSubscription$data;
    variables: ConfigurationSubscription$variables;
};

const node: ConcreteRequest = (function () {
    var v0 = {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "applicationSelector"
        },
        v1 = {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "filterSelector"
        },
        v2 = {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "patternSelector"
        },
        v3 = {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "page",
            "storageKey": null
        },
        v4 = {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "pageSize",
            "storageKey": null
        },
        v5 = {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalCount",
            "storageKey": null
        },
        v6 = {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
        },
        v7 = {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
        },
        v8 = {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "userID",
            "storageKey": null
        },
        v9 = {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": null
        },
        v10 = {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updatedAt",
            "storageKey": null
        },
        v11 = {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "visibility",
            "storageKey": null
        },
        v12 = {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "catalogData",
            "storageKey": null
        },
        v13 = [
            {
                "alias": "configuration",
                "args": [
                    {
                        "kind": "Variable",
                        "name": "applicationSelector",
                        "variableName": "applicationSelector"
                    },
                    {
                        "kind": "Variable",
                        "name": "filterSelector",
                        "variableName": "filterSelector"
                    },
                    {
                        "kind": "Variable",
                        "name": "patternSelector",
                        "variableName": "patternSelector"
                    }
                ],
                "concreteType": "ConfigurationPage",
                "kind": "LinkedField",
                "name": "subscribeConfiguration",
                "plural": false,
                "selections": [
                    {
                        "alias": null,
                        "args": null,
                        "concreteType": "ApplicationPage",
                        "kind": "LinkedField",
                        "name": "applications",
                        "plural": false,
                        "selections": [
                            (v3/*: any*/),
                            (v4/*: any*/),
                            (v5/*: any*/),
                            {
                                "alias": null,
                                "args": null,
                                "concreteType": "ApplicationResult",
                                "kind": "LinkedField",
                                "name": "applications",
                                "plural": true,
                                "selections": [
                                    (v6/*: any*/),
                                    (v7/*: any*/),
                                    {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "applicationFile",
                                        "storageKey": null
                                    },
                                    {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "NullString",
                                        "kind": "LinkedField",
                                        "name": "type",
                                        "plural": false,
                                        "selections": [
                                            {
                                                "alias": null,
                                                "args": null,
                                                "kind": "ScalarField",
                                                "name": "String",
                                                "storageKey": null
                                            },
                                            {
                                                "alias": null,
                                                "args": null,
                                                "kind": "ScalarField",
                                                "name": "Valid",
                                                "storageKey": null
                                            }
                                        ],
                                        "storageKey": null
                                    },
                                    (v8/*: any*/),
                                    (v9/*: any*/),
                                    (v10/*: any*/)
                                ],
                                "storageKey": null
                            }
                        ],
                        "storageKey": null
                    },
                    {
                        "alias": null,
                        "args": null,
                        "concreteType": "PatternPageResult",
                        "kind": "LinkedField",
                        "name": "patterns",
                        "plural": false,
                        "selections": [
                            (v3/*: any*/),
                            (v4/*: any*/),
                            (v5/*: any*/),
                            {
                                "alias": null,
                                "args": null,
                                "concreteType": "PatternResult",
                                "kind": "LinkedField",
                                "name": "patterns",
                                "plural": true,
                                "selections": [
                                    (v6/*: any*/),
                                    (v7/*: any*/),
                                    (v8/*: any*/),
                                    {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "patternFile",
                                        "storageKey": null
                                    },
                                    (v11/*: any*/),
                                    (v12/*: any*/),
                                    {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "canSupport",
                                        "storageKey": null
                                    },
                                    {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "errmsg",
                                        "storageKey": null
                                    },
                                    (v9/*: any*/),
                                    (v10/*: any*/)
                                ],
                                "storageKey": null
                            }
                        ],
                        "storageKey": null
                    },
                    {
                        "alias": null,
                        "args": null,
                        "concreteType": "FilterPage",
                        "kind": "LinkedField",
                        "name": "filters",
                        "plural": false,
                        "selections": [
                            (v3/*: any*/),
                            (v4/*: any*/),
                            (v5/*: any*/),
                            {
                                "alias": null,
                                "args": null,
                                "concreteType": "FilterResult",
                                "kind": "LinkedField",
                                "name": "filters",
                                "plural": true,
                                "selections": [
                                    (v6/*: any*/),
                                    (v7/*: any*/),
                                    {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "filterFile",
                                        "storageKey": null
                                    },
                                    (v11/*: any*/),
                                    (v12/*: any*/),
                                    (v8/*: any*/),
                                    (v9/*: any*/),
                                    (v10/*: any*/)
                                ],
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
                (v1/*: any*/),
                (v2/*: any*/)
            ],
            "kind": "Fragment",
            "metadata": null,
            "name": "ConfigurationSubscription",
            "selections": (v13/*: any*/),
            "type": "Subscription",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [
                (v0/*: any*/),
                (v2/*: any*/),
                (v1/*: any*/)
            ],
            "kind": "Operation",
            "name": "ConfigurationSubscription",
            "selections": (v13/*: any*/)
        },
        "params": {
            "cacheID": "57f13573cb5d7c5dc18b082a26415055",
            "id": null,
            "metadata": {},
            "name": "ConfigurationSubscription",
            "operationKind": "subscription",
            "text": "subscription ConfigurationSubscription(\n  $applicationSelector: PageFilter!\n  $patternSelector: PageFilter!\n  $filterSelector: PageFilter!\n) {\n  configuration: subscribeConfiguration(applicationSelector: $applicationSelector, patternSelector: $patternSelector, filterSelector: $filterSelector) {\n    applications {\n      page\n      pageSize\n      totalCount\n      applications {\n        id\n        name\n        applicationFile\n        type {\n          String\n          Valid\n        }\n        userID\n        createdAt\n        updatedAt\n      }\n    }\n    patterns {\n      page\n      pageSize\n      totalCount\n      patterns {\n        id\n        name\n        userID\n        patternFile\n        visibility\n        catalogData\n        canSupport\n        errmsg\n        createdAt\n        updatedAt\n      }\n    }\n    filters {\n      page\n      pageSize\n      totalCount\n      filters {\n        id\n        name\n        filterFile\n        visibility\n        catalogData\n        userID\n        createdAt\n        updatedAt\n      }\n    }\n  }\n}\n"
        }
    };
})();

(node as any).hash = "cc4c55636884f3614a85a7776ad973c0";

export default node;
