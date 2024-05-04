const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'replicate.com',
        },
        {
          protocol: 'https',
          hostname: 'replicate.delivery',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  