/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'fakestoreapi.com',
            pathname: '/img/*', 
          },
        ],
        domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com"],
      },
};

export default nextConfig;  
