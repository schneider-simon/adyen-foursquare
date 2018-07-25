const express = require('express');
const fourSquareApi = require('./services/fourSquareApi')
const {respondWithError} = require('./services/errorHandling')
const config = require("./config")

const app = express();

app.get('/api/hello', (req, res) => {
  res.send({express: 'Hello FiveCircle API.'});
});

app.get("/api/get-venues", (req, res) => {
  fourSquareApi.getVenues(req.query, {})
    .then(venuesResponse => {
      res.json(venuesResponse)
    })
    .catch(error => respondWithError(res, error.message))
})

app.listen(config.SERVER.PORT, () => console.log(`FiveCircle API listening on port ${config.SERVER.PORT}`));