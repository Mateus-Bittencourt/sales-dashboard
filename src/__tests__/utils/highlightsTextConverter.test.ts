import { highlightsTextConverter } from '@utils'

describe('highlightsTextConverter', () => {
  it('should return the correct text for "alert"', () => {
    expect(highlightsTextConverter('alert')).toBe(
      '* Goal far from being reached'
    )
  })

  it('should return the correct text for "success"', () => {
    expect(highlightsTextConverter('success')).toBe('* Goal reached')
  })

  it('should return the correct text for "warning"', () => {
    expect(highlightsTextConverter('warning')).toBe('* Goal almost reached')
  })

  it('should return the correct text for "Clique aqui para gerenciar seus leads"', () => {
    expect(
      highlightsTextConverter('Clique aqui para gerenciar seus leads')
    ).toBe('Click here to manage your leads')
  })

  it('should return the correct text for "Atualizado em ..."', () => {
    const result = highlightsTextConverter('Atualizado em 2024-07-01')
    expect(result).toContain('Updated at')
  })

  it('should return an empty string for unrecognized text', () => {
    expect(highlightsTextConverter('unknown')).toBe('')
  })
})
