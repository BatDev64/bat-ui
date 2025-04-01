import type { ButtonVariants } from '../../../types/types'
import { flat } from './flat'
import { ghost } from './ghost'
import { link } from './link'
import { outline } from './outline'
import { solid } from './solid'

export const styleGenerators = {
  solid,
  outline,
  ghost,
  link,
  flat
}

export const generateButtonRule = (variant: ButtonVariants, color: string) => {
  const generators = styleGenerators[variant]
  const selector = `.button-${variant}-${color}`

  return {
    selector,
    nodes: [
      ...generators.light(color),
      {
        selector:
          '&:where([data-theme="dark"], [data-theme="dark"] *),&:where(.dark, .dark *)',
        nodes: generators.dark(color)
      }
    ]
  }
}
