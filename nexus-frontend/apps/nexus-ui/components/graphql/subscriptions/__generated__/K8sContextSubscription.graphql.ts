/**
 * @generated SignedSource<<6053644546fe6bd8551a525de8aa67c4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';

export type PageFilter = {
    from?: string | null;
    order?: string | null;
    page: string;
    pageSize: number;
    search?: string | null;
    to?: string | null;
};
export type K8sContextSubscription$variables = {
    selector: PageFilter;
};
export type K8sContextSubscription$data = {
    readonly k8sContext: {
        readonly contexts: ReadonlyArray<{
            readonly auth: any;
            readonly cluster: any;
            readonly createdAt: string;
            readonly createdBy: string;
            readonly deploymentType: string;
            readonly id: string;
            readonly kubernetesServerID: string;
            readonly mesheryInstanceID: string;
            readonly name: string;
            readonly owner: string;
            readonly server: string;
            readonly updatedAt: string;
        } | null> | null;
        readonly totalCount: number;
    };
};
export type K8sContextSubscription = {
    response: K8sContextSubscription$data;
    variables: K8sContextSubscription$variables;
};

const node: ConcreteRequest = (function () {
    var v0 = [
            {
                "defaultValue": null,
                "kind": "LocalArgument",
                "name": "selector"
            }
        ],
        v1 = [
            {
                "alias": "k8sContext",
                "args": [
                    {
                        "kind": "Variable",
                        "name": "selector",
                        "variableName": "selector"
                    }
                ],
                "concreteType": "KubernetesContextsPage",
                "kind": "LinkedField",
                "name": "subscribeK8sContext",
                "plural": false,
                "selections": [
                    {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "totalCount",
                        "storageKey": null
                    },
                    {
                        "alias": null,
                        "args": null,
                        "concreteType": "KubernetesContext",
                        "kind": "LinkedField",
                        "name": "contexts",
                        "plural": true,
                        "selections": [
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "id",
                                "storageKey": null
                            },
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
                                "name": "auth",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "cluster",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "server",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "owner",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "createdBy",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "mesheryInstanceID",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "kubernetesServerID",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "deploymentType",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "updatedAt",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "createdAt",
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
            "name": "K8sContextSubscription",
            "selections": (v1/*: any*/),
            "type": "Subscription",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0/*: any*/),
            "kind": "Operation",
            "name": "K8sContextSubscription",
            "selections": (v1/*: any*/)
        },
        "params": {
            "cacheID": "9f3a2c526ffe6c3d9bc21c616ebe9447",
            "id": null,
            "metadata": {},
            "name": "K8sContextSubscription",
            "operationKind": "subscription",
            "text": "subscription K8sContextSubscription(\n  $selector: PageFilter!\n) {\n  k8sContext: subscribeK8sContext(selector: $selector) {\n    totalCount\n    contexts {\n      id\n      name\n      auth\n      cluster\n      server\n      owner\n      createdBy\n      mesheryInstanceID\n      kubernetesServerID\n      deploymentType\n      updatedAt\n      createdAt\n    }\n  }\n}\n"
        }
    };
})();

(node as any).hash = "ae54ac45ea807c15d8b70821825cb281";

export default node;
