/**
 * @generated SignedSource<<e2dbe85d543faba92cd91f9ac9512481>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';

export type Status = "CONNECTED" | "DISABLED" | "ENABLED" | "PROCESSING" | "UNKNOWN" | "%future added value";
export type OperatorStatusSubscription$variables = {
    kubernetesContextIDs?: ReadonlyArray<string> | null;
};
export type OperatorStatusSubscription$data = {
    readonly operator: {
        readonly contextID: string;
        readonly operatorStatus: {
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
        };
    } | null;
};
export type OperatorStatusSubscription = {
    response: OperatorStatusSubscription$data;
    variables: OperatorStatusSubscription$variables;
};

const node: ConcreteRequest = (function () {
    var v0 = [
            {
                "defaultValue": null,
                "kind": "LocalArgument",
                "name": "kubernetesContextIDs"
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
                        "name": "kubernetesContextIDs",
                        "variableName": "kubernetesContextIDs"
                    }
                ],
                "concreteType": "OperatorStatusPerKubernetesContext",
                "kind": "LinkedField",
                "name": "listenToOperatorState",
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
                        "concreteType": "OperatorStatus",
                        "kind": "LinkedField",
                        "name": "operatorStatus",
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
                ],
                "storageKey": null
            }
        ];
    return {
        "fragment": {
            "argumentDefinitions": (v0/*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "OperatorStatusSubscription",
            "selections": (v3/*: any*/),
            "type": "Subscription",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0/*: any*/),
            "kind": "Operation",
            "name": "OperatorStatusSubscription",
            "selections": (v3/*: any*/)
        },
        "params": {
            "cacheID": "33748e0e88f5d2b13bd486da4b3aaaac",
            "id": null,
            "metadata": {},
            "name": "OperatorStatusSubscription",
            "operationKind": "subscription",
            "text": "subscription OperatorStatusSubscription(\n  $kubernetesContextIDs: [String!]\n) {\n  operator: listenToOperatorState(kubernetesContextIDs: $kubernetesContextIDs) {\n    contextID\n    operatorStatus {\n      status\n      version\n      controllers {\n        name\n        version\n        status\n      }\n      error {\n        code\n        description\n      }\n    }\n  }\n}\n"
        }
    };
})();

(node as any).hash = "320c2daf881cbc57e2eca67646de1320";

export default node;
