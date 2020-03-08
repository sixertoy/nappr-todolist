import builtinModules from 'builtin-modules';
import dotenv from 'dotenv';
import babel from 'rollup-plugin-babel';
import commonJS from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';

import { dependencies, peerDependencies } from './package.json';

dotenv.config();
const isDevelopment = process.env.NODE_ENV === 'development';

const babelPluginoptions = { exclude: 'node_modules/**' };

const commonjsPluginoptions = {
  extensions: ['.js', '.jsx'],
  include: 'node_modules/**',
};

const plugins = (umd = false) => [
  resolve(),
  babel(babelPluginoptions),
  commonJS(commonjsPluginoptions),
  umd ? sizeSnapshot({ printInfo: isDevelopment }) : null,
  terser({ compress: !isDevelopment, mangle: !isDevelopment }),
];

const external = [
  ...builtinModules,
  ...Object.keys(dependencies || {}),
  ...Object.keys(peerDependencies || {}),
];

export default [
  {
    external,
    input: './src/index.jsx',
    output: {
      esModule: false,
      file: 'dist/bundle.min.js',
      format: 'umd',
      name: 'napper-todolist',
    },
    plugins: plugins(true),
  },
  {
    external,
    input: { index: './src/index.jsx' },
    output: { dir: './lib', format: 'esm' },
    plugins: plugins(),
  },
];
