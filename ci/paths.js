const path = require('path');

const R = (...p) => path.resolve(__dirname, '../', ...p);

module.exports = {
  R,
  src: path.resolve(__dirname, '../src'),
  ui: path.resolve(__dirname, '../src/ui'),
};
