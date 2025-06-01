import path from 'path';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/config/styles')],
    prependData: `
      @use "./variables/sizes" as sizes;
      @use "./variables/colors" as colors;
    `,
  },
};

export default nextConfig;
