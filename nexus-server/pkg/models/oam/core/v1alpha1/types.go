package v1alpha1

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type DefinitionRef struct {
	Name string `json:"name,omitempty"`
}

type Component struct {
	Spec              ComponentSpec `json:"spec,omitempty"`
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty"`
}

type ComponentSpec struct {
	Type       string `json:"type"`
	Version    string `json:"version"`
	Settings   string `json:"settings"`
	Parameters []ComponentParameter
}

type ComponentParameter struct {
	Name        string   `json:"name"`
	FieldPaths  []string `json:"fieldPaths"`
	Required    *bool    `json:"required,omitempty"`
	Description *string  `json:"description,omitempty"`
}

type Configuration struct {
	Spec ConfigurationSpec `json:"spec,omitempty"`
}

type ConfigurationSpec struct {
	Components []ConfigurationSpecComponent
}

type ConfigurationSpecComponent struct {
	ComponentName string
	Traits        []ConfigurationSpecComponentTrait
	Scopes        []ConfigurationSpecComponentScope
}

type ConfigurationSpecComponentTrait struct {
	Name       string
	Properties map[string]interface{}
}

type ConfigurationSpecComponentScope struct {
	ScopeRef ConfigurationSpecComponentRef
}

type ConfigurationSpecComponentRef struct {
	Name            string
	metav1.TypeMeta `json:",inline"`
}

type ScopeDefinition struct {
	Spec              ScopeDefinitionSpec `json:"spec,omitempty"`
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty"`
}

type ScopeDefinitionSpec struct {
	AllowComponentOverlap bool              `json:"allowComponentOverlap,omitempty"`
	DefinitionRef         DefinitionRef     `json:"definitionRef,omitempty"`
	Metadata              map[string]string `json:"metadata,omitempty"`
}

type TraitDefinition struct {
	Spec              TraitDefinitionSpec `json:"spec,omitempty"`
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty"`
}

type TraitDefinitionSpec struct {
	Metadata           map[string]string `json:"metadata,omitempty"`
	DefinitionRef      DefinitionRef     `json:"definitionRef,omitempty"`
	RevisionEnabled    bool              `json:"revisionEnabled,omitempty"`
	AppliesToWorkloads []string          `json:"appliesToWorkloads,omitempty"`
}

type WorkloadDefinition struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty"`
}

type WorkloadDefinitionSpec struct {
	Metadata      map[string]string `json:"metadata,omitempty"`
	DefinitionRef DefinitionRef     `json:"definitionRef,omitempty"`
}
