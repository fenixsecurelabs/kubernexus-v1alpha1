package customTypes

import "context"

// Adapter represents an adapter in Meshery
type Adapter struct {
	Location     string `json:"adapterLocation"`
	Name         string `json:"name"`
	Version      string `json:"version"`
	GitCommitSHA string `json:"gitCommitSha"`
	// Ops          []*meshes.SupportedOperation `json:"ops"`
}

// AdaptersTrackerInterface defines the methods a type should implement to be an adapter tracker
type AdaptersTrackerInterface interface {
	AddAdapter(context.Context, Adapter)
	RemoveAdapter(context.Context, Adapter)
	GetAdapters(context.Context) []Adapter
}
