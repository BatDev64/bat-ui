export const ghost = {
  light: (color: string) => [
    { prop: '--btn-text', value: `var(--color-${color}-600)` },
    { prop: '--btn-bg-hover', value: `var(--color-${color}-100)` },
    { prop: '--btn-bg-active', value: `var(--color-${color}-200)` },
    { prop: '--btn-border-focus', value: `var(--color-${color}-600)` },
    { prop: '--btn-text-disabled', value: `var(--color-${color}-300)` },
    { prop: 'color', value: 'var(--btn-text)' },
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
      nodes: [{ prop: 'color', value: 'var(--btn-text-disabled)' }]
    }
  ],
  dark: (color: string) => [
    { prop: '--btn-text', value: `var(--color-${color}-400)` },
    {
      prop: '--btn-bg-hover',
      value: `--alpha(var(--color-${color}-900) / 30%)`
    },
    {
      prop: '--btn-bg-active',
      value: `--alpha(var(--color-${color}-950) / 50%)`
    },
    { prop: '--btn-border-focus', value: `var(--color-${color}-500)` },
    {
      prop: '--btn-text-disabled',
      value: `--alpha(var(--color-${color}-950) / 95%)`
    },
    { prop: 'color', value: 'var(--btn-text)' },
    {
      selector: '&[data-hover=true]',
      nodes: [
        {
          prop: 'background-color',
          value: 'var(--btn-bg-hover)'
        }
      ]
    },
    {
      selector: '&[data-active=true]',
      nodes: [
        {
          prop: 'background-color',
          value: 'var(--btn-bg-active)'
        }
      ]
    },
    {
      selector: '&[data-focus=true]',
      nodes: [{ prop: 'outline-color', value: 'var(--btn-border-focus)' }]
    },
    {
      selector: '&[data-disabled=true]',
      nodes: [{ prop: 'color', value: 'var(--btn-text-disabled)' }]
    }
  ]
}
