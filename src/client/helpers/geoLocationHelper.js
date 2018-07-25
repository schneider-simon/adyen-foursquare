/**
 * Check if the browser can use geo location.
 *
 * @returns {boolean}
 */
export const canUseGeoLocation = () => {
  return typeof navigator.geolocation === "object"
}