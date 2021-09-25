const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    doc: {
      type: Number,
    },
    name: {
      type: String,
    },
    lastname: {
      type: String
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("user", userSchema);