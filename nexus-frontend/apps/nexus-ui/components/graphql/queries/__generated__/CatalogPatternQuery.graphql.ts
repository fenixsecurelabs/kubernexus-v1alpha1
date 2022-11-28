/**
 * @generated SignedSource<<afe58bb7d19105fa213bbcbe5772b0eb>>
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
export type CatalogPatternQuery$variables = {
    selector: CatalogSelector;
};
export type CatalogPatternQuery$data = {
    readonly catalogPatterns: ReadonlyArray<{
        readonly catalogData: any | null;
        readonly createdAt: string | null;
        readonly id: string;
        readonly name: string;
        readonly patternFile: string;
        readonly updatedAt: string | null;
        readonly userID: string;
        readonly visibility: string;
    }>;
};
export type CatalogPatternQuery = {
    response: CatalogPatternQuery$data;
    variables: CatalogPatternQuery$variables;
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
                "alias": "catalogPatterns",
                "args": [
                    {
                        "kind": "Variable",
                        "name": "selector",
                        "variableName": "selector"
                    }
                ],
                "concreteType": "CatalogPattern",
                "kind": "LinkedField",
                "name": "fetchPatternCatalogContent",
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
                        "name": "patternFile",
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
            "name": "CatalogPatternQuery",
            "selections": (v1/*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0/*: any*/),
            "kind": "Operation",
            "name": "CatalogPatternQuery",
            "selections": (v1/*: any*/)
        },
        "params": {
            "cacheID": "7760cac22d5b7f9413c3de6ee141ed69",
            "id": null,
            "metadata": {},
            "name": "CatalogPatternQuery",
            "operationKind": "query",
            "text": "query CatalogPatternQuery(\n  $selector: CatalogSelector!\n) {\n  catalogPatterns: fetchPatternCatalogContent(selector: $selector) {\n    id\n    name\n    userID\n    patternFile\n    visibility\n    catalogData\n    createdAt\n    updatedAt\n  }\n}\n"
        }
    };
})();

(node as any).hash = "14d5131071b4f5e00ab96caf9755ef70";

export default node;
