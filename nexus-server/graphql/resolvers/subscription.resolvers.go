package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/phxvlabs.io/kubernexus/nexus-server/graphql/customTypes"
	"github.com/phxvlabs.io/kubernexus/nexus-server/graphql/generated"
)

// ListenToAddonState is the resolver for the listenToAddonState field.
func (r *subscriptionResolver) ListenToAddonState(ctx context.Context, filter *customTypes.ServiceMeshFilter) (<-chan []*customTypes.AddonList, error) {
	return nil, nil
}

// ListenToControlPlaneState is the resolver for the listenToControlPlaneState field.
func (r *subscriptionResolver) ListenToControlPlaneState(ctx context.Context, filter *customTypes.ServiceMeshFilter) (<-chan []*customTypes.ControlPlane, error) {
	panic(fmt.Errorf("not implemented: ListenToControlPlaneState - listenToControlPlaneState"))
}

// ListenToDataPlaneState is the resolver for the listenToDataPlaneState field.
func (r *subscriptionResolver) ListenToDataPlaneState(ctx context.Context, filter *customTypes.ServiceMeshFilter) (<-chan []*customTypes.DataPlane, error) {
	panic(fmt.Errorf("not implemented: ListenToDataPlaneState - listenToDataPlaneState"))
}

// ListenToOperatorState is the resolver for the listenToOperatorState field.
func (r *subscriptionResolver) ListenToOperatorState(ctx context.Context, kubernetesContextIDs []string) (<-chan *customTypes.OperatorStatusPerKubernetesContext, error) {
	panic(fmt.Errorf("not implemented: ListenToOperatorState - listenToOperatorState"))
}

// ListenToMeshSyncEvents is the resolver for the listenToMeshSyncEvents field.
func (r *subscriptionResolver) ListenToMeshSyncEvents(ctx context.Context, kubernetesContextIDs []string) (<-chan *customTypes.OperatorControllerStatusPerKubernetesContext, error) {
	panic(fmt.Errorf("not implemented: ListenToMeshSyncEvents - listenToMeshSyncEvents"))
}

// SubscribePerfProfiles is the resolver for the subscribePerfProfiles field.
func (r *subscriptionResolver) SubscribePerfProfiles(ctx context.Context, selector customTypes.PageFilter) (<-chan *customTypes.PerfPageProfiles, error) {
	panic(fmt.Errorf("not implemented: SubscribePerfProfiles - subscribePerfProfiles"))
}

// SubscribePerfResults is the resolver for the subscribePerfResults field.
func (r *subscriptionResolver) SubscribePerfResults(ctx context.Context, selector customTypes.PageFilter, profileID string) (<-chan *customTypes.PerfPageResult, error) {
	panic(fmt.Errorf("not implemented: SubscribePerfResults - subscribePerfResults"))
}

// SubscribeBrokerConnection is the resolver for the subscribeBrokerConnection field.
func (r *subscriptionResolver) SubscribeBrokerConnection(ctx context.Context) (<-chan bool, error) {
	panic(fmt.Errorf("not implemented: SubscribeBrokerConnection - subscribeBrokerConnection"))
}

// SubscribeMesheryControllersStatus is the resolver for the subscribeMesheryControllersStatus field.
func (r *subscriptionResolver) SubscribeMesheryControllersStatus(ctx context.Context, kubernetesContextIDs []string) (<-chan []*customTypes.MesheryControllersStatusListItem, error) {
	panic(fmt.Errorf("not implemented: SubscribeMesheryControllersStatus - subscribeMesheryControllersStatus"))
}

// SubscribeMeshSyncEvents is the resolver for the subscribeMeshSyncEvents field.
func (r *subscriptionResolver) SubscribeMeshSyncEvents(ctx context.Context, kubernetesContextIDs []string) (<-chan *customTypes.MeshSyncEvent, error) {
	panic(fmt.Errorf("not implemented: SubscribeMeshSyncEvents - subscribeMeshSyncEvents"))
}

// SubscribeConfiguration is the resolver for the subscribeConfiguration field.
func (r *subscriptionResolver) SubscribeConfiguration(ctx context.Context, applicationSelector customTypes.PageFilter, patternSelector customTypes.PageFilter, filterSelector customTypes.PageFilter) (<-chan *customTypes.ConfigurationPage, error) {
	panic(fmt.Errorf("not implemented: SubscribeConfiguration - subscribeConfiguration"))
}

// SubscribeClusterResources is the resolver for the subscribeClusterResources field.
func (r *subscriptionResolver) SubscribeClusterResources(ctx context.Context, kubernetesContextIDs []string, namespace string) (<-chan *customTypes.ClusterResources, error) {
	panic(fmt.Errorf("not implemented: SubscribeClusterResources - subscribeClusterResources"))
}

// SubscribeK8sContext is the resolver for the subscribeK8sContext field.
func (r *subscriptionResolver) SubscribeK8sContext(ctx context.Context, selector customTypes.PageFilter) (<-chan *customTypes.KubernetesContextsPage, error) {
	panic(fmt.Errorf("not implemented: SubscribeK8sContext - subscribeK8sContext"))
}

// Subscription returns generated.SubscriptionResolver implementation.
func (r *Resolver) Subscription() generated.SubscriptionResolver { return &subscriptionResolver{r} }

type subscriptionResolver struct{ *Resolver }
