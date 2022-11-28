/**
 * @generated SignedSource<<5ca87fe4097750993cd63f2ac55467dc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';

export type Status = "CONNECTED" | "DISABLED" | "ENABLED" | "PROCESSING" | "UNKNOWN" | "%future added value";
export type DeployNatsQuery$variables = {
    kubernetesContextID: string;
};
export type DeployNatsQuery$data = {
    readonly connectToNats: Status;
};
export type DeployNatsQuery = {
    response: DeployNatsQuery$data;
    variables: DeployNatsQuery$variables;
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
                "name": "connectToNats",
                "storageKey": null
            }
        ];
    return {
        "fragment": {
            "argumentDefinitions": (v0/*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "DeployNatsQuery",
            "selections": (v1/*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0/*: any*/),
            "kind": "Operation",
            "name": "DeployNatsQuery",
            "selections": (v1/*: any*/)
        },
        "params": {
            "cacheID": "89f83a80b9736bca3b41fa450fc37eeb",
            "id": null,
            "metadata": {},
            "name": "DeployNatsQuery",
            "operationKind": "query",
            "text": "query DeployNatsQuery(\n  $kubernetesContextID: String!\n) {\n  connectToNats(kubernetesContextID: $kubernetesContextID)\n}\n"
        }
    };
})();

(node as any).hash = "e33366ce4e3a1d3a598c101349865152";

export default node;
