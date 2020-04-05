import builtinModules from 'builtin-modules';
import babel from 'rollup-plugin-babel';
import commonJS from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';

import { dependencies, main, module, peerDependencies } from './package.json';

const external = [
  ...builtinModules,
  ...Object.keys(dependencies || {}),
  ...Object.keys(peerDependencies || {}),
];

const babelPluginoptions = {
  babelrc: true,
  exclude: 'node_modules/**',
};

const commonjsPluginoptions = {
  extensions: ['.js', '.jsx'],
  include: 'node_modules/**',
};

const plugins = (usecjs = false) => [
  resolve(),
  commonJS(commonjsPluginoptions),
  babel(babelPluginoptions),
  usecjs ? sizeSnapshot({ printInfo: true }) : null,
  terser({ compress: true, mangle: true }),
];

const configCJS = {
  input: './src/index.jsx',
  output: {
    exports: 'named',
    file: main,
    format: 'cjs',
  },
};

const configESM = {
  input: './src/index.jsx',
  output: {
    exports: 'named',
    file: module,
    format: 'esm',
  },
};

export default [
  { ...configCJS, external, plugins: plugins(true) },
  { ...configESM, external, plugins: plugins() },
];
