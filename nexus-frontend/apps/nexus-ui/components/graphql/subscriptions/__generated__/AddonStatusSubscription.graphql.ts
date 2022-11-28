/**
 * @generated SignedSource<<fc9da48aa9055d70cc41b1d828ff1218>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';

export type MeshType =
    "ALL_MESH"
    | "APP_MESH"
    | "CILIUM_SERVICE_MESH"
    | "CITRIX_SERVICE_MESH"
    | "CONSUL"
    | "INVALID_MESH"
    | "ISTIO"
    | "KUMA"
    | "LINKERD"
    | "NETWORK_SERVICE_MESH"
    | "NGINX_SERVICE_MESH"
    | "OCTARINE"
    | "OPEN_SERVICE_MESH"
    | "TANZU"
    | "%future added value";
export type ServiceMeshFilter = {
    kubernetesClusterIds?: ReadonlyArray<string> | null;
    type?: MeshType | null;
};
export type AddonStatusSubscription$variables = {
    filter?: ServiceMeshFilter | null;
};
export type AddonStatusSubscription$data = {
    readonly addonsState: ReadonlyArray<{
        readonly name: string;
        readonly owner: string;
    }>;
};
export type AddonStatusSubscription = {
    response: AddonStatusSubscription$data;
    variables: AddonStatusSubscription$variables;
};

const node: ConcreteRequest = (function () {
    var v0 = [
            {
                "defaultValue": null,
                "kind": "LocalArgument",
                "name": "filter"
            }
        ],
        v1 = [
            {
                "alias": "addonsState",
                "args": [
                    {
                        "kind": "Variable",
                        "name": "filter",
                        "variableName": "filter"
                    }
                ],
                "concreteType": "AddonList",
                "kind": "LinkedField",
                "name": "listenToAddonState",
                "plural": true,
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
                        "name": "owner",
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
            "name": "AddonStatusSubscription",
            "selections": (v1/*: any*/),
            "type": "Subscription",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0/*: any*/),
            "kind": "Operation",
            "name": "AddonStatusSubscription",
            "selections": (v1/*: any*/)
        },
        "params": {
            "cacheID": "b7f42d3b9c1ab13f1d78c3048eb9a5db",
            "id": null,
            "metadata": {},
            "name": "AddonStatusSubscription",
            "operationKind": "subscription",
            "text": "subscription AddonStatusSubscription(\n  $filter: ServiceMeshFilter\n) {\n  addonsState: listenToAddonState(filter: $filter) {\n    name\n    owner\n  }\n}\n"
        }
    };
})();

(node as any).hash = "7cef73e9bfdcc63d12dfe54d2a0f3fbf";

export default node;
