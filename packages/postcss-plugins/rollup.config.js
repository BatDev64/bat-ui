import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import swc from 'rollup-plugin-swc3'
import dts from 'rollup-plugin-dts'

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: 'lib/index.esm.js',
        format: 'esm',
        sourcemap: true
      },
      {
        file: 'lib/index.cjs',
        format: 'cjs',
        sourcemap: true
      }
    ],
    plugins: [
      nodeResolve({
        extensions: ['.js', '.ts']
      }),
      commonjs(),
      swc({
        tsconfig: 'tsconfig.json',
        sourceMaps: true,
        jsc: {
          parser: {
            syntax: 'typescript'
          },
          target: 'es2020'
        }
      })
    ]
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'lib/index.d.ts', format: 'esm' }],
    plugins: [dts()]
  }
]
