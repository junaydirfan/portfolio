/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirects enabled for production deployment
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.junaidirfan.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig 