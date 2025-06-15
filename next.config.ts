import path from 'path';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: process.env.GITHUB_ACTIONS ? 'export' : undefined,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/config/styles')],
    prependData: `
      @use "./variables/sizes" as sizes;
      @use "./variables/colors" as colors;
      @use './variables/transitions' as transitions;
    `,
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
            },
          },
        ],
        as: '*.ts',
      },
    },
  },
  // experimental: { workerThreads: true, cpus: 4 },
};

export default nextConfig;
