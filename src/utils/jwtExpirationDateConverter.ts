/**
 * Converts JWT exp in days.
 * @param exp - The pixel value to convert.
 * @return Converted exp in days.
 */

export const jwtExpirationDateConverter = (exp: number): number => {
  const currentTime = Math.floor(Date.now() / 1000) // Current time in seconds
  const secondsUntilExpiration = exp - currentTime
  const secondsInOneDay = 60 * 60 * 24
  const daysUntilExpiration = Math.floor(
    secondsUntilExpiration / secondsInOneDay
  )
  return daysUntilExpiration
}

// export const jwtExpirationDateConverter = (exp: number): number =>
//   Math.floor((exp - Math.floor(Date.now() / 1000)) / 86400)
