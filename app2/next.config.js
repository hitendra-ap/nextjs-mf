const NextFederationPlugin = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'app2',
          remotes: {
            app1: `app1@http://localhost:3000/_next/static/chunks/remoteEntry.js`,
          },
          filename: 'static/chunks/remoteEntry.js',
          shared: {},
          extraOptions: {},
        }),
      );
    }

    return config;
  },
};

module.exports = nextConfig;
