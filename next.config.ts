import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 500, // Check for changes every 500ms
        aggregateTimeout: 200, // Delay before rebuilding to batch changes
        ignored: ["**/node_modules/**"], // Ignore node_modules to reduce overhead
      };
    }
    return config;
  },
  /* other config options here */
};

export default nextConfig;