/* eslint-disable import/no-extraneous-dependencies */
import alias from 'rollup-plugin-alias';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import external from 'rollup-plugin-peer-deps-external';
import minify from 'rollup-plugin-babel-minify';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    'react',
    'react-dom',
    'react-dates',
    'react-dates/initialize',
    'styled-components',
  ],
  plugins: [
    external(),
    postcss({
      modules: true,
    }),
    url(),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      customResolveOptions: {
        moduleDirectory: 'src',
      },
    }),
    alias({
      polished: 'node_modules/polished/dist/polished.es.js',
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react-is/index.js': ['isValidElementType'],
      },
    }),
    filesize(),
    minify({
      comments: false,
    }),
  ],
};
