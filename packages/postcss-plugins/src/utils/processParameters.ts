import { ALLOWED_VARIANTS } from '../constants/constants'
import type { Variant } from '../types/types'

const isValidVariant = (value: string): value is Variant => {
  return ALLOWED_VARIANTS.includes(value as Variant)
}

export const processParameters = (
  params: string
): {
  variant: Variant
  colors: string[]
} => {
  const trimmedParams = params.trim()
  const match = trimmedParams.match(/^([a-zA-Z0-9-]+)-\((.*)\)$/)

  if (!match) {
    throw new Error('no parameters found')
  }

  const [, variant, colorString] = match

  if (!isValidVariant(variant)) {
    throw new Error('')
  }

  const colors = colorString
    .split(',')
    .map((c) => c.trim())
    .filter(Boolean)
  return { variant, colors }
}
