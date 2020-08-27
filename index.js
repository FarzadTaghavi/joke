const express = require('express')

const app = express()

const port = 3000;

const page = `<html>
    <title>Farzad Taghavi</title>
    <h1>Why do comedians love !false?</h1>
    <p>It's funny because it's true.
    </p>
    </html>`

app.get('/', function (req,res) {
    res.send(page)
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
  })