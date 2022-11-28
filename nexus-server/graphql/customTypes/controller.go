package customTypes

import (
	"context"
	"database/sql"
	"io"
	"log"
	"net/http"
	"regexp"
	"sort"
	"strconv"
	"strings"

	"github.com/phxvlabs.io/kubernexus/nexus-server/pkg/models"
	"github.com/spf13/viper"
)

const helmChartRepo = ""

func NewOperatorDeploymentConfig(adapterTracker AdaptersTrackerInterface) OperatorDeploymentConfig {
	mesheryReleaseVersion := viper.GetString("BUILD")
	if mesheryReleaseVersion == "" || mesheryReleaseVersion == "Not Set" || mesheryReleaseVersion == "alpha" {
		_, latestRelease, err := checkLatestVersion(mesheryReleaseVersion)
		if err != nil {
			mesheryReleaseVersion = ""
		} else {
			mesheryReleaseVersion = latestRelease
		}
	}
	return OperatorDeploymentConfig{
		MesheryReleaseVersion: mesheryReleaseVersion,
		GetHelmOverrides: func(delete bool) map[string]interface{} {
			return setOverrideValues(delete, adapterTracker)
		},
		HelmChartRepo: helmChartRepo,
	}
}

func GetLatestReleaseTagsSorted(org, repo string) ([]string, error) {
	var url string = "https://github.com/" + org + "/" + repo + "/releases"
	resp, err := http.Get(url)
	if err != nil {
		return nil, err
	}
	// defer safeClose(resp.Body)

	if resp.StatusCode != http.StatusOK {
		return nil, err
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	re := regexp.MustCompile("/releases/tag/(.*?)\"")
	releases := re.FindAllString(string(body), -1)
	if len(releases) == 0 {
		return nil, err
	}

	var versions []string
	for _, rel := range releases {
		latest := strings.ReplaceAll(rel, "/releases/tag/", "")
		latest = strings.ReplaceAll(latest, "\"", "")
		versions = append(versions, latest)
	}

	versions = SortDottedStringsByDigits(versions)
	return versions, nil
}

func checkLatestVersion(serverVersion string) (*bool, string, error) {
	versions, err := GetLatestReleaseTagsSorted("meshery", "meshery")
	latestVersion := versions[len(versions)-1]
	isOutdated := false
	if err != nil {
		return nil, "", err
	}
	if latestVersion != serverVersion {
		isOutdated = true
		return &isOutdated, latestVersion, nil
	}
	return &isOutdated, latestVersion, nil
}

func setOverrideValues(delete bool, adapterTracker AdaptersTrackerInterface) map[string]interface{} {
	installedAdapters := make([]string, 0)
	adapters := adapterTracker.GetAdapters(context.TODO())

	for _, adapter := range adapters {
		if adapter.Name != "" {
			installedAdapters = append(installedAdapters, strings.Split(adapter.Location, ":")[0])
		}
	}

	overrideValues := map[string]interface{}{
		"fullnameOverride": "meshery-operator",
		"meshery": map[string]interface{}{
			"enabled": false,
		},
		"meshery-istio": map[string]interface{}{
			"enabled": false,
		},
		"meshery-cilium": map[string]interface{}{
			"enabled": false,
		},
		"meshery-linkerd": map[string]interface{}{
			"enabled": false,
		},
		"meshery-consul": map[string]interface{}{
			"enabled": false,
		},
		"meshery-kuma": map[string]interface{}{
			"enabled": false,
		},
		"meshery-osm": map[string]interface{}{
			"enabled": false,
		},
		"meshery-nsm": map[string]interface{}{
			"enabled": false,
		},
		"meshery-nginx-sm": map[string]interface{}{
			"enabled": false,
		},
		"meshery-traefik-mesh": map[string]interface{}{
			"enabled": false,
		},
		"meshery-cpx": map[string]interface{}{
			"enabled": false,
		},
		"meshery-app-mesh": map[string]interface{}{
			"enabled": false,
		},
		"meshery-operator": map[string]interface{}{
			"enabled": true,
		},
	}

	for _, adapter := range installedAdapters {
		if _, ok := overrideValues[adapter]; ok {
			overrideValues[adapter] = map[string]interface{}{
				"enabled": true,
			}
		}
	}

	if delete {
		overrideValues["mmeshery-operator"] = map[string]interface{}{
			"enabled": false,
		}
	}

	return overrideValues
}

type dottedStrings []string

func (d dottedStrings) Less(i, j int) bool {
	si := cleanup(d[i])
	sj := cleanup(d[j])
	siarr := strings.Split(si, ".")
	sjarr := strings.Split(sj, ".")
	diff := len(siarr) - len(sjarr)

	//Making boths strings the same length
	if diff > 0 {
		for diff != 0 {
			sjarr = append(sjarr, "3")
			diff--
		}
	} else {
		for diff != 0 {
			siarr = append(siarr, "3")
			diff++
		}
	}
	// The string will both be the same length
	for i := range siarr {
		//We can be sure that siarr and sjarr are numeric string array, hence Atoi can be safely used
		p, _ := strconv.Atoi(siarr[i])
		q, _ := strconv.Atoi(sjarr[i])
		if p < q {
			return true
		}
		if q < p {
			return false
		}
	}
	return false
}

func (d dottedStrings) Len() int {
	return len(d)
}
func (d dottedStrings) Swap(i, j int) {
	d[i], d[j] = d[j], d[i]
}
func cleanup(s string) string {
	if strings.HasPrefix(s, "stable") {
		s = strings.TrimPrefix(s, "stable")
		s += "stable"
	}
	s = strings.Replace(s, "alpha", ".0", -1)
	s = strings.Replace(s, "beta", ".1", -1)
	s = strings.Replace(s, "rc", ".2", -1)
	s = strings.Replace(s, "stable", ".4", -1)
	s1 := ""
	for _, s := range s {
		if (s >= 48 && s <= 57) || s == 46 {
			s1 += string(s)
		}
	}
	return s1
}

func SortDottedStringsByDigits(s []string) []string {
	s1 := dottedStrings(s)
	sort.Sort(s1)
	return s1
}

func safeClose(co io.Closer) {
	if cerr := co.Close(); cerr != nil {
		log.Print(cerr)
	}
}

type NexusBroker struct {
	name string
}

type NexusOperator struct {
	name   string
	status NexusControllerStatus
	// client *kube.Client
	deploymentConf OperatorDeploymentConfig
}

type OperatorDeploymentConfig struct {
	HelmChartRepo         string
	GetHelmOverrides      func(delete bool) map[string]interface{}
	MesheryReleaseVersion string
}

type meshSync struct {
	name string
}

func (mcs NexusControllerStatus) String() string {
	switch mcs {
	case Deployed:
		return "Deployed"
	case Deploying:
		return "Deploying"
	case NotDeployed:
		return "Not Deployed"
	case Undeployed:
		return "Undeployed"
	case Enabled:
		return "Enabled"
	case Running:
		return "Running"
	case Connected:
		return "Connected"
	case Unknown:
		return "Unknown"
	}
	return "unknown"
}

func (mch *Controllers) GetControllerHandlersForEachContext() map[string]map[NexusController]IController {
	return mch.ctxControllerHandlersMap
}

func (mch *Controllers) GetMeshSyncDataHandlersForEachContext() map[string]DataHandler {
	return mch.ctxMeshSyncDataHandlerMap
}

func (mch *Controllers) GetOperatorsStatusMap() map[string]NexusControllerStatus {
	return nil
}

type NexusController int

const (
	Broker   NexusController = iota
	MeshSync                 = "meshsync"
	Operator                 = "meshery-broker"
	Server                   = "meshery-server"
)

type NexusControllerStatus int

const (
	Deployed NexusControllerStatus = iota
	Deploying
	NotDeployed
	Undeployed
	Enabled
	Running
	Connected
	Unknown
)

type IController interface {
	GetName() string
	GetStatus() NexusControllerStatus
	Deploy(force bool) error
	Undeploy() error
	GetPublicEndpoint() (string, error)
	GetVersion() (string, error)
}

type DataHandler struct{}

type Controllers struct {
	ctxControllerHandlersMap  map[string]map[NexusController]IController
	ctxOperatorStatusMap      map[string]NexusControllerStatus
	ctxMeshSyncDataHandlerMap map[string]DataHandler
}

var (
	//controlPlaneNamespace
	controlPlaneNamespace = map[MeshType][]string{
		MeshTypeIstio:   {"istio-system"},
		MeshTypeAllMesh: {"istio-system"},
	}

	//addPortSelector
	addPortSelector = map[string]string{
		"prometheus":       "http",
		"kiali":            "http",
		"grafana":          "service",
		"zipkin":           "http-query",
		"jaeger-collector": "jaeger-collector-http",
	}
)

// controlPlaneImageOrgs
var controlPlaneImageOrgs = map[MeshType][]string{
	MeshTypeIstio:             {"istio"},
	MeshTypeCiliumServiceMesh: {"cilium"},
}

// selectivelyFetchNamespace
func selectivelyFetchNamespace(cids []string, provider models.Provider) ([]string, error) {
	namespaces := make([]string, 0)
	var rows *sql.Rows
	var err error
	rows, err = provider.GetGenericPersister().Raw("SELECT DISTINCT rom.name as name FROM objects o LEFT JOIN resource_object_meta rom ON o.id = rom.id WHERE o.kind = 'Namespace' AND o.cluster_id IN ?", cids).Rows()

	if err != nil {
		return nil, err
	}

	defer func(rows *sql.Rows) {
		err := rows.Close()
		if err != nil {
			return
		}
	}(rows)

	for rows.Next() {
		var name string
		err := rows.Scan(&name)
		if err != nil {
			return nil, err
		}

		namespaces = append(namespaces, name)
	}
	return namespaces, nil
}

func persistClusterName() {}

func persistData() {}

func listenToEvents() {}

func haveCommonElements(a []string, b map[string]bool) bool {
	for _, ae := range a {
		if b[ae] {
			return true
		}
	}
	return false
}

func applyYaml() {}
