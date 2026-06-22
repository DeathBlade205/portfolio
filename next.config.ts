import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. Without this, Next infers
  // /home/sadat as the root (due to a stray pnpm-lock.yaml there) and
  // resolves a mismatched Next/SWC version from the parent node_modules.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
