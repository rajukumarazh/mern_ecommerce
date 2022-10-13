const mongoose = require('mongoose');

const alredySold = new mongoose.Schema({
	name: {
		type: String,
	},
	product_id: {
		type: String,
	},
	price: {
		type: Number,
	},
	qty: {
		type: Number,
	},
	paid: {
		type: String,
	},
	user_id: {
		type: String,
	},
	total_price: {
		type: Number,
	},
});

module.exports = mongoose.model('ordered', alredySold);
