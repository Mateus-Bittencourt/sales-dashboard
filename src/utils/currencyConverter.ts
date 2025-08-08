/**
 * Converts to USD currency format
 * @param value - Value to be converted
 * @return Converted value in USD currency format
 */

export const currencyConverter = (value: number): string =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'USD',
  }).format(value)
