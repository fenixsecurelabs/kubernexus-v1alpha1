/**
 * @generated SignedSource<<7005b011b329ebf80562fbe333f20f9a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';

export type Status = "CONNECTED" | "DISABLED" | "ENABLED" | "PROCESSING" | "UNKNOWN" | "%future added value";
export type MeshsyncStatusQuery$variables = {
    kubernetesContextID: string;
};
export type MeshsyncStatusQuery$data = {
    readonly controller: {
        readonly name: string;
        readonly status: Status;
        readonly version: string;
    };
};
export type MeshsyncStatusQuery = {
    response: MeshsyncStatusQuery$data;
    variables: MeshsyncStatusQuery$variables;
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
                "name": "getMeshsyncStatus",
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
            "name": "MeshsyncStatusQuery",
            "selections": (v1/*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0/*: any*/),
            "kind": "Operation",
            "name": "MeshsyncStatusQuery",
            "selections": (v1/*: any*/)
        },
        "params": {
            "cacheID": "0c01f0f408c8787f1430f2eea0224790",
            "id": null,
            "metadata": {},
            "name": "MeshsyncStatusQuery",
            "operationKind": "query",
            "text": "query MeshsyncStatusQuery(\n  $kubernetesContextID: String!\n) {\n  controller: getMeshsyncStatus(kubernetesContextID: $kubernetesContextID) {\n    name\n    version\n    status\n  }\n}\n"
        }
    };
})();

(node as any).hash = "aefd4a744c4ee7d5122bd3d47946da65";

export default node;
