const { Schema } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const Tag = new Schema(
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

module.exports = Tag;
