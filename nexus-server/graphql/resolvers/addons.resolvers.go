package resolvers

import (
	"context"

	"github.com/phxvlabs.io/kubernexus/nexus-server/graphql/customTypes"
	"github.com/phxvlabs.io/kubernexus/nexus-server/pkg/models"
)

func (r *Resolver) listenToAddonState(ctx context.Context, provider models.Provider, filter *customTypes.ServiceMeshFilter) (<-chan []*customTypes.AddonList, error) {
	if r.addOnChannel == nil {
		r.addOnChannel = make(chan []*customTypes.AddonList, 0)
	}
	return nil, nil
}
