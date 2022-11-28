/**
 * @generated SignedSource<<4a8ac19cae366512add6af7c04845cd2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';

export type ClusterResourcesQuery$variables = {
    kubernetesContextIDs?: ReadonlyArray<string> | null;
    namespace: string;
};
export type ClusterResourcesQuery$data = {
    readonly clusterResources: {
        readonly resources: ReadonlyArray<{
            readonly count: number;
            readonly kind: string;
        }>;
    };
};
export type ClusterResourcesQuery = {
    response: ClusterResourcesQuery$data;
    variables: ClusterResourcesQuery$variables;
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
                "name": "getClusterResources",
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
            "name": "ClusterResourcesQuery",
            "selections": (v1/*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0/*: any*/),
            "kind": "Operation",
            "name": "ClusterResourcesQuery",
            "selections": (v1/*: any*/)
        },
        "params": {
            "cacheID": "89a563f8f106ada8c2684354ce80cff5",
            "id": null,
            "metadata": {},
            "name": "ClusterResourcesQuery",
            "operationKind": "query",
            "text": "query ClusterResourcesQuery(\n  $kubernetesContextIDs: [String!]\n  $namespace: String!\n) {\n  clusterResources: getClusterResources(kubernetesContextIDs: $kubernetesContextIDs, namespace: $namespace) {\n    resources {\n      kind\n      count\n    }\n  }\n}\n"
        }
    };
})();

(node as any).hash = "ee29d4cc246e84d446c01aea6e0caead";

export default node;
