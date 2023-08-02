const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      'avatars.githubusercontent.com',
      'portfolio-znm9.onrender.com',
    ],
    deviceSizes: [670, 750, 828, 1080, 1224, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // target: 'serverless',
  // output: 'export',
  // distDir: 'dist',
};

module.exports = nextConfig;
