const express = require('express')
const fetch = require("node-fetch")

const port = 4002

const app = express()


app.get('/', function (req, res) {
  fetch('http://localhost:4000')
    .then(res => res.json())
    .then(json => console.log(json));
})


app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
