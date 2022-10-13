const mongoose = require('mongoose');

const products = new mongoose.Schema({
	id:{
        type:Number,
    }
});

module.exports = mongoose.model('bproduct', products);
