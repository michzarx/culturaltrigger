/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/culturaltrigger',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out',
}

module.exports = nextConfig
