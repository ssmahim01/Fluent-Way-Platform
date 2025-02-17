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
        ],
      },
};

export default nextConfig;
