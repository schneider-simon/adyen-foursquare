const {logger} = require("./logging")

const respondWithError = (res, message, options = {title: "API error", status: 400}) => {
  res.status(options.status)
  res.json({message: message, title: options.title})
  logger.error(`API Error: ${message}`)
}

module.exports = {
  respondWithError
}