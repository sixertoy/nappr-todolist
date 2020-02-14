import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import localResolve from 'rollup-plugin-local-resolve';
import postcss from 'rollup-plugin-postcss';

import pkg from './package.json';

const OUTPUT_DATA = [
  {
    file: pkg.browser,
    format: 'umd',
  },
  {
    file: pkg.main,
    format: 'cjs',
  },
  {
    file: pkg.module,
    format: 'es',
  },
];

const config = OUTPUT_DATA.map(({ file, format }) => ({
  external: ['react', 'react-dom', 'prop-types', 'react-jss'],
  input: 'src/index.jsx',
  output: {
    file,
    format,
    globals: {
      'prop-types': 'PropTypes',
      react: 'React',
      'react-dom': 'ReactDOM',
      'react-jss': 'ReactJSS',
    },
    name: '@iziges/napper-todolist',
  },
  plugins: [
    postcss({ extract: true, plugins: [autoprefixer] }),
    babel({ exclude: /node_modules/ }),
    localResolve(),
    resolve({ browser: true, extensions: ['.js', '.jsx'] }),
    commonjs(),
    filesize(),
  ],
}));

export default config;
