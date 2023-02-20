/* eslint-disable no-undef */
import pluginTypescript from '@rollup/plugin-typescript';
import pluginCommonjs from '@rollup/plugin-commonjs';
import pluginNodeResolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import { terser } from '@wwa/rollup-plugin-terser';
import * as path from 'path';
import pkg from './package.json';

const moduleName = pkg.name.replace(/^@.*\//, '');
const inputFileName = 'src/index.ts';
const author = pkg.author;
const banner = `
  /**
   * @license
   * author: ${author}
   * ${moduleName}.js v${pkg.version}
   * Released under the ${pkg.license} license.
   */
`;
const arExternals = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.devDependencies || {})
];

export default [
  {
    input: inputFileName,
    output: [
      {
        file: pkg.module,
        format: 'es',
        sourcemap: 'inline',
        banner,
        exports: 'named',
        compact: true
      },
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: 'inline',
        banner,
        exports: 'named',
        compact: true
      }
    ],
    external: arExternals,
    plugins: [
      pluginTypescript(),
      pluginCommonjs({
        extensions: ['.js', '.ts']
      }),
      babel({
        babelHelpers: 'bundled',
        configFile: path.resolve(__dirname, '.babelrc.js')
      }),
      pluginNodeResolve({
        browser: false
      }),
      terser()
    ]
  }
];
