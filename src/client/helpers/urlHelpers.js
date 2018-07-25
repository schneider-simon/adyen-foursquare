export const encodeUrlParameters = (parameters) => {
  return Object.entries(parameters).map(([key, val]) => `${key}=${val}`).join('&');
}