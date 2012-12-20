var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var getTags = function (tags) {
  return tags.join(',');
}

var setTags = function (tags) {
  return tags.split(',');
}

var CopySchema = new Schema({

});

mongoose.model("Copy", CopySchema);