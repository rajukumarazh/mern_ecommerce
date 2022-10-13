const express = require('express');
const mongoose = require('mongoose');
// const uri = `mongodb+srv://raju:Ra%409058837496@cluster0.uwtgdvq.mongodb.net/?retryWrites=true&w=majority`;
const uri =
	'mongodb+srv://raju:Ra%40905837496@crud.kjkyk5j.mongodb.net/?retryWrites=true&w=majority';
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};
mongoose.connect(uri, options).then(() => {
	console.log('database connnected');
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
	console.log('Connected successfully');
});
