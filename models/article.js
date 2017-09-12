var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Article = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  comment: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }]
});

var Article = mongoose.model("Article", Article);

//export model
module.exports = Article;
