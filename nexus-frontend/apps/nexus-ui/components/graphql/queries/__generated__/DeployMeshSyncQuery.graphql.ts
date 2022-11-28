/**
 * @generated SignedSource<<1a475db2cbeb353ec6adf8dd065c1dcc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';

export type Status = "CONNECTED" | "DISABLED" | "ENABLED" | "PROCESSING" | "UNKNOWN" | "%future added value";
export type DeployMeshSyncQuery$variables = {
    kubernetesContextID: string;
};
export type DeployMeshSyncQuery$data = {
    readonly deployMeshsync: Status;
};
export type DeployMeshSyncQuery = {
    response: DeployMeshSyncQuery$data;
    variables: DeployMeshSyncQuery$variables;
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
                "alias": null,
                "args": [
                    {
                        "kind": "Variable",
                        "name": "kubernetesContextID",
                        "variableName": "kubernetesContextID"
                    }
                ],
                "kind": "ScalarField",
                "name": "deployMeshsync",
                "storageKey": null
            }
        ];
    return {
        "fragment": {
            "argumentDefinitions": (v0/*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "DeployMeshSyncQuery",
            "selections": (v1/*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0/*: any*/),
            "kind": "Operation",
            "name": "DeployMeshSyncQuery",
            "selections": (v1/*: any*/)
        },
        "params": {
            "cacheID": "38c02981cc57a89064c6cb915fcc066d",
            "id": null,
            "metadata": {},
            "name": "DeployMeshSyncQuery",
            "operationKind": "query",
            "text": "query DeployMeshSyncQuery(\n  $kubernetesContextID: String!\n) {\n  deployMeshsync(kubernetesContextID: $kubernetesContextID)\n}\n"
        }
    };
})();

(node as any).hash = "fd26236789bffe490cf40479f56486a4";

export default node;
