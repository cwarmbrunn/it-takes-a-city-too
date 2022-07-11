const { Schema, model } = require("mongoose");
const commentSchema = require("./Comment.js");
const dateFormat = require("../utils/dateFormat");

const postSchema = new Schema(
  {
    postText: {
      type: String,
      required: "You need to leave a description!",
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    tags: [ {
      type: String,
      enum: ["Shelter" , "Food", "Clothing", "Employment", "Legal"],
      required: true,
    } ],
    location: {
      type: String,
      Required: true,
    },
    comments: [commentSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

postSchema.virtual("commentCount").get(function () {
  return this.comments.length;
});

const Post = model("Post", postSchema);

module.exports = Post;
