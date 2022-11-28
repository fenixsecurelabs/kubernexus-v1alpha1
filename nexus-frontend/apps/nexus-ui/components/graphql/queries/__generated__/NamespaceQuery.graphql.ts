/**
 * @generated SignedSource<<eb8483060961dfc16e7f8d4473159719>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';

export type NamespaceQuery$variables = {
    kubernetesClusterIDs?: ReadonlyArray<string> | null;
};
export type NamespaceQuery$data = {
    readonly namespaces: ReadonlyArray<{
        readonly namespace: string;
    }>;
};
export type NamespaceQuery = {
    response: NamespaceQuery$data;
    variables: NamespaceQuery$variables;
};

const node: ConcreteRequest = (function () {
    var v0 = [
            {
                "defaultValue": null,
                "kind": "LocalArgument",
                "name": "kubernetesClusterIDs"
            }
        ],
        v1 = [
            {
                "alias": "namespaces",
                "args": [
                    {
                        "kind": "Variable",
                        "name": "kubernetesClusterIDs",
                        "variableName": "kubernetesClusterIDs"
                    }
                ],
                "concreteType": "NameSpace",
                "kind": "LinkedField",
                "name": "getAvailableNamespaces",
                "plural": true,
                "selections": [
                    {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "namespace",
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
            "name": "NamespaceQuery",
            "selections": (v1/*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0/*: any*/),
            "kind": "Operation",
            "name": "NamespaceQuery",
            "selections": (v1/*: any*/)
        },
        "params": {
            "cacheID": "aba00995c0c24d7c41207b5db35a9d94",
            "id": null,
            "metadata": {},
            "name": "NamespaceQuery",
            "operationKind": "query",
            "text": "query NamespaceQuery(\n  $kubernetesClusterIDs: [String!]\n) {\n  namespaces: getAvailableNamespaces(kubernetesClusterIDs: $kubernetesClusterIDs) {\n    namespace\n  }\n}\n"
        }
    };
})();

(node as any).hash = "2e108b15ec72c0c27a395c7d2031a192";

export default node;
