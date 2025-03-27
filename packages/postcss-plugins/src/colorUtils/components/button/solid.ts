export const solid = {
  light: (color: string) => [
    { prop: '--btn-bg', value: `var(--color-${color}-600)` },
    { prop: '--btn-bg-hover', value: `var(--color-${color}-700)` },
    { prop: '--btn-bg-active', value: `var(--color-${color}-800)` },
    { prop: '--btn-border-focus', value: `var(--color-${color}-700)` },
    { prop: '--btn-bg-disabled', value: `var(--color-${color}-300)` },
    { prop: 'background-color', value: 'var(--btn-bg)' },
    {
      selector: '&[data-hover=true]',
      nodes: [{ prop: 'background-color', value: 'var(--btn-bg-hover)' }]
    },
    {
      selector: '&[data-active=true]',
      nodes: [{ prop: 'background-color', value: 'var(--btn-bg-active)' }]
    },
    {
      selector: '&[data-focus=true]',
      nodes: [{ prop: 'outline-color', value: 'var(--btn-border-focus)' }]
    },
    {
      selector: '&[data-disabled=true]',
      nodes: [{ prop: 'background-color', value: 'var(--btn-bg-disabled)' }]
    }
  ],
  dark: (color: string) => [
    { prop: '--btn-bg', value: `var(--color-${color}-400)` },
    { prop: '--btn-bg-hover', value: `var(--color-${color}-500)` },
    { prop: '--btn-bg-active', value: `var(--color-${color}-600)` },
    { prop: '--btn-border-focus', value: `var(--color-${color}-500)` },
    { prop: '--btn-bg-disabled', value: `var(--color-${color}-800)` },
    { prop: 'background-color', value: 'var(--btn-bg)' },
    {
      selector: '&[data-hover=true]',
      nodes: [{ prop: 'background-color', value: 'var(--btn-bg-hover)' }]
    },
    {
      selector: '&[data-active=true]',
      nodes: [{ prop: 'background-color', value: 'var(--btn-bg-active)' }]
    },
    {
      selector: '&[data-focus=true]',
      nodes: [{ prop: 'outline-color', value: 'var(--btn-border-focus)' }]
    },
    {
      selector: '&[data-disabled=true]',
      nodes: [{ prop: 'background-color', value: 'var(--btn-bg-disabled)' }]
    }
  ]
}
