import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import externals from 'rollup-plugin-node-externals';
import del from 'rollup-plugin-delete';
import pkg from './package.json';

export default [
  {
    // Entry point what module will be bundled in output
    input: './src/index.ts',
    plugins: [
      // Deletes any existing build files that exist.
      del({ targets: 'dist/*' }),
      // Ensures that any dependencies we rely on are not bundled within our library.
      // This allows common dependencies to be de-duped with other packages, reducing bundle size.
      externals({ deps: true }),
      // Allows Rollup to find third party modules in node_modules
      nodeResolve({
        extensions: ['.js', '.ts', '.tsx'],
      }),
      // Converts CommonJS modules into ESModules within Rollup
      commonjs(),
      // Use babel config to transpile code into a format that is consumable by a wider set of browser.
      babel({
        babelHelpers: 'runtime',
        exclude: '**/node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
    ],
    // Define the bundled and transpiled output will be placed when the build is complete.
    // it also receive format configuration for module
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  },
];
