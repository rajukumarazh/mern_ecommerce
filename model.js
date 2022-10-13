const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
	email: {
		required: true,
		type: String,
	},
	password: {
		required: true,
		type: Number,
	},
	confirm_password: {
		required: true,
		type: Number,
	},
});

module.exports = mongoose.model('Data', dataSchema);
