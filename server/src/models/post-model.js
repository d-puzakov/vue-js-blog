var mongoose = require('mongoose')
var Schema = mongoose.Schema
var PostSchema = new Schema({
  title: {
    type: String,
    unique: true
  },
  description: {
    type: String
  }
})
var PostModel = mongoose.model('posts', PostSchema)
module.exports = PostModel
