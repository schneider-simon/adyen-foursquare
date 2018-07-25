import {encodeUrlParameters} from "../helpers/urlHelpers"
import {getVenuesFromApiResponse} from "./venuesService"

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

export const requestVenuesFromApi = (parameters = {}) => {
  return requestApi("get-venues", filterEmptyParameters(parameters))
    .then(response => {
      return {
        venues: getVenuesFromApiResponse(response.response),
        bounds: response.response.suggestedBounds
      }
    })
}