require('dotenv').config()

var bodyParser = require('body-parser')
var express = require('express')
var app = express()

app.use(bodyParser.text({
  type: 'application/json'
}))
app.use(bodyParser.urlencoded({extended: false}))

app.post('/webhook', function (req, res) {
  var body = JSON.parse(req.body)

  console.log(req.body)
})

var port = process.env.PORT || 5555
var server = app.listen(port, function () {
  console.info('server listening on ', port)
})
