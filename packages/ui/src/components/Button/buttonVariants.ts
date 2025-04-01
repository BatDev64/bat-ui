// src/components/Button/buttonVariants.ts
import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  [
    'button-base',
    'has-[.bat-ui-spinner]:[&_.bat-ui-spinner]:[--color-spinner:var(--btn-text)]',
    'data-is-loading:bg-transparent data-is-loading:bg-(--btn-bg-active)',
    'data-is-loading:text-(--btn-text-active)'
  ],
  {
    variants: {
      variant: {
        solid: 'border border-transparent',
        flat: 'border border-transparent',
        ghost: 'bg-transparent border border-transparent',
        outline: 'bg-transparent border',
        link: 'border-none bg-transparent px-0 py-0'
      },
      size: {
        xxs: 'px-2 py-1 text-xs max-h-[1.625rem] [&_svg]:size-4',
        xs: 'px-3 py-1.5 text-xs max-h-[1.875rem] [&_svg]:size-4',
        sm: 'px-4 py-2 text-sm max-h-[2.375rem] [&_svg]:size-5',
        md: 'px-5 py-2.5 text-sm max-h-[2.625rem] [&_svg]:size-5',
        lg: 'px-5 py-3 text-base max-h-[3.125rem] [&_svg]:size-6',
        xl: 'px-6 py-3.5 text-base max-h-[3.375rem] [&_svg]:size-6'
      },
      iconPosition: {
        left: false,
        right: false
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full'
      },
      // Definimos la variante de color, se deja vacía aquí y se asignan en los compoundVariants.
      color: {
        primary: '',
        secondary: '',
        success: '',
        danger: '',
        info: '',
        warn: ''
      },
      isDisabled: {
        false: null,
        true: 'cursor-not-allowed'
      },
      isLoading: {
        false: null,
        true: 'cursor-progress'
      }
    },
    compoundVariants: [
      // --- Variante: solid
      { variant: 'solid', color: 'primary', className: 'button-solid-primary' },
      {
        variant: 'solid',
        color: 'secondary',
        className: 'button-solid-secondary'
      },
      { variant: 'solid', color: 'success', className: 'button-solid-success' },
      { variant: 'solid', color: 'danger', className: 'button-solid-danger' },
      { variant: 'solid', color: 'info', className: 'button-solid-info' },
      { variant: 'solid', color: 'warn', className: 'button-solid-warn' },
      // --- Variante: outline
      {
        variant: 'outline',
        color: 'primary',
        className: 'button-outline-primary '
      },
      {
        variant: 'outline',
        color: 'secondary',
        className: 'button-outline-secondary'
      },
      {
        variant: 'outline',
        color: 'success',
        className: 'button-outline-success'
      },
      {
        variant: 'outline',
        color: 'danger',
        className: 'button-outline-danger'
      },
      { variant: 'outline', color: 'info', className: 'button-outline-info' },
      { variant: 'outline', color: 'warn', className: 'button-outline-warn' },
      // --- Variante: ghost
      { variant: 'ghost', color: 'primary', className: 'button-ghost-primary' },
      {
        variant: 'ghost',
        color: 'secondary',
        className: 'button-ghost-secondary'
      },
      { variant: 'ghost', color: 'success', className: 'button-ghost-success' },
      { variant: 'ghost', color: 'danger', className: 'button-ghost-danger' },
      { variant: 'ghost', color: 'info', className: 'button-ghost-info' },
      { variant: 'ghost', color: 'warn', className: 'button-ghost-warn' },
      // --- Variante: link
      { variant: 'link', color: 'primary', className: 'button-link-primary' },
      {
        variant: 'link',
        color: 'secondary',
        className: 'button-link-secondary'
      },
      { variant: 'link', color: 'success', className: 'button-link-success' },
      { variant: 'link', color: 'danger', className: 'button-link-danger' },
      { variant: 'link', color: 'info', className: 'button-link-info' },
      { variant: 'link', color: 'warn', className: 'button-link-warn' },
      // --- Variante: flat
      { variant: 'flat', color: 'primary', className: 'button-flat-primary' },
      {
        variant: 'flat',
        color: 'secondary',
        className: 'button-flat-secondary'
      },
      { variant: 'flat', color: 'success', className: 'button-flat-success' },
      { variant: 'flat', color: 'danger', className: 'button-flat-danger' },
      { variant: 'flat', color: 'info', className: 'button-flat-info' },
      { variant: 'flat', color: 'warn', className: 'button-flat-warn' },

      // --- Icon Button Padding
      {
        iconPosition: 'left',
        size: 'xxs',
        className: 'pl-1.5'
      },
      {
        iconPosition: 'left',
        size: 'xs',
        className: 'pl-2.5'
      },
      {
        iconPosition: 'left',
        size: 'sm',
        className: 'pl-3.5'
      },
      {
        iconPosition: 'left',
        size: 'md',
        className: 'pl-4'
      },
      {
        iconPosition: 'left',
        size: 'lg',
        className: 'pl-4'
      },
      {
        iconPosition: 'left',
        size: 'xl',
        className: 'pl-5'
      },
      {
        iconPosition: 'right',
        size: 'xxs',
        className: 'pr-1.5'
      },
      {
        iconPosition: 'right',
        size: 'xs',
        className: 'pr-2.5'
      },
      {
        iconPosition: 'right',
        size: 'sm',
        className: 'pr-3.5'
      },
      {
        iconPosition: 'right',
        size: 'md',
        className: 'pr-4'
      },
      {
        iconPosition: 'right',
        size: 'lg',
        className: 'pr-4'
      },
      {
        iconPosition: 'right',
        size: 'xl',
        className: 'pr-5'
      }
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'primary',
      size: 'md'
    }
  }
)
