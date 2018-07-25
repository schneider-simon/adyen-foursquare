const request = require('request');
const querystring = require('querystring')
const _ = require('lodash')
const {logger} = require("./logging")

const FOURSQUARE_CONFIG = require('../config').FOURSQUARE

const venuesParameterWhitelist = ["ll", "near", "radius", "section", "query", "offset"]

const getFourSquareJson = (endpoint, parameters = {}) => {
  parameters = Object.assign({
    client_id: FOURSQUARE_CONFIG.CLIENT_ID,
    client_secret: FOURSQUARE_CONFIG.CLIENT_SECRET,
    v: FOURSQUARE_CONFIG.API_VERSION
  }, parameters)

  const urlParameters = querystring.stringify(parameters)

  const url = `${FOURSQUARE_CONFIG.BASE_URL}/${endpoint}?${urlParameters}`

  return new Promise((resolve, reject) => {
    logger.info(`FourSquare request: ${url}`)
    request(url, (error, response, body) => {
      if (error) {
        reject(new Error(error))
        return
      }

      const content = JSON.parse(body)

      if (response.statusCode !== 200) {
        reject(new Error(content.meta.errorDetail))
        return
      }

      resolve({response, body, content})
    })
  })
}

const getVenues = (parameters = {}) => {
  const filteredParameters = _.pick(parameters, venuesParameterWhitelist)

  return getFourSquareJson("venues/explore", filteredParameters)
    .then(fourSquareResponse => {
      return fourSquareResponse.content
    })
}

module.exports = {
  getFourSquareJson,
  getVenues
}