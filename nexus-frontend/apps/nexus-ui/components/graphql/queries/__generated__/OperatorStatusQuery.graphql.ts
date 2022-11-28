/**
 * @generated SignedSource<<e3dcadb7b984d75f3c2901408e5f4c53>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';

export type Status = "CONNECTED" | "DISABLED" | "ENABLED" | "PROCESSING" | "UNKNOWN" | "%future added value";
export type OperatorStatusQuery$variables = {
    kubernetesContextID: string;
};
export type OperatorStatusQuery$data = {
    readonly operator: {
        readonly controllers: ReadonlyArray<{
            readonly name: string;
            readonly status: Status;
            readonly version: string;
        }> | null;
        readonly error: {
            readonly code: string;
            readonly description: string;
        } | null;
        readonly status: Status;
        readonly version: string;
    } | null;
};
export type OperatorStatusQuery = {
    response: OperatorStatusQuery$data;
    variables: OperatorStatusQuery$variables;
};

const node: ConcreteRequest = (function () {
    var v0 = [
            {
                "defaultValue": null,
                "kind": "LocalArgument",
                "name": "kubernetesContextID"
            }
        ],
        v1 = {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "status",
            "storageKey": null
        },
        v2 = {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "version",
            "storageKey": null
        },
        v3 = [
            {
                "alias": "operator",
                "args": [
                    {
                        "kind": "Variable",
                        "name": "kubernetesContextID",
                        "variableName": "kubernetesContextID"
                    }
                ],
                "concreteType": "OperatorStatus",
                "kind": "LinkedField",
                "name": "getOperatorStatus",
                "plural": false,
                "selections": [
                    (v1/*: any*/),
                    (v2/*: any*/),
                    {
                        "alias": null,
                        "args": null,
                        "concreteType": "OperatorControllerStatus",
                        "kind": "LinkedField",
                        "name": "controllers",
                        "plural": true,
                        "selections": [
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "name",
                                "storageKey": null
                            },
                            (v2/*: any*/),
                            (v1/*: any*/)
                        ],
                        "storageKey": null
                    },
                    {
                        "alias": null,
                        "args": null,
                        "concreteType": "Error",
                        "kind": "LinkedField",
                        "name": "error",
                        "plural": false,
                        "selections": [
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "code",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "description",
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
            "name": "OperatorStatusQuery",
            "selections": (v3/*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0/*: any*/),
            "kind": "Operation",
            "name": "OperatorStatusQuery",
            "selections": (v3/*: any*/)
        },
        "params": {
            "cacheID": "1cb4fe18a4a006d0b31cea95d069228c",
            "id": null,
            "metadata": {},
            "name": "OperatorStatusQuery",
            "operationKind": "query",
            "text": "query OperatorStatusQuery(\n  $kubernetesContextID: String!\n) {\n  operator: getOperatorStatus(kubernetesContextID: $kubernetesContextID) {\n    status\n    version\n    controllers {\n      name\n      version\n      status\n    }\n    error {\n      code\n      description\n    }\n  }\n}\n"
        }
    };
})();

(node as any).hash = "0355c5bf9c1a888ef2f3936a99d55bbc";

export default node;
