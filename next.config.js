/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/culturaltrigger',
  images: {
    unoptimized: true
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.json$/,
      type: 'json',
    });
    return config;
  },
}

module.exports = nextConfig
