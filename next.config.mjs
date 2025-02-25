/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ibb.co.com',
          },
          {
            protocol: 'https',
            hostname: 'example.com',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
        ],
      },
      eslint: {
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;
