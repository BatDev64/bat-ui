import { useButton, type AriaButtonProps } from '@react-aria/button'
import { useHover } from '@react-aria/interactions'
import { mergeProps } from '@react-aria/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from '../Slot/Slot'
import { cn } from '../../utils/cn'
import { useRef } from 'react'

// Definimos las variantes básicas del botón
const buttonVariants = cva('button-base', {
  variants: {
    variant: {
      solid: ['border border-transparent'],
      ghost: ['bg-transparent border border-transparent'],
      outline: ['bg-transparent border'],
      link: ['border-none bg-transparent px-0 py-0']
    },
    size: {
      sm: ['px-2 py-1', 'text-sm'],
      md: ['px-3 py-2', 'text-base'],
      lg: ['px-4 py-3', 'text-base']
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full'
    }
  }
})

// Tipos para la variante y el color del botón
type ButtonVariant = Exclude<
  Pick<VariantProps<typeof buttonVariants>, 'variant'>['variant'],
  null | undefined
>
type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'info'
  | 'warn'

// Clases CSS asociadas a cada combinación de variante y color
const colorClasses: Record<ButtonVariant, Record<ButtonColor, string>> = {
  solid: {
    primary: 'button-solid-primary',
    secondary: 'button-solid-secondary',
    success: 'button-solid-success',
    danger: 'button-solid-danger',
    info: 'button-solid-info',
    warn: 'button-solid-warn'
  },
  outline: {
    primary: 'button-outline-primary',
    secondary: 'button-outline-secondary',
    success: 'button-outline-success',
    danger: 'button-outline-danger',
    info: 'button-outline-info',
    warn: 'button-outline-warn'
  },
  ghost: {
    primary: 'button-ghost-primary',
    secondary: 'button-ghost-secondary',
    success: 'button-ghost-success',
    danger: 'button-ghost-danger',
    info: 'button-ghost-info',
    warn: 'button-ghost-warn'
  },
  link: {
    primary: 'button-link-primary',
    secondary: 'button-link-secondary',
    success: 'button-link-success',
    danger: 'button-link-danger',
    info: 'button-link-info',
    warn: 'button-link-warn'
  }
}

// Propiedades del componente Button
export interface ButtonProps
  extends AriaButtonProps<'button'>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode
  asChild?: boolean
  className?: string
  color?: ButtonColor
  ref?: React.Ref<HTMLButtonElement>
}

// Componente Button
export function Button({
  children,
  asChild = false,
  size = 'md',
  rounded = 'md',
  ref,
  color = 'primary',
  variant = 'solid',
  className,
  ...props
}: ButtonProps) {
  const internalRef = useRef<HTMLButtonElement>(null)
  const buttonRef = (ref ?? internalRef) as React.RefObject<Element>

  const { buttonProps, isPressed } = useButton(props, buttonRef)
  const { hoverProps, isHovered } = useHover(props)

  const mergedProps = mergeProps(buttonProps, hoverProps, props)
  const Component = asChild ? Slot : 'button'
  const colorClass = variant ? colorClasses[variant][color] : undefined

  return (
    <Component
      ref={ref}
      {...mergedProps}
      data-hover={isHovered}
      data-active={isPressed}
      className={cn(
        buttonVariants({ size, rounded, variant }),
        colorClass,
        className
      )}
    >
      {children}
    </Component>
  )
}
