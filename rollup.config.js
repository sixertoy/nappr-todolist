import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

import {
  devDependencies,
  main,
  module,
  peerDependencies,
} from './package.json';

const { NODE_ENV } = process.env;
const isProduction = NODE_ENV === 'production';

const output = [
  {
    file: main,
    format: 'cjs',
    sourcemap: isProduction,
  },
  {
    file: module,
    format: 'es',
    sourcemap: isProduction,
  },
];

export default {
  external: [
    ...Object.keys(devDependencies || {}),
    ...Object.keys(peerDependencies || {}),
  ],
  input: 'src/index.jsx',
  output,
  plugins: [
    postcss({
      minimize: isProduction,
      plugins: [],
      sourceMap: 'inline',
    }),
    url(),
    svgr(),
    resolve({ extensions: ['.js', '.jsx'] }),
    babel({
      babelrc: true,
      exclude: ['node_modules/**'],
      runtimeHelpers: true,
    }),
    commonjs(),
    terser({ compress: isProduction, mangle: isProduction }),
  ],
};
