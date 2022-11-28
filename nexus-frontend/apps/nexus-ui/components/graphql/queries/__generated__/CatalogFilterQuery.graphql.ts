/**
 * @generated SignedSource<<7b0fab157552d0b95c51fcf5ff121188>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';

export type CatalogSelector = {
    order: string;
    search: string;
};
export type CatalogFilterQuery$variables = {
    selector: CatalogSelector;
};
export type CatalogFilterQuery$data = {
    readonly catalogFilters: ReadonlyArray<{
        readonly catalogData: any | null;
        readonly createdAt: string | null;
        readonly filterFile: string;
        readonly id: string;
        readonly name: string;
        readonly updatedAt: string | null;
        readonly userID: string;
        readonly visibility: string;
    }>;
};
export type CatalogFilterQuery = {
    response: CatalogFilterQuery$data;
    variables: CatalogFilterQuery$variables;
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
                "alias": "catalogFilters",
                "args": [
                    {
                        "kind": "Variable",
                        "name": "selector",
                        "variableName": "selector"
                    }
                ],
                "concreteType": "CatalogFilter",
                "kind": "LinkedField",
                "name": "fetchFilterCatalogContent",
                "plural": true,
                "selections": [
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
                        "name": "name",
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
                        "name": "filterFile",
                        "storageKey": null
                    },
                    {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "visibility",
                        "storageKey": null
                    },
                    {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "catalogData",
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
                        "name": "updatedAt",
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
            "name": "CatalogFilterQuery",
            "selections": (v1/*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0/*: any*/),
            "kind": "Operation",
            "name": "CatalogFilterQuery",
            "selections": (v1/*: any*/)
        },
        "params": {
            "cacheID": "b561c9a2dcb79d1af7caf8aa1ee65f61",
            "id": null,
            "metadata": {},
            "name": "CatalogFilterQuery",
            "operationKind": "query",
            "text": "query CatalogFilterQuery(\n  $selector: CatalogSelector!\n) {\n  catalogFilters: fetchFilterCatalogContent(selector: $selector) {\n    id\n    name\n    userID\n    filterFile\n    visibility\n    catalogData\n    createdAt\n    updatedAt\n  }\n}\n"
        }
    };
})();

(node as any).hash = "30a91c8257c6e44ccae5de53629d21c0";

export default node;
