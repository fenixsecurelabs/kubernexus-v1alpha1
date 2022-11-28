package models

import (
	"github.com/phxvlabs.io/kubernexus/nexus-server/pkg/database"
)

type Capabilities string
type ContextKey string
type Extensions string
type ProviderType string
type RestrictedAccess string

type ExtensionInput struct {
	DBHandler *database.Handler
}

type ProviderProperties struct {
	ProviderName        string           `json:"providerName,omitempty"`
	ProviderType        ProviderType     `json:"providerType,omitempty"`
	ProviderURL         string           `json:"providerURL,omitempty"`
	ProviderDescription []string         `json:"providerDescription,omitempty"`
	PackageURL          string           `json:"packageURL,omitempty"`
	PackageVersion      string           `json:"packageVersion,omitempty"`
	Extensions          Extensions       `json:"extensions"`
	Capabilities        Capabilities     `json:"capabilities"`
	RestrictedAccess    RestrictedAccess `json:"restrictedAccess,omitempty"`
}

type ServiceMeshAdapters struct {
	Istio bool `json:"istio,omitempty"`
}

type Configuration struct {
	Designs      bool `json:"designs,omitempty"`
	Filters      bool `json:"filters,omitempty"`
	Applications bool `json:"applications,omitempty"`
}

type NavigatorComponents struct {
	Help          bool          `json:"help,omitempty"`
	Toggle        bool          `json:"toggle,omitempty"`
	Dashboard     bool          `json:"dashboard,omitempty"`
	Extensions    bool          `json:"extensions,omitempty"`
	Conformance   bool          `json:"conformance,omitempty"`
	Configuration Configuration `json:"configuration,omitempty"`
}

const (
	KubeClustersKey   ContextKey = "kubeclusters"
	AllKubeClusterKey ContextKey = "allkubeclusters"
)

type Provider interface {
	Name() string
	GetProviderType() ProviderType

	GetGenericPersister() *database.Handler
}
