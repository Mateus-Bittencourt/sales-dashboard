/**
 * Converts pixel values to rem.
 * @param pixels - The pixel value to convert.
 * @return The equivalent rem value.
 */

export const pxToRem = (pixels: number): string => `${pixels / 16}rem`
