/**
 * Converts JWT exp in days.
 * @param exp - The pixel value to convert.
 * @return Converted exp in days.
 */

export const jwtExpirationDateConverter = (exp: number): number =>
  (exp - Math.floor(Date.now() / 1000)) / 86400
