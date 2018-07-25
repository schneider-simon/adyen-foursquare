const express = require('express');
const path = require("path")
const fourSquareApi = require('./services/fourSquareApi')
const {respondWithError} = require('./services/errorHandling')
const config = require("./config")

const app = express();

const root = path.join(__dirname, '..', '..')

app.use(express.static(path.join(root, 'build')))

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

app.get('/api/*', (req, res) => {
  res.send("Unkown API endpoint.")
})

app.get('/*', (req, res) => {
  res.sendFile(root + '/build/index.html');
})

app.listen(config.SERVER.PORT, () => console.log(`FiveCircle API listening on port ${config.SERVER.PORT}`));