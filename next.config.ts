import withRspack from "next-rspack";

import type { NextConfig } from "next";

const uId: string = `${+new Date()}`;

const nextConfig: NextConfig = {
  reactStrictMode: process.env.NODE_ENV === "development",
  output: "standalone",
  cleanDistDir: true,
  images: {
    unoptimized: true,
  },
  generateBuildId: () => uId,
  deploymentId: uId,
  compiler:
    process.env.NODE_ENV === "development"
      ? undefined
      : {
          removeConsole: {
            exclude: ["error"],
          },
        },
  logging: {
    fetches: {
      fullUrl: process.env.NODE_ENV === "development",
    },
  },
  devIndicators: false,
};

export default withRspack(nextConfig);
