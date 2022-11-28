/**
 * @generated SignedSource<<cc3ab2b96d4c12551e9852854e50c3a8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';

export type BrokerStatusSubscription$variables = {};
export type BrokerStatusSubscription$data = {
    readonly subscribeBrokerConnection: boolean;
};
export type BrokerStatusSubscription = {
    response: BrokerStatusSubscription$data;
    variables: BrokerStatusSubscription$variables;
};

const node: ConcreteRequest = (function () {
    var v0 = [
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "subscribeBrokerConnection",
            "storageKey": null
        }
    ];
    return {
        "fragment": {
            "argumentDefinitions": [],
            "kind": "Fragment",
            "metadata": null,
            "name": "BrokerStatusSubscription",
            "selections": (v0/*: any*/),
            "type": "Subscription",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [],
            "kind": "Operation",
            "name": "BrokerStatusSubscription",
            "selections": (v0/*: any*/)
        },
        "params": {
            "cacheID": "3eaadbc18fa2fc8430e387a3059fafa9",
            "id": null,
            "metadata": {},
            "name": "BrokerStatusSubscription",
            "operationKind": "subscription",
            "text": "subscription BrokerStatusSubscription {\n  subscribeBrokerConnection\n}\n"
        }
    };
})();

(node as any).hash = "c3d1793f9ca896edd7ce6ec58cb79a59";

export default node;
