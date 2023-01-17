const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@atomic': path.resolve(__dirname, 'src/components/atomic')
    }
  }
};
