package handler

import (
	"net/http"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/go-chi/chi"
	"github.com/phxvlabs.io/kubernexus/nexus-server/graphql/generated"
)

func Routes() *chi.Mux {
	router := chi.NewRouter()

	router.Post("/query", graphQLHandler())

	router.Get("/playground", playgroundQLHandler("/v1/query"))

	return router
}

func graphQLHandler() http.HandlerFunc {
	h := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{}))

	return h.ServeHTTP
}

func playgroundQLHandler(endpoint string) http.HandlerFunc {
	playgroundHandler := playground.Handler("GraphQL", endpoint)
	return playgroundHandler
}
