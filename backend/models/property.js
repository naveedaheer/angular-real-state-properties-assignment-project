const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
  //boatModel: { type: String, required: true },
  type: { type: String },
  city: { type: String },
  price: { type: String },
  refNumber: { type: String },
  noOfBedrooms: { type: String },
  description: { type: String },
  image: {type: String}
});

module.exports = mongoose.model("Property", propertySchema);

