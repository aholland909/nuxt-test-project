var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
// app.get('/', function (req, res) {
//   res.send('hello world test')
// })

app.get('/' , (req,res)=>res.redirect('https://nodejs.org'))

module.exports = {
    path: "/api/",
    handler: app
}