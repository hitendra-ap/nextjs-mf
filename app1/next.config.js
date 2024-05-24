const NextFederationPlugin = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'app1',
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './Counter': './components/Counter.tsx',
          },
          shared: {},
        }),
      );

    return config;
  },
};

module.exports = nextConfig;
