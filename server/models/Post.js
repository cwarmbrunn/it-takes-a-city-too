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
    locationName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    secondary: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
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

postSchema.virtual('fullAddress').get(function() {
  return `${this.city}, ${this.state} ${this.zipCode}`;
});

const Post = model("Post", postSchema);

module.exports = Post;
