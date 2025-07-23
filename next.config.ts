import path from 'path';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: process.env.GITHUB_ACTIONS ? 'export' : undefined,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/config/styles')],
    prependData: `
    @use "./variables/colors" as colors;
      @use "./variables/sizes" as sizes;
      @use './variables/transitions' as transitions;
      @use './variables/mixins' as mixins;
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
};

export default nextConfig;
