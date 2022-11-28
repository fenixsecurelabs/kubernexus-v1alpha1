/**
 * @generated SignedSource<<eb58028becc8a91aa9cc1b93b8066bfe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';

export type Status = "CONNECTED" | "DISABLED" | "ENABLED" | "PROCESSING" | "UNKNOWN" | "%future added value";
export type ResyncActions = {
    Resync: string;
    clearDB: string;
    hardReset: string;
};
export type ResetDatabaseQuery$variables = {
    kubernetesContextID: string;
    selector: ResyncActions;
};
export type ResetDatabaseQuery$data = {
    readonly resetStatus: Status;
};
export type ResetDatabaseQuery = {
    response: ResetDatabaseQuery$data;
    variables: ResetDatabaseQuery$variables;
};

const node: ConcreteRequest = (function () {
    var v0 = {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "kubernetesContextID"
        },
        v1 = {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "selector"
        },
        v2 = [
            {
                "alias": "resetStatus",
                "args": [
                    {
                        "kind": "Variable",
                        "name": "kubernetesContextID",
                        "variableName": "kubernetesContextID"
                    },
                    {
                        "kind": "Variable",
                        "name": "selector",
                        "variableName": "selector"
                    }
                ],
                "kind": "ScalarField",
                "name": "resyncCluster",
                "storageKey": null
            }
        ];
    return {
        "fragment": {
            "argumentDefinitions": [
                (v0/*: any*/),
                (v1/*: any*/)
            ],
            "kind": "Fragment",
            "metadata": null,
            "name": "ResetDatabaseQuery",
            "selections": (v2/*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [
                (v1/*: any*/),
                (v0/*: any*/)
            ],
            "kind": "Operation",
            "name": "ResetDatabaseQuery",
            "selections": (v2/*: any*/)
        },
        "params": {
            "cacheID": "5057b3e4d3928494fff1b37a85e18f62",
            "id": null,
            "metadata": {},
            "name": "ResetDatabaseQuery",
            "operationKind": "query",
            "text": "query ResetDatabaseQuery(\n  $selector: ResyncActions!\n  $kubernetesContextID: String!\n) {\n  resetStatus: resyncCluster(selector: $selector, kubernetesContextID: $kubernetesContextID)\n}\n"
        }
    };
})();

(node as any).hash = "5a17739834d883d3aefa7f2c965be5cb";

export default node;
