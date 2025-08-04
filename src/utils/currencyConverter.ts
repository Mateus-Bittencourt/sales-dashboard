/**
 * Converts to BRL currency format
 * @param value - The pixel value to convert.
 * @return currency format, ex: value: 4.3  return R$ 4,30
 */

export const currencyConverter = (value: number): string =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
