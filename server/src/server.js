var express = require('express')
var bodyParser = require('body-parser')
var butter = require('buttercms')('d4b9e81e5bd894cb24d7036a99de1c055cf867d9')
var mongoose = require('mongoose')
var config = require('./config/config')
mongoose.Promise = global.Promise

const app = express()

var posts = require('./routes/posts')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/posts', posts)

mongoose.connect(config.dbURL, config.dbOptions)
mongoose.connection
  .once('open', () => {
    console.log(`Mongoose - successful connection ...`)
    app.listen(process.env.PORT || config.port,
      () => console.log(`Server start on port ${config.port} ...`))
  })
  .on('error', error => console.warn(error))
