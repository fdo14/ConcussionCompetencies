const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const CommentSchema = new Schema(
  {
    comments: Array,
    id: Number
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Comment", CommentSchema);
