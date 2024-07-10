const path = require('path');

module.exports = async ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    'react-native': 'react-native-web',
  };

  config.resolve.extensions.push('.web.js', '.web.ts', '.web.tsx');

  return config;
};
