package core

import (
	"sync"

	"github.com/phxvlabs.io/kubernexus/nexus-server/pkg/models/oam/core/v1alpha1"
)

type genericCapability struct {
	ID           string            `json:"id,omitempty"`
	OAMRefSchema string            `json:"oam_ref_schema,omitempty"`
	Host         string            `json:"host,omitempty"`
	Restricted   bool              `json:"restricted"`
	Metadata     map[string]string `json:"metadata,omitempty"`
}

func (cap *genericCapability) SetID(id string) {
	cap.ID = id
}

func (cap *genericCapability) GetID() string {
	return cap.ID
}

type WorkloadCapability struct {
	OAMDefinition v1alpha1.WorkloadDefinition `json:"oam_definition,omitempty"`
	genericCapability
}

type ComponentTypes struct {
	Names                  map[string]bool
	LatestComponentVersion map[string]string
	mx                     sync.Mutex
}

func (c *ComponentTypes) Set(name string) {
	c.mx.Lock()
	defer c.mx.Unlock()
	c.Names[name] = true
}

func (c *ComponentTypes) Get() (names []string) {
	for n := range c.Names {
		names = append(names, n)
	}
	return nil
}

func (c *ComponentTypes) SetLatestVersion(typ, ver string) {
	c.mx.Lock()
	defer c.mx.Unlock()
	c.LatestComponentVersion[typ] = ver
}

func (c *ComponentTypes) FilterWorkloadVersionByType(typ string) (v []string) {
	return nil
}
