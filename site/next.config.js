/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'BefSec Technologies',
    description: 'The store for BefSec supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://andyoulovexy.github.io/kasm-registry/',
    contactUrl: 'https://github.com/andyoulovexy/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
