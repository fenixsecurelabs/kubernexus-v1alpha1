/**
 * @generated SignedSource<<45d780472b0d539f2a35e1f35056d8e8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';

export type Status = "CONNECTED" | "DISABLED" | "ENABLED" | "PROCESSING" | "UNKNOWN" | "%future added value";
export type MeshSyncStatusSubscription$variables = {
    kubernetesContextIDs?: ReadonlyArray<string> | null;
};
export type MeshSyncStatusSubscription$data = {
    readonly listenToMeshSyncEvents: {
        readonly OperatorControllerStatus: {
            readonly error: {
                readonly code: string;
                readonly description: string;
            };
            readonly name: string;
            readonly status: Status;
            readonly version: string;
        };
        readonly contextID: string;
    } | null;
};
export type MeshSyncStatusSubscription = {
    response: MeshSyncStatusSubscription$data;
    variables: MeshSyncStatusSubscription$variables;
};

const node: ConcreteRequest = (function () {
    var v0 = [
            {
                "defaultValue": null,
                "kind": "LocalArgument",
                "name": "kubernetesContextIDs"
            }
        ],
        v1 = [
            {
                "alias": null,
                "args": [
                    {
                        "kind": "Variable",
                        "name": "kubernetesContextIDs",
                        "variableName": "kubernetesContextIDs"
                    }
                ],
                "concreteType": "OperatorControllerStatusPerKubernetesContext",
                "kind": "LinkedField",
                "name": "listenToMeshSyncEvents",
                "plural": false,
                "selections": [
                    {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "contextID",
                        "storageKey": null
                    },
                    {
                        "alias": null,
                        "args": null,
                        "concreteType": "OperatorControllerStatus",
                        "kind": "LinkedField",
                        "name": "OperatorControllerStatus",
                        "plural": false,
                        "selections": [
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
                                "name": "status",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "version",
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
                ],
                "storageKey": null
            }
        ];
    return {
        "fragment": {
            "argumentDefinitions": (v0/*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "MeshSyncStatusSubscription",
            "selections": (v1/*: any*/),
            "type": "Subscription",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0/*: any*/),
            "kind": "Operation",
            "name": "MeshSyncStatusSubscription",
            "selections": (v1/*: any*/)
        },
        "params": {
            "cacheID": "ff953a56c97121ff150cd075243f3585",
            "id": null,
            "metadata": {},
            "name": "MeshSyncStatusSubscription",
            "operationKind": "subscription",
            "text": "subscription MeshSyncStatusSubscription(\n  $kubernetesContextIDs: [String!]\n) {\n  listenToMeshSyncEvents(kubernetesContextIDs: $kubernetesContextIDs) {\n    contextID\n    OperatorControllerStatus {\n      name\n      status\n      version\n      error {\n        code\n        description\n      }\n    }\n  }\n}\n"
        }
    };
})();

(node as any).hash = "d851f99314ca8a52e2c5f047c59c989e";

export default node;
