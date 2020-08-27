const express = require('express')

const app = express()

const page = `<html>
    <title>Farzad Taghavi</title>
    <h1>Why do comedians love !false?</h1>
    <p>It's funny because it's true.
    </p>
    </html>`

app.get('/', function (req,res) {
    res.send(page)
})

// use $PORT if it is defined
// use 3000 if $PORT is not defined
const port = process.env.PORT || 3000

// start server
app.listen(
  port, // might be process.env.PORT or 3000
  () => console.log(`Listening on :${port}`)
)