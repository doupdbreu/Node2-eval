const express = require('express')
const fs = require('fs-extra')
const reverse = require('reverse-string')

const port = 4001

const app = express()

const jsonMiddleware = express.json()
app.use(jsonMiddleware)


app.get('/secret', function (req, res) {
  fs.readFile('./data/secret.txt','utf8', function (err, data) {
    if (err) throw err;
    var _content = reverse(data)
    res.header({
        'Content-Type': 'application/json',
      })
      .json({secret: _content})
  })
})

app.post('/secret', (req, res) => {
  console.log(req.body.word)
  var _req_word = reverse(req.body.word.toString())
  fs.writeFile("./data/secret.txt", _req_word , function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The file was saved!");

  });
res.send("zob")
})



app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
