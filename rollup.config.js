import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import builtins from 'builtin-modules';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';

import {
  devDependencies,
  main,
  module,
  peerDependencies,
} from './package.json';

require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

const external = [
  builtins,
  ...Object.keys(devDependencies),
  ...Object.keys(peerDependencies),
];

const plugins = [
  postcss({
    minimize: !isProduction,
    plugins: [],
    sourceMap: (isProduction && 'inline') || false,
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
  sizeSnapshot(),
  terser(),
];

const output = [
  {
    file: main,
    format: 'cjs',
    sourcemap: !isProduction,
  },
  {
    file: module,
    format: 'es',
    sourcemap: !isProduction,
  },
];

export default {
  external,
  input: 'src/index.jsx',
  output,
  plugins,
};
