const express = require('express')
const http = require('http')
const popsicle = require('popsicle')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/yeg-weather', (req, res) => {
  popsicle.get('https://api.darksky.net/forecast/7c74b6e1c02c0be223a99764baba6549/53.5555501,-113.7741251?units=ca')
    .use(popsicle.plugins.parse(['json']))
    .then(httpRes => {
      res.json(httpRes.body)
    })
})

var chats = []

app.post('/chat', (req, res, next) => {
  chats.push(req.body.chat)
  next()
})

app.use('/chat', (req, res) => {
  res.json(chats)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
