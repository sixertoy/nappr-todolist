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

const output = [
  {
    file: main,
    format: 'cjs',
    sourcemap: true,
  },
  {
    file: module,
    format: 'es',
    sourcemap: true,
  },
];

export default {
  external: [...Object.keys(devDependencies), ...Object.keys(peerDependencies)],
  input: 'src/index.jsx',
  output,
  plugins: [
    postcss({
      minimize: true,
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
    terser(),
  ],
};
