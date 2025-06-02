import path from 'path';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: process.env.GITHUB_ACTIONS ? 'export' : undefined,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/config/styles')],
    prependData: `
      @use "./variables/sizes" as sizes;
      @use "./variables/colors" as colors;
    `,
  },
  experimental: { workerThreads: true, cpus: 4 },
};

export default nextConfig;
