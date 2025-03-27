export const link = {
  light: (color: string) => [
    { prop: '--btn-text', value: `var(--color-${color}-600)` },
    { prop: '--btn-text-hover', value: `var(--color-${color}-700)` },
    { prop: '--btn-text-active', value: `var(--color-${color}-800)` },
    { prop: '--btn-text-focus', value: `var(--color-${color}-700)` },
    { prop: '--btn-text-disabled', value: `var(--color-${color}-300)` },
    { prop: 'color', value: 'var(--btn-text)' },
    {
      selector: '&[data-hover=true]',
      nodes: [{ prop: 'color', value: 'var(--btn-text-hover)' }]
    },
    {
      selector: '&[data-active=true]',
      nodes: [{ prop: 'color', value: 'var(--btn-text-active)' }]
    },
    {
      selector: '&[data-focus=true]',
      nodes: [{ prop: 'outline-color', value: 'var(--btn-text-focus)' }]
    },
    {
      selector: '&[data-disabled=true]',
      nodes: [{ prop: 'color', value: 'var(--btn-text-disabled)' }]
    }
  ],
  dark: (color: string) => [
    { prop: '--btn-text', value: `var(--color-${color}-400)` },
    { prop: '--btn-text-hover', value: `var(--color-${color}-500)` },
    { prop: '--btn-text-active', value: `var(--color-${color}-600)` },
    { prop: '--btn-text-focus', value: `var(--color-${color}-500)` },
    { prop: '--btn-text-disabled', value: `var(--color-${color}-800)` },
    { prop: 'color', value: 'var(--btn-text)' },
    {
      selector: '&[data-hover=true]',
      nodes: [{ prop: 'color', value: 'var(--btn-text-hover)' }]
    },
    {
      selector: '&[data-active=true]',
      nodes: [{ prop: 'color', value: 'var(--btn-text-active)' }]
    },
    {
      selector: '&[data-focus=true]',
      nodes: [{ prop: 'outline-color', value: 'var(--btn-text-focus)' }]
    },
    {
      selector: '&[data-disabled=true]',
      nodes: [{ prop: 'color', value: 'var(--btn-text-disabled)' }]
    }
  ]
}
