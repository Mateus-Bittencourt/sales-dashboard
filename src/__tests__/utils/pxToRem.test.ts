import { pxToRem } from '@utils'

describe('pxToRem', () => {
  it('should convert pixels to rem correctly with positive values', () => {
    expect(pxToRem(16)).toBe('1rem')
    expect(pxToRem(32)).toBe('2rem')
    expect(pxToRem(8)).toBe('0.5rem')
  })

  it('should convert pixels to rem correctly with negative values', () => {
    expect(pxToRem(-16)).toBe('-1rem')
    expect(pxToRem(-32)).toBe('-2rem')
    expect(pxToRem(-8)).toBe('-0.5rem')
  })

  it('should convert pixels to rem correctly with zero', () => {
    expect(pxToRem(0)).toBe('0rem')
  })
})
