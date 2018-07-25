/**
 * Check if the value of a variable is empty.
 *
 * @param value
 * @returns {boolean}
 */
export const isEmpty = (value) => {
  return typeof value === "undefined" || value === null || value === ""
}