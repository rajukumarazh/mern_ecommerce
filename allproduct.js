const mongoose = require('mongoose');

const products = new mongoose.Schema({
	id: {
		type: Number,
	},
	name: {
		type: String,
	},
	description: {
		type: String,
	},
	price: {
		type: Number,
	},
	type: {
		type: String,
	},
	image: {
		type: String,
	},
});

module.exports = mongoose.model('bproduct', products);
