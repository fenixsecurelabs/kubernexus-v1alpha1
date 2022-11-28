package main

import (
	"log"
	"os"
	"os/signal"
	"path"

	"github.com/google/uuid"
	"github.com/phxvlabs.io/kubernexus/nexus-server/api/router"
	"github.com/phxvlabs.io/kubernexus/nexus-server/graphql/customTypes"
	"github.com/phxvlabs.io/kubernexus/nexus-server/helpers"
	"github.com/spf13/viper"
	"go.uber.org/zap"
)

var (
	version        = "The current version is v0.0.1-dev"
	commitSHA      = ""
	releaseChannel = "The current release channel is v1alpha1"
)

func main() {
	knLog, _ := zap.NewDevelopment()
	defer func(knLog *zap.Logger) {
		err := knLog.Sync()
		if err != nil {
			return
		}
	}(knLog)

	instanceID, err := uuid.NewUUID()
	if err != nil {
		os.Exit(1)
	}

	// ctx := context.Background()

	viper.AutomaticEnv()

	viper.SetDefault("PORT", 8080)
	viper.SetDefault("ADAPTER_URLS", "")
	viper.SetDefault("BUILD", version)
	viper.SetDefault("OS", "meshery")
	viper.SetDefault("COMMITSHA", commitSHA)
	viper.SetDefault("RELEASE_CHANNEL", releaseChannel)
	viper.SetDefault("INSTANCE_ID", &instanceID)
	viper.SetDefault("ENFORCED_PROVIDER", "")
	viper.SetDefault("REGISTER_STATIC_K8S", true)
	viper.SetDefault("SKIP_DOWNLOAD_CONTENT", false)
	viper.SetDefault("SKIP_COMP_GEN", false)
	viper.SetDefault("PLAYGROUND", false)
	// store.Initialize()

	// Register local OAM traits and workloads

	// "Local Provider capabilities are: "
	knLog.Info(version)

	// "KuberNexus Server release channel is: "
	knLog.Info(releaseChannel)

	home, err := os.UserHomeDir()
	if viper.GetString("USER_DATA_FOLDER") == "" {
		if err != nil {
			log.Println("Error retrieving user's data directory. Does this exist?")
			os.Exit(1)
		}
		viper.SetDefault("USER_DATA_FOLDER", path.Join(home, ".meshery", ".config"))
	}

	errDir := os.MkdirAll(viper.GetString("USER_DATA_FOLDER"), 0755)
	if errDir != nil {
		log.Printf("Error creating user's data directory")
		os.Exit(1)
	}

	if viper.GetString("KUBECONFIG_FOLDER") == "" {
		if err != nil {
			log.Printf("Error retrieving kubeconfig folder")
			os.Exit(1)
		}
		viper.SetDefault("KUBECONFIG_FOLDER", path.Join(home, ".kube"))
	}

	log.Println("Using kubeconfig at: ", viper.GetString("KUBECONFIG_FOLDER"))

	// Setup debug log to be detected
	if viper.GetBool("DEBUG") {
		return
	}

	adapterURLS := viper.GetStringSlice("ADAPTER_URLS")
	adapterTracker := helpers.NewAdaptersTracker(adapterURLS)
	// queryTracker := helpers.NewUUIDQueryTracker()

	// providers := map[string]models.Provider{}

	operatorDeploymentConfig := customTypes.NewOperatorDeploymentConfig(adapterTracker)

	router.ServeRouter()

	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt)

	log.Println("Doing seeded content cleanup...")

	log.Println("CLosing database instance...")

	log.Println("Shutting down Meshery Server...")
}
