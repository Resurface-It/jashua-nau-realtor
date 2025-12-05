/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    // Allow local images from public directory
    unoptimized: false,
  },
}

module.exports = nextConfig

