import postcss from 'postcss'
import { describe, it, expect } from 'vitest'
import colorUtils from './colorUtils'
import cssnano from 'cssnano'

describe('colorUtils', () => {
  it('transforms @button-variants solid-(blue) correctly', async () => {
    const inputCSS = '@button-variants solid-(blue)'
    const result = await postcss([colorUtils, cssnano()]).process(inputCSS, {
      from: undefined
    })
    const outputCSS = result.css

    expect(outputCSS).toContain('.button-solid-blue')
    expect(outputCSS).toContain('--btn-bg:var(--color-blue-600);')
    expect(outputCSS).toContain('background-color:var(--btn-bg);')
    expect(outputCSS).toContain('&[data-hover=true]')
    expect(outputCSS).toContain('&[data-active=true]')
    expect(outputCSS).toContain('&[data-focus=true]')
    expect(outputCSS).toContain('&[data-disabled=true]')
    expect(outputCSS).toContain('&:where([data-theme=dark]')
    expect(outputCSS).toContain(
      '&:where([data-theme=dark],[data-theme=dark] *)'
    )
    expect(outputCSS).toContain('&:where(.dark,.dark *)')
  })
  it('transforms @button-variants outline-(red) correctly', async () => {
    const inputCSS = '@button-variants outline-(red)'
    const result = await postcss([colorUtils, cssnano()]).process(inputCSS, {
      from: undefined
    })
    const outputCSS = result.css

    expect(outputCSS).toContain('.button-outline-red')
    expect(outputCSS).toContain('--btn-border:var(--color-red-600);')
    expect(outputCSS).toContain('border-color:var(--btn-border);')

    expect(outputCSS).toContain('&[data-hover=true]')
    expect(outputCSS).toContain('&[data-active=true]')
    expect(outputCSS).toContain('&[data-focus=true]')
    expect(outputCSS).toContain('&[data-disabled=true]')
    expect(outputCSS).toContain('&:where([data-theme=dark]')
    expect(outputCSS).toContain(
      '&:where([data-theme=dark],[data-theme=dark] *)'
    )
    expect(outputCSS).toContain('&:where(.dark,.dark *)')
  })
})
