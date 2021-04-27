import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const libname = 'dash-flexible';

const { R, src, dist } = require('./paths');

export default [
  {
    input: R(src, 'ui/js/flexable.js'),
    output: {
      name: 'DashFlexible',
      file: R(dist, `${libname}.umd.js`),
      format: 'umd',
    },
    plugins: [resolve(), commonjs()],
  },
];
