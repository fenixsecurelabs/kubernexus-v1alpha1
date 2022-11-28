/**
 * @generated SignedSource<<2bc06d315313c7e772fd4761a36d17b5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';

export type ClusterResourcesSubscription$variables = {
    kubernetesContextIDs?: ReadonlyArray<string> | null;
    namespace: string;
};
export type ClusterResourcesSubscription$data = {
    readonly clusterResources: {
        readonly resources: ReadonlyArray<{
            readonly count: number;
            readonly kind: string;
        }>;
    };
};
export type ClusterResourcesSubscription = {
    response: ClusterResourcesSubscription$data;
    variables: ClusterResourcesSubscription$variables;
};

const node: ConcreteRequest = (function () {
    var v0 = [
            {
                "defaultValue": null,
                "kind": "LocalArgument",
                "name": "kubernetesContextIDs"
            },
            {
                "defaultValue": null,
                "kind": "LocalArgument",
                "name": "namespace"
            }
        ],
        v1 = [
            {
                "alias": "clusterResources",
                "args": [
                    {
                        "kind": "Variable",
                        "name": "kubernetesContextIDs",
                        "variableName": "kubernetesContextIDs"
                    },
                    {
                        "kind": "Variable",
                        "name": "namespace",
                        "variableName": "namespace"
                    }
                ],
                "concreteType": "ClusterResources",
                "kind": "LinkedField",
                "name": "subscribeClusterResources",
                "plural": false,
                "selections": [
                    {
                        "alias": null,
                        "args": null,
                        "concreteType": "Resource",
                        "kind": "LinkedField",
                        "name": "resources",
                        "plural": true,
                        "selections": [
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "kind",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "count",
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
            "name": "ClusterResourcesSubscription",
            "selections": (v1/*: any*/),
            "type": "Subscription",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0/*: any*/),
            "kind": "Operation",
            "name": "ClusterResourcesSubscription",
            "selections": (v1/*: any*/)
        },
        "params": {
            "cacheID": "edb9a9891be8eb7487ee1f16cf9ca917",
            "id": null,
            "metadata": {},
            "name": "ClusterResourcesSubscription",
            "operationKind": "subscription",
            "text": "subscription ClusterResourcesSubscription(\n  $kubernetesContextIDs: [String!]\n  $namespace: String!\n) {\n  clusterResources: subscribeClusterResources(kubernetesContextIDs: $kubernetesContextIDs, namespace: $namespace) {\n    resources {\n      kind\n      count\n    }\n  }\n}\n"
        }
    };
})();

(node as any).hash = "ed9a54d381cc0072b060a63a08e8b103";

export default node;
