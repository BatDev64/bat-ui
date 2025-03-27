import type { ALLOWED_VARIANTS } from '../constants/constants'

export type Variant = (typeof ALLOWED_VARIANTS)[number]

export type ButtonVariants = Variant
