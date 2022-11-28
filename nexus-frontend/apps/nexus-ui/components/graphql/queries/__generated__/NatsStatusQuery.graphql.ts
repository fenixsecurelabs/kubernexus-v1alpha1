/**
 * @generated SignedSource<<d787c4fc8a013434923681c2c7da0090>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';

export type Status = "CONNECTED" | "DISABLED" | "ENABLED" | "PROCESSING" | "UNKNOWN" | "%future added value";
export type NatsStatusQuery$variables = {
    kubernetesContextID: string;
};
export type NatsStatusQuery$data = {
    readonly controller: {
        readonly name: string;
        readonly status: Status;
        readonly version: string;
    };
};
export type NatsStatusQuery = {
    response: NatsStatusQuery$data;
    variables: NatsStatusQuery$variables;
};

const node: ConcreteRequest = (function () {
    var v0 = [
            {
                "defaultValue": null,
                "kind": "LocalArgument",
                "name": "kubernetesContextID"
            }
        ],
        v1 = [
            {
                "alias": "controller",
                "args": [
                    {
                        "kind": "Variable",
                        "name": "kubernetesContextID",
                        "variableName": "kubernetesContextID"
                    }
                ],
                "concreteType": "OperatorControllerStatus",
                "kind": "LinkedField",
                "name": "getNatsStatus",
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
                        "name": "version",
                        "storageKey": null
                    },
                    {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "status",
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
            "name": "NatsStatusQuery",
            "selections": (v1/*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0/*: any*/),
            "kind": "Operation",
            "name": "NatsStatusQuery",
            "selections": (v1/*: any*/)
        },
        "params": {
            "cacheID": "fc2479a42d61292bb7e322b68b467882",
            "id": null,
            "metadata": {},
            "name": "NatsStatusQuery",
            "operationKind": "query",
            "text": "query NatsStatusQuery(\n  $kubernetesContextID: String!\n) {\n  controller: getNatsStatus(kubernetesContextID: $kubernetesContextID) {\n    name\n    version\n    status\n  }\n}\n"
        }
    };
})();

(node as any).hash = "01b8405b12813d1d9964880e2a73ddf5";

export default node;
