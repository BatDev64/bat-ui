// src/components/Button/Button.tsx
import { useRef } from 'react'
import { useButton, type AriaButtonProps } from '@react-aria/button'
import { useHover } from '@react-aria/interactions'
import { useFocusRing } from '@react-aria/focus'
import { mergeProps } from '@react-aria/utils'
import { Root as Slot, Slottable } from '@radix-ui/react-slot'
import { cn } from '../../utils/cn'
import { buttonVariants } from './buttonVariants'
import type { VariantProps } from 'class-variance-authority'

export interface ButtonProps
  extends Omit<AriaButtonProps<'button'>, 'isDisabled'>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode
  asChild?: boolean
  className?: string
  isDisabled?: boolean
  ref?: React.Ref<HTMLButtonElement>
  loadingLabel?: string
}

export function Button({
  children,
  asChild = false,
  size = 'md',
  rounded = 'md',
  color = 'primary',
  variant = 'solid',
  iconPosition,
  isLoading = false,
  loadingLabel = 'Loading...',
  isDisabled = false,
  className,
  ref,
  ...props
}: ButtonProps) {
  const internalRef = useRef<HTMLButtonElement>(null)
  const buttonRef = (ref ?? internalRef) as React.RefObject<Element>

  const { buttonProps, isPressed } = useButton(props, buttonRef)
  const { hoverProps, isHovered } = useHover({ ...props, isDisabled })
  const { focusProps, isFocusVisible } = useFocusRing(props)

  const mergedProps = mergeProps(buttonProps, hoverProps, focusProps, props)
  const Component = asChild ? Slot : 'button'

  return (
    <Component
      ref={internalRef}
      {...mergedProps}
      data-hover={isHovered && !isLoading}
      data-active={isPressed && !isLoading}
      data-disabled={isDisabled}
      disabled={isDisabled || isLoading ? true : undefined}
      data-focus={isFocusVisible || undefined}
      data-is-loading={!isLoading ? undefined : true}
      className={cn(
        buttonVariants({
          size,
          rounded,
          variant,
          color,
          iconPosition,
          isLoading,
          isDisabled
        }),
        buttonVariants({
          iconPosition: isLoading ? 'left' : undefined
        }),
        className
      )}
    >
      {isLoading ? (
        <>
          <div className='hidden'>{children}</div>
          <span className='bat-ui-spinner' />
          {loadingLabel}
        </>
      ) : (
        children
      )}
    </Component>
  )
}
