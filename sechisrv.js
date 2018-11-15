const express = require('express')
const fetch = require("node-fetch")

const port = 4002

const app = express()
var _log = []
const jsonMiddleware = express.json()
app.use(jsonMiddleware)


app.get('/', function (req, res) {
  var _time = ""
  var _secret_word = ""

  urls = ['http://localhost:4000','http://localhost:4001/secret']

  function _get_time_secret(urls){
    Promise.all(urls.map(url =>
        fetch(url).then(resp => resp.json())
    )).then(result => {
        var _time = result.slice(0,1)
        var _word = result.slice(1,2)
        var _json_time_secret = ""
        res.json({time: _time , secret: _word})
        console.log(_json_time_secret)
    })
  }
  setInterval(_get_time_secret(urls),500)
})


app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
