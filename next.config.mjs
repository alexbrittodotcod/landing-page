/** @type {import('next').NextConfig} */
const nextConfig = {
  //basePath: "/landing-page",
  //assetPrefix: "/landing-page", // Set the asset prefix
  reactStrictMode: true,
  // Enables detailed source maps in development
  productionBrowserSourceMaps: true,

  // Add the domain for images
  images: {
    domains: ["hirewalks-dev.s3.amazonaws.com"], // Add your required domain here
  },
};

export default nextConfig;
