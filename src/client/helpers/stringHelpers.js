/**
 * Capitalize the first letter of a string.
 * @param string
 * @returns {string}
 */
export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}