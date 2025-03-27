import type { PluginCreator } from 'postcss'
import { generateButtonRule } from './components/button/generateButtonRule'
import { processParameters } from '../utils/processParameters'

const colorUtils: PluginCreator<undefined> = () => {
  return {
    postcssPlugin: 'color-utils',
    Once(root) {
      root.walkAtRules('button-variants', (decl) => {
        const params = processParameters(decl.params)

        if (!params) return

        const { colors, variant } = params

        // biome-ignore lint/complexity/noForEach: <explanation>
        colors.forEach((color) => {
          root.append(generateButtonRule(variant, color))
        })

        decl.remove()
      })
    }
  }
}

colorUtils.postcss = true

export default colorUtils
