/**
 * @generated SignedSource<<4f6193d8be95374bb4b21b7db9c7d6a5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';

export type MeshSyncEventsSubscription$variables = {
    kubernetesContextIDs?: ReadonlyArray<string> | null;
};
export type MeshSyncEventsSubscription$data = {
    readonly subscribeMeshSyncEvents: {
        readonly contextID: string;
        readonly object: any;
        readonly type: string;
    };
};
export type MeshSyncEventsSubscription = {
    response: MeshSyncEventsSubscription$data;
    variables: MeshSyncEventsSubscription$variables;
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
                "concreteType": "MeshSyncEvent",
                "kind": "LinkedField",
                "name": "subscribeMeshSyncEvents",
                "plural": false,
                "selections": [
                    {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "type",
                        "storageKey": null
                    },
                    {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "object",
                        "storageKey": null
                    },
                    {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "contextID",
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
            "name": "MeshSyncEventsSubscription",
            "selections": (v1/*: any*/),
            "type": "Subscription",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0/*: any*/),
            "kind": "Operation",
            "name": "MeshSyncEventsSubscription",
            "selections": (v1/*: any*/)
        },
        "params": {
            "cacheID": "afbffebdaea920a2115c3d132664dfba",
            "id": null,
            "metadata": {},
            "name": "MeshSyncEventsSubscription",
            "operationKind": "subscription",
            "text": "subscription MeshSyncEventsSubscription(\n  $kubernetesContextIDs: [String!]\n) {\n  subscribeMeshSyncEvents(kubernetesContextIDs: $kubernetesContextIDs) {\n    type\n    object\n    contextID\n  }\n}\n"
        }
    };
})();

(node as any).hash = "48cfc5fa8fbe955f1d88fe025fa5d24e";

export default node;
