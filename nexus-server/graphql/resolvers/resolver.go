package resolvers

import "github.com/phxvlabs.io/kubernexus/nexus-server/graphql/customTypes"

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	MeshSyncChannelPerKubernetesContext map[string]chan struct{}

	addOnChannel        chan []*customTypes.AddonList
	controlPlaneChannel chan []*customTypes.ControlPlane
	dataPlaneChannel    chan []*customTypes.DataPlane
}
