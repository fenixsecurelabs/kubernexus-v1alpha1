package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/phxvlabs.io/kubernexus/nexus-server/graphql/customTypes"
	"github.com/phxvlabs.io/kubernexus/nexus-server/graphql/generated"
)

// GetAvailableAddons is the resolver for the getAvailableAddons field.
func (r *queryResolver) GetAvailableAddons(ctx context.Context, filter *customTypes.ServiceMeshFilter) ([]*customTypes.AddonList, error) {
	panic(fmt.Errorf("not implemented"))
}

// GetControlPlanes is the resolver for the getControlPlanes field.
func (r *queryResolver) GetControlPlanes(ctx context.Context, filter *customTypes.ServiceMeshFilter) ([]*customTypes.ControlPlane, error) {
	panic(fmt.Errorf("not implemented"))
}

// GetDataPlanes is the resolver for the getDataPlanes field.
func (r *queryResolver) GetDataPlanes(ctx context.Context, filter *customTypes.ServiceMeshFilter) ([]*customTypes.DataPlane, error) {
	panic(fmt.Errorf("not implemented"))
}

// GetOperatorStatus is the resolver for the getOperatorStatus field.
func (r *queryResolver) GetOperatorStatus(ctx context.Context, kubernetesContextID string) (*customTypes.OperatorStatus, error) {
	panic(fmt.Errorf("not implemented"))
}

// ResyncCluster is the resolver for the resyncCluster field.
func (r *queryResolver) ResyncCluster(ctx context.Context, selector *customTypes.ResyncActions, kubernetesContextID string) (customTypes.Status, error) {
	panic(fmt.Errorf("not implemented"))
}

// GetMeshsyncStatus is the resolver for the getMeshsyncStatus field.
func (r *queryResolver) GetMeshsyncStatus(ctx context.Context, kubernetesContextID string) (*customTypes.OperatorControllerStatus, error) {
	panic(fmt.Errorf("not implemented"))
}

// DeployMeshsync is the resolver for the deployMeshsync field.
func (r *queryResolver) DeployMeshsync(ctx context.Context, kubernetesContextID string) (customTypes.Status, error) {
	panic(fmt.Errorf("not implemented"))
}

// GetNatsStatus is the resolver for the getNatsStatus field.
func (r *queryResolver) GetNatsStatus(ctx context.Context, kubernetesContextID string) (*customTypes.OperatorControllerStatus, error) {
	panic(fmt.Errorf("not implemented"))
}

// ConnectToNats is the resolver for the connectToNats field.
func (r *queryResolver) ConnectToNats(ctx context.Context, kubernetesContextID string) (customTypes.Status, error) {
	panic(fmt.Errorf("not implemented"))
}

// GetAvailableNamespaces is the resolver for the getAvailableNamespaces field.
func (r *queryResolver) GetAvailableNamespaces(ctx context.Context, k8sclusterIds []string) ([]*customTypes.NameSpace, error) {
	panic(fmt.Errorf("not implemented"))
}

// GetPerfResult is the resolver for the getPerfResult field.
func (r *queryResolver) GetPerfResult(ctx context.Context, id string) (*customTypes.MesheryResult, error) {
	panic(fmt.Errorf("not implemented"))
}

// FetchResults is the resolver for the fetchResults field.
func (r *queryResolver) FetchResults(ctx context.Context, selector customTypes.PageFilter, profileID string) (*customTypes.PerfPageResult, error) {
	panic(fmt.Errorf("not implemented"))
}

// GetPerformanceProfiles is the resolver for the getPerformanceProfiles field.
func (r *queryResolver) GetPerformanceProfiles(ctx context.Context, selector customTypes.PageFilter) (*customTypes.PerfPageProfiles, error) {
	panic(fmt.Errorf("not implemented"))
}

// FetchAllResults is the resolver for the fetchAllResults field.
func (r *queryResolver) FetchAllResults(ctx context.Context, selector customTypes.PageFilter) (*customTypes.PerfPageResult, error) {
	panic(fmt.Errorf("not implemented"))
}

// FetchPatterns is the resolver for the fetchPatterns field.
func (r *queryResolver) FetchPatterns(ctx context.Context, selector customTypes.PageFilter) (*customTypes.PatternPageResult, error) {
	panic(fmt.Errorf("not implemented"))
}

// GetWorkloads is the resolver for the getWorkloads field.
func (r *queryResolver) GetWorkloads(ctx context.Context, name *string, id *string, trim *bool) ([]*customTypes.OAMCapability, error) {
	panic(fmt.Errorf("not implemented"))
}

// GetTraits is the resolver for the getTraits field.
func (r *queryResolver) GetTraits(ctx context.Context, name *string, id *string, trim *bool) ([]*customTypes.OAMCapability, error) {
	panic(fmt.Errorf("not implemented"))
}

// GetScopes is the resolver for the getScopes field.
func (r *queryResolver) GetScopes(ctx context.Context, name *string, id *string, trim *bool) ([]*customTypes.OAMCapability, error) {
	panic(fmt.Errorf("not implemented"))
}

// GetKubectlDescribe is the resolver for the getKubectlDescribe field.
func (r *queryResolver) GetKubectlDescribe(ctx context.Context, name string, kind string, namespace string) (*customTypes.KubectlDescribeDetails, error) {
	panic(fmt.Errorf("not implemented"))
}

// FetchPatternCatalogContent is the resolver for the fetchPatternCatalogContent field.
func (r *queryResolver) FetchPatternCatalogContent(ctx context.Context, selector *customTypes.CatalogSelector) ([]*customTypes.CatalogPattern, error) {
	panic(fmt.Errorf("not implemented"))
}

// FetchFilterCatalogContent is the resolver for the fetchFilterCatalogContent field.
func (r *queryResolver) FetchFilterCatalogContent(ctx context.Context, selector *customTypes.CatalogSelector) ([]*customTypes.CatalogFilter, error) {
	panic(fmt.Errorf("not implemented"))
}

// GetClusterResources is the resolver for the getClusterResources field.
func (r *queryResolver) GetClusterResources(ctx context.Context, kubernetesContextIDs []string, namespace string) (*customTypes.ClusterResources, error) {
	panic(fmt.Errorf("not implemented"))
}

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
