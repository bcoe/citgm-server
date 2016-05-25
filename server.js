require('dotenv').config()

var bodyParser = require('body-parser')
var express = require('express')
var app = express()
var triggerBuild = require('./lib/trigger-build')

/* app.use(bodyParser.text({
  type: 'application/json'
}))
app.use(bodyParser.urlencoded({extended: false}))*/

app.post('/hook', function (req, res) {
  var body = JSON.parse(req.body)
  triggerBuild(body.name)
})

var port = process.env.PORT || 5555
var server = app.listen(port, function () {
  console.info('server listening on ', port)
})
