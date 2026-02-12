/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.aster.cat'
      },
      {
        protocol: 'https',
        hostname: '**'
      }

    ]
  }
};

export default nextConfig;
