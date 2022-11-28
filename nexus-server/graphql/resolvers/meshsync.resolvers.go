package resolvers

import (
	"context"

	"github.com/phxvlabs.io/kubernexus/nexus-server/graphql/customTypes"
	"github.com/phxvlabs.io/kubernexus/nexus-server/pkg/models"
)

func (r *Resolver) listenToMeshSyncEvents(ctx context.Context, provider models.Provider, kubernetesContextIDs []string) (<-chan *customTypes.OperatorControllerStatusPerKubernetesContext, error) {
	return nil, nil
}
