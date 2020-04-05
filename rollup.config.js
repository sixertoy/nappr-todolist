import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: false,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: false,
    },
  ],
  plugins: [
    external({
      includeDependencies: false,
    }),
    postcss({
      minimize: true,
      plugins: [],
      sourceMap: 'inline',
    }),
    url(),
    svgr(),
    resolve(),
    babel({
      exclude: 'node_modules/**',
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        'transform-react-remove-prop-types',
      ],
      presets: ['react-app'],
      runtimeHelpers: true,
    }),
    commonjs({
      // namedExports: {
      //   'node_modules/react/index.js': [
      //     'createContext',
      //     'Component',
      //     'useState',
      //     'useEffect',
      //   ],
      // },
    }),
    terser(),
  ],
};
