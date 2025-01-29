import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000", // Local server port
        pathname: "public/assets/**", // Path to your images
        search: "",
      },
    ],
  },
};

export default nextConfig;
