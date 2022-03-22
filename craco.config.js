const path = require('path');

module.exports = {
  eslint: {
    enable: true,
  },
  webpack: {
    alias: {
      '~': path.join(path.resolve(__dirname, './src')),
    },
  },
};
