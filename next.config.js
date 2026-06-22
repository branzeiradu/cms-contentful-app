/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: "custom",
  },
};

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
