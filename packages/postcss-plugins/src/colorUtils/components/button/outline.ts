export const outline = {
  light: (color: string) => [
    { prop: '--btn-text', value: `var(--color-${color}-600)` },
    { prop: '--btn-border', value: `var(--color-${color}-600)` },
    { prop: '--btn-border-hover', value: `var(--color-${color}-700)` },
    { prop: '--btn-border-active', value: `var(--color-${color}-800)` },
    { prop: '--btn-border-focus', value: `var(--color-${color}-700)` },
    { prop: '--btn-border-disabled', value: `var(--color-${color}-300)` },
    { prop: 'color', value: 'var(--btn-text)' },
    { prop: 'border-color', value: 'var(--btn-border)' },
    {
      selector: '&[data-hover=true]',
      nodes: [{ prop: 'border-color', value: 'var(--btn-border-hover)' }]
    },
    {
      selector: '&[data-active=true]',
      nodes: [{ prop: 'border-color', value: 'var(--btn-border-active)' }]
    },
    {
      selector: '&[data-focus=true]',
      nodes: [{ prop: 'outline-color', value: 'var(--btn-border-focus)' }]
    },
    {
      selector: '&[data-disabled=true]',
      nodes: [{ prop: 'border-color', value: 'var(--btn-border-disabled)' }]
    }
  ],
  dark: (color: string) => [
    { prop: '--btn-text', value: `var(--color-${color}-400)` },
    { prop: '--btn-border', value: `var(--color-${color}-400)` },
    { prop: '--btn-border-hover', value: `var(--color-${color}-500)` },
    { prop: '--btn-border-active', value: `var(--color-${color}-600)` },
    { prop: '--btn-border-focus', value: `var(--color-${color}-500)` },
    { prop: '--btn-border-disabled', value: `var(--color-${color}-800)` },
    { prop: 'color', value: 'var(--btn-text)' },
    { prop: 'border-color', value: 'var(--btn-border)' },
    {
      selector: '&[data-hover=true]',
      nodes: [{ prop: 'border-color', value: 'var(--btn-border-hover)' }]
    },
    {
      selector: '&[data-active=true]',
      nodes: [{ prop: 'border-color', value: 'var(--btn-border-active)' }]
    },
    {
      selector: '&[data-focus=true]',
      nodes: [{ prop: 'outline-color', value: 'var(--btn-border-focus)' }]
    },
    {
      selector: '&[data-disabled=true]',
      nodes: [{ prop: 'border-color', value: 'var(--btn-border-disabled)' }]
    }
  ]
}
