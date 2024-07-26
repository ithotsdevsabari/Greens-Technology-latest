/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // basePath: '/australia', // Your subdirectory path
  // assetPrefix: '/australia/', // Ensure assets are served correctly
}

module.exports = nextConfig