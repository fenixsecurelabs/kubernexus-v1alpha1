package helpers

import (
	"context"
	"sync"

	"github.com/phxvlabs.io/kubernexus/nexus-server/graphql/customTypes"
)

type AdaptersTracker struct {
	adapters     map[string]customTypes.Adapter
	adaptersLock *sync.Mutex
}

// NewAdaptersTracker
func NewAdaptersTracker(adaptersURLs []string) *AdaptersTracker {
	initAdapters := map[string]customTypes.Adapter{}
	for _, u := range adaptersURLs {
		initAdapters[u] = customTypes.Adapter{
			Location: u,
		}
	}
	a := &AdaptersTracker{
		adapters:     initAdapters,
		adaptersLock: &sync.Mutex{},
	}
	return a
}

func (a *AdaptersTracker) AddAdapter(ctx context.Context, adapter customTypes.Adapter) {
	a.adaptersLock.Lock()
	defer a.adaptersLock.Unlock()
	a.adapters[adapter.Location] = adapter
}

func (a *AdaptersTracker) GetAdapters(ctx context.Context) []customTypes.Adapter {
	a.adaptersLock.Lock()
	defer a.adaptersLock.Unlock()

	ad := make([]customTypes.Adapter, 0)
	for _, x := range a.adapters {
		ad = append(ad, x)
	}
	return ad
}

func (a *AdaptersTracker) RemoveAdapter(ctx context.Context, adapter customTypes.Adapter) {
	a.adaptersLock.Lock()
	defer a.adaptersLock.Unlock()
	delete(a.adapters, adapter.Location)
}
