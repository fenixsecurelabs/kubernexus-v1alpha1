package router

import (
	"log"
	"net/http"
	"os"
	"time"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/render"
	"github.com/phxvlabs.io/kubernexus/nexus-server/api/handler"
)

func initialize() *chi.Mux {
	router := chi.NewRouter()

	router.Use(
		render.SetContentType(render.ContentTypeJSON),
		middleware.RedirectSlashes,
		middleware.Recoverer,
	)

	router.Use(middleware.Timeout(20 * time.Second))

	router.Route("/v1", func(r chi.Router) {
		r.Mount("/", handler.Routes())
	})
	return router
}

const defaultPort = "8080"

func ServeRouter() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	r := initialize()

	log.Printf("connect to http://localhost:%s/v1/playground for GraphQL playground", port)

	err := http.ListenAndServe(":8080", r)
	if err != nil {
		log.Println("Error serving")
	}
}
