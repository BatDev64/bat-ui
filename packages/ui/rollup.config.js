import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import swc from 'rollup-plugin-swc3'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'lib/index.esm.js',
        format: 'esm',
        sourcemap: true,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      },
      { file: 'lib/index.cjs.js', format: 'cjs', sourcemap: true }
    ],
    external: ['react', 'react-dom'],
    plugins: [
      peerDepsExternal(),
      nodeResolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
        skip: ['react', 'react-dom']
      }),
      commonjs(),
      postcss({
        config: {
          path: './postcss.config.ts'
        },
        extract: 'index.css',
        extensions: ['.css']
      }),
      swc({
        tsconfig: 'tsconfig.json',
        sourceMaps: true,
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
            dynamicImport: true
          },

          transform: {
            react: {
              runtime: 'automatic'
            }
          },
          target: 'es2020'
        },
        module: {
          type: 'es6'
        },

        minify: true
      })
    ]
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'lib/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/]
  }
]
