import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es'
  },
  plugins: [
    resolve(),
    commonjs(),
  ]
}
