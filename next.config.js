/** @type {import('next').NextConfig} */

const nextPWA = require('next-pwa');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const svgConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

const eslinConfig = {
  eslint: {
    dirs: [
      'pages',
      'utils',
      'sharedComponents',
      'pageComponents',
      'assets',
      'services',
      'types',
      'data',
      'api',
    ],
  },
};

const imgConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
      },
    ],
  },
};

const withPWA = nextPWA({
  dest: 'public',
});

module.exports = withPWA({
  ...nextConfig,
  ...svgConfig,
  ...eslinConfig,
  ...imgConfig,
});
