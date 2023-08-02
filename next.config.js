/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    trailingSlash: true,
    compiler: {
      // ssr and displayName are configured by default
      styledComponents: true,
    },
  }
