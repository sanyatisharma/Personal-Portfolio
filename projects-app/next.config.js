/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Personal-Portfolio',
  assetPrefix: '/Personal-Portfolio',
  trailingSlash: true,
  images: { unoptimized: true },
}

module.exports = nextConfig
