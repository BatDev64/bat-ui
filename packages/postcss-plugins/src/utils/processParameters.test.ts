import { describe, it, expect, expectTypeOf } from 'vitest'
import { processParameters } from './processParameters'
import type { Variant } from '../types/types'

describe('processParameters.test', () => {
  it('the param must be a string ', () => {
    expectTypeOf(processParameters).parameter(0).toBeString()
  })
  it('should return an object', () => {
    const mock = 'solid-(blue)'
    const result = processParameters(mock)

    expectTypeOf(result).toBeObject()
  })
  it('variant must be of type Variant', () => {
    const mock = 'solid-(blue)'
    const result = processParameters(mock)

    expectTypeOf(result.variant).toEqualTypeOf<Variant>()
  })
  it('should return variant solid', () => {
    const mock = 'solid-(blue)'
    const result = processParameters(mock)
    const mockResult = 'solid'

    expect(result.variant).toMatch(mockResult)
  })

  it('the color property must be an array', () => {
    const mock = 'solid-(blue)'
    const result = processParameters(mock)

    expectTypeOf(result.colors).toBeArray()
  })
  it('must return the colors of the parameter', () => {
    const mock = 'solid-(blue)'
    const result = processParameters(mock)
    const mockResult = ['blue']

    result.colors.forEach((el, i) => expect(el).toMatch(mockResult[i]))
  })
})
