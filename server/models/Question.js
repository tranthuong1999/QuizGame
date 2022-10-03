const mongoose = require("mongoose");

const schema = mongoose.Schema({
  question: String,
  option: Array,
  answer: String,
});

module.exports = mongoose.model("Question", schema);
