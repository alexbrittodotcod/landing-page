/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/landing-page", // Replace with your desired base path
  assetPrefix: "/landing-page/", // Set the asset prefix
  reactStrictMode: true,
  // Enables detailed source maps in development
  productionBrowserSourceMaps: true,
};

export default nextConfig;
