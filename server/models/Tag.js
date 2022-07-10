const { Schema } = require("mongoose");
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

module.exports = tagSchema;
