import {encodeUrlParameters} from "../helpers/urlHelpers"
import {mapVenuesFromApiResponse} from "./venuesService"

/**
 * Fetch a json from the application server API.
 *
 * @param endpoint
 * @param parameters
 * @returns {Promise<any>}
 */
export const requestApi = (endpoint, parameters = {}) => {
  let uri = `/api/${endpoint}`

  if (parameters && Object.keys(parameters).length > 0) {
    uri += `?${encodeUrlParameters(parameters)}`
  }

  let response

  return fetch(uri)
    .then(_response => {
      response = _response

      return response.json();
    })
    .then(body => {
      if (response.status !== 200) {
        throw Error(body.message);
      }

      return body
    })
}

/**
 * Filter parameters that do not contain any values.
 *
 * @param parameters
 * @returns {{}}
 */
const filterEmptyParameters = (parameters) => {
  return Object.keys(parameters).reduce((filteredParameters, key) => {
    const value = parameters[key]

    if (value === "" || value === null || typeof value === "undefined") {
      return filteredParameters
    }

    filteredParameters[key] = value
    return filteredParameters
  }, {})
}

/**
 * Request the venues from the application server API.
 *
 * @param parameters
 * @returns {Promise<{venues: *, bounds: *}>}
 */
export const requestVenuesFromApi = (parameters = {}) => {
  return requestApi("get-venues", filterEmptyParameters(parameters))
    .then(response => {
      return {
        venues: mapVenuesFromApiResponse(response.response),
        bounds: response.response.suggestedBounds
      }
    })
}