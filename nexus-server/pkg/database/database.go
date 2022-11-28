package database

import (
	"fmt"
	"os"
	"sync"

	"github.com/phxvlabs.io/kubernexus/nexus-server/pkg/log"
	"github.com/spf13/viper"
	"gorm.io/driver/postgres"
	sqlite "gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

const (
	POSTGRES = "postgres"
	SQLITE   = "sqlite"
)

type Options struct {
	Username string `json:"username,omitempty"`
	Host     string `json:"host,omitempty"`
	Port     string `json:"port,omitempty"`
	Password string `json:"password,omitempty"`
	Filename string `json:"filename,omitempty"`
	Engine   string `json:"engine,omitempty"`
	Logger   Handler
}

type Handler struct {
	*gorm.DB
	*sync.Mutex
}

var (
	dbHandler Handler
	mx        sync.Mutex
)

func (h *Handler) DBClose() error {
	db, err := h.DB.DB()
	if err != nil {
		return err
	}

	err = db.Close()
	if err != nil {
		return err
	}
	return nil
}

func New(opts Options) (Handler, error) {
	switch opts.Engine {
	case POSTGRES:
		dsn := fmt.Sprintf("host=%s user=%s password=%s port=%s", opts.Host, opts.Username, opts.Password, opts.Port)
		db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
		if err != nil {
			return Handler{}, err
		}
		return Handler{
			db, &sync.Mutex{},
		}, nil
	case SQLITE:
		config := &gorm.Config{}
		//if opts.Logger != nil {
		// config.Logger = opts.Logger.DatabaseLogger()
		//}

		db, err := gorm.Open(sqlite.Open(opts.Filename), config)
		if err != nil {
			return Handler{}, err
		}

		return Handler{
			db, &sync.Mutex{},
		}, nil
	}
	return Handler{}, nil
}

func setNewDBInstance() {
	mx.Lock()
	defer mx.Unlock()

	// Initialize Logger instance
	log, err := log.NewLogger()
	if err != nil {
		log.Error("Error with starting log. Can you fix this?")
		os.Exit(1)
	}

	dbHandler, err = New(Options{
		Filename: fmt.Sprintf("file:%s/mesherydb.sql?cache=private&mode=rwc&_busy_timeout=10000&_journal_mode=WAL", viper.GetString("USER_DATA_FOLDER")),
		Engine:   SQLITE,
		// Logger:   log,
	})
	if err != nil {
		// log.Fatal(err)
		return
	}
}

func GetNewDBInstance() *Handler {
	setNewDBInstance()
	return &dbHandler
}
