import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    APP_VERSION: process.env.APP_VERSION ?? 'xxx',
    PLAUSIBLE_DOMAIN: process.env.PLAUSIBLE_DOMAIN,
    ALLOW_SEARCH_ENGINE_INDEXING:
      process.env.ALLOW_SEARCH_ENGINE_INDEXING ?? 'false',
    BASE_URL: process.env.BASE_URL ?? 'http://localhost:3000',
  },
}

export default nextConfig
