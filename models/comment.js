var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Comment = new Schema({
  name: {
    type: String
  },
  body: {
    type: String,
    required: true
  }
});

var Comment = mongoose.model("Comment", Comment);

module.exports = Comment;
