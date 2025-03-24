import type { Plugin, PluginCreator } from 'postcss'
import { createFile } from './helpers/createFile'

interface CreateThemeOptions {
  nameFile?: string
  dir?: string
  overwrite?: boolean
  format?: 'tailwind' | 'css'
  createAll?: boolean
}

const createTheme: PluginCreator<CreateThemeOptions> = (options = {}) => {
  const {
    nameFile = 'theme.css',
    dir = 'lib',
    overwrite = true,
    format = 'tailwind',
    createAll = false
  } = options

  const regex = /--color-[a-zA-Z-]+-(?:50|[1-9]00|950)/

  const cssVars: string[] = []

  return {
    postcssPlugin: 'create-theme',
    async OnceExit(root) {
      root.walkDecls((decl) => {
        if (regex.test(decl.prop)) {
          const cssVar = `${decl.prop}: ${decl.value};`

          cssVars.push(cssVar)
          decl.remove()
        }
      })

      console.log(cssVars)

      const tailwindTheme = `@theme {\n${cssVars.join('\n')}\n}`
      const rootTheme = `:root,:host {\n${cssVars.join('\n')}\n}`

      if (!createAll) {
        const content = format === 'tailwind' ? tailwindTheme : rootTheme
        await createFile({
          content,
          nameFile: nameFile,
          overwrite,
          dir
        })
      }
      await createFile({
        content: tailwindTheme,
        nameFile: `tailwind-${nameFile}`,
        overwrite,
        dir
      })
      await createFile({
        content: rootTheme,
        nameFile: `css-${nameFile}`,
        overwrite,
        dir
      })
    }
  }
}

createTheme.postcss = true

export default createTheme
