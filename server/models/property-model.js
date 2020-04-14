const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Property = new Schema({
	type: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
    },
	refNumber: {
		type: Number,
		required: true
	},
	noOfBedrooms: {
		type: Number,
		required: true
    },
	description: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('property', Property);