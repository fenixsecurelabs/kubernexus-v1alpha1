const relay = require('./relay.config');

module.exports = {
  compiler: {
    relay,
  },
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["ui"],
  },
};
