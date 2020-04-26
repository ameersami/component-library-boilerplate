// node-resolve will resolve all the node dependencies
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs'
import typescript from '@rollup/plugin-typescript';

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'styled'
}

export default {
  input: 'src/index.tsx',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    globals
  },
  // All the used libs needs to be here
  external: Object.keys(globals),
  plugins: [
    resolve(['', '.js', '.jsx', '.ts', '.tsx']),
    typescript(),
    commonjs({
      include: '**/node_modules/**',
      namedExports: {},
    }),
    babel({
      exclude: 'node_modules/**',
      include: ['src/**/*'],
      extensions: ['', '.js', '.jsx', '.ts', '.tsx']
    }),
  ]
}