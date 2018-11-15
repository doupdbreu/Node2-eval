const express = require('express')
const port = 4000
const app = express()
const moment = require('moment')

app.get('/', (req, res) => {
    const date = new Date()
    const formattedDate = moment(date).format('h:mm:ss');
    res.send('il est : ' + formattedDate)
})


app.listen(port, () => {
    console.log(`Listening on ${port}`)
})