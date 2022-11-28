package log

import (
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
)

type Logger interface {
	Debug(string, ...zapcore.Field)
	Error(string, ...zapcore.Field)
	Info(string, ...zapcore.Field)
	Warn(string, ...zapcore.Field)
}

func NewLogger() (Logger, error) {
	cfg := zap.Config{
		Level: zap.NewAtomicLevelAt(zapcore.DebugLevel),
		// Development:       false,
		// DisableCaller:     false,
		// DisableStacktrace: false,
		// Sampling:          nil,
		Encoding:         "console",
		EncoderConfig:    zapcore.EncoderConfig{},
		OutputPaths:      []string{"stdout"},
		ErrorOutputPaths: []string{"stderr"},
		InitialFields:    nil,
	}

	return cfg.Build()
}
