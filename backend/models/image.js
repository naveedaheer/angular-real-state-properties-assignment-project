const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  country: { type: String },
  flag: { type: String },
  imageOne: { type: String },
  imageTwo: { type: String },
  imageThree: { type: String }
});

module.exports = mongoose.model("Image", imageSchema);
