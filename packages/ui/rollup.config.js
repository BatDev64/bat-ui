import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import swc from 'rollup-plugin-swc3'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import tailwindcssPostcss from '@tailwindcss/postcss'
import postcssImport from 'postcss-import'
import { createTheme, colorUtils } from '@bat-ui/plugins'

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

    plugins: [
      peerDepsExternal(),
      nodeResolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
        skip: ['react', 'react-dom']
      }),
      commonjs(),
      postcss({
        plugins: [
          postcssImport(),
          colorUtils(),
          tailwindcssPostcss(),
          createTheme({
            outputDir: './lib',
            createAll: true
          })
        ],
        /* minimize: true, */
        extract: 'index.css',
        sourceMap: true,
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
    ],
    external: ['react', 'react-dom']
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'lib/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/]
  }
]
