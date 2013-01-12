var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

// --  TAGS -- //
var TagSchema = new Schema({
  "name": String
});

mongoose.model("Tag", TagSchema);


// --  COMMENTS -- //
var CommentSchema = new Schema({
  "body": String,
  "author": String,
  "creationDate": { "type": Date, "default": Date.now }
});

mongoose.model("Comment", CommentSchema);


// --  COPY -- //
var CopySchema = new Schema({
  "body": String,
  "author": String,
  "creationDate": { "type": Date, "default": Date.now },
  "tags": [ObjectId],
  "comments": [Comment]
});

mongoose.model("Copy", CopySchema);