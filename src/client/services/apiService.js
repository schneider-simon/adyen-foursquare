import {encodeUrlParameters} from "../helpers/urlHelpers"

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

      console.log("got api", body)
    })
}