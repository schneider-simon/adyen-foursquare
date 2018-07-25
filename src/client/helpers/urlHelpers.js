/**
 * Encode parameters object to string for HTTP GET requests.
 *
 * @param parameters
 * @returns {string}
 */
export const encodeUrlParameters = (parameters) => {
  return Object.entries(parameters).map(([key, val]) => `${key}=${val}`).join('&');
}