/**
 * @generated SignedSource<<4b982bfe0fe216c10f6bf906c87a81b7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';

export type MesheryController = "BROKER" | "MESHSYNC" | "OPERATOR" | "%future added value";
export type MesheryControllerStatus = "DEPLOYED" | "DEPLOYING" | "NOTDEPLOYED" | "UNKNOWN" | "%future added value";
export type NexusControllersStatusSubscription$variables = {
    kubernetesContextIDs?: ReadonlyArray<string> | null;
};
export type NexusControllersStatusSubscription$data = {
    readonly subscribeMesheryControllersStatus: ReadonlyArray<{
        readonly contextID: string;
        readonly controller: MesheryController;
        readonly status: MesheryControllerStatus;
    }>;
};
export type NexusControllersStatusSubscription = {
    response: NexusControllersStatusSubscription$data;
    variables: NexusControllersStatusSubscription$variables;
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
                "concreteType": "MesheryControllersStatusListItem",
                "kind": "LinkedField",
                "name": "subscribeMesheryControllersStatus",
                "plural": true,
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
                        "kind": "ScalarField",
                        "name": "controller",
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
            "name": "NexusControllersStatusSubscription",
            "selections": (v1/*: any*/),
            "type": "Subscription",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0/*: any*/),
            "kind": "Operation",
            "name": "NexusControllersStatusSubscription",
            "selections": (v1/*: any*/)
        },
        "params": {
            "cacheID": "f3432e48c0a18c93991503c3b2c241c6",
            "id": null,
            "metadata": {},
            "name": "NexusControllersStatusSubscription",
            "operationKind": "subscription",
            "text": "subscription NexusControllersStatusSubscription(\n  $kubernetesContextIDs: [String!]\n) {\n  subscribeMesheryControllersStatus(kubernetesContextIDs: $kubernetesContextIDs) {\n    contextID\n    controller\n    status\n  }\n}\n"
        }
    };
})();

(node as any).hash = "70f59880df06e8e44d2bbdf5a3877ece";

export default node;
