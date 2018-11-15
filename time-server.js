const express = require('express')
const port = 4000
const app = express()
const moment = require('moment')

app.get('/', (req, res) => {
    const date = new Date()
    const formattedDate = moment(date).format('HH:mm:ss');
    res
    .header({
        'Content-Type': 'application/json',
      })
    .json(formattedDate)
})


app.listen(port, () => {
    console.log(`Listening on ${port}`)
})
