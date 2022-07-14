const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const tagSchema = new Schema(
  {
    tagBody: {
      type: String,
      required: true,
      maxlength: 40,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
const Tag = model("Tag", tagSchema);
module.exports = Tag;
