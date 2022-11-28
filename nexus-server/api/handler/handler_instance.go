package handler

import (
	"github.com/phxvlabs.io/kubernexus/nexus-server/graphql/customTypes"
	"github.com/phxvlabs.io/kubernexus/nexus-server/pkg/models"
)

type Handler struct{}

type Config struct {
	KubeConfigFolder string
	AdapterTracker   customTypes.AdaptersTrackerInterface
	Providers        map[string]models.Provider
}

func NewHandlerInstance() {}
