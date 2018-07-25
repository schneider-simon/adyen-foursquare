export const canUseGeoLocation = () => {
  return typeof navigator.geolocation === "object"
}