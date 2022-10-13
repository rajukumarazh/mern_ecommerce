const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const PORT = process.env.PORT;
app.use(cors());
app.use(bodyParser.json());
require('dotenv').config();
const Model = require('./model');
const soldItem = require('./productModel');
const allproduct = require('./allproduct');
const shortid = require('shortid');
const path = require('path');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const accessTokenSecret = 'youraccesstokensecret';

const uri =
	'mongodb+srv://raju:Ra%409058837496@crud.kjkyk5j.mongodb.net/Crud?retryWrites=true&w=majority';
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};
mongoose.connect(uri, options).then(() => {
	console.log('database connnected');
});
app.post('/login', async (req, res) => {
	// Read username and password from request body
	const { email, password } = req.body;

	// Filter user from the users array by username and password
	const port = process.env.PORT;
	const data = await Model.find();
	const user = data.filter((u) => {
		if (u.email == email && u.password == password) {
			return u;
		}
	});
	console.log('user', user);
	// Generate an access token
	const accessToken = jwt.sign(
		{ username: user[0]?.email, paasword: user[0]?.password },
		accessTokenSecret
	);
	user.length > 0 && res.json({ token: accessToken, user: user });

	// res.json({ status: 'not generated Token' });

	console.log('token', accessToken);

	// res.json(data);

	// if (user) {
	// 	// Generate an access token
	// 	const accessToken = jwt.sign(
	// 		{ username: user.email, role: user.role },
	// 		accessTokenSecret
	// 	);

	// 	res.json({
	// 		accessToken,
	// 	});
	// } else {
	// 	res.send('Username or password incorrect');
	// }
});
const port = process.env.PORT || 8000;
app.post('/create_user', async (req, res) => {
	console.log('res', req.body);
	const data = new Model({
		email: req.body.email,
		password: req.body.password,
		confirm_password: req.body.confirm_password,
	});
	const dataToSave = data.save();
	res.status(200).json(dataToSave);

	// res.status(400).json({ message: error.message });
});

//Api for payments

var razorpay = new Razorpay({
	key_id: 'rzp_test_YCMy1DEoOhuNxe',
	key_secret: '3cQpIGhWXlW80icU36wQFzsW',
});

app.get('/logo.svg', (req, res) => {
	res.sendFile(path.join(__dirname, 'logo.svg'));
});

app.post('/verification', async (req, res) => {
	console.log('req', req.body);
	try {
		const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
			req.body;

		// Pass yours key_secret here
		const key_secret = '3cQpIGhWXlW80icU36wQFzsW';

		// Creating hmac object
		let hmac = crypto.createHmac('sha256', key_secret);

		// Passing the data to be hashed
		hmac.update(razorpay_order_id + '|' + razorpay_payment_id);

		// Creating the hmac in the required format
		const generated_signature = hmac.digest('hex');
		if (razorpay_signature === generated_signature) {
			res.json({ success: true, message: 'Payment has been verified' });
		} else {
			console.log('sign failed', razorpay_order_id);
			res.json({ success: false, message: 'Payment verification failed' });
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

app.post('/razorpay', async (req, res) => {
	console.log('dddd', req.body);
	let { data } = req.body;
	var amount = data?.reduce(function (sum, number) {
		const updatedSum = sum + number.price;
		return updatedSum;
	}, 0);

	console.log('total amount', data, amount);
	const payment_capture = 1;
	// const amount = 1000;
	const currency = 'INR';

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture,
	};

	try {
		const response = await razorpay.orders.create(options);
		console.log(response);
		res.status(200).json({
			id: response.id,
			currency: response.currency,
			amount: amount,
		});
	} catch (err) {
		console.log(err);
	}
});
// Api's for Database connection

app.get('/getAll', async (req, res) => {
	try {
		const data = await Model.find();
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});
app.post('/sold_item', async (req, res) => {
	let finaldata = await req.body.data.map((c) => ({
		...c,
		// user_id: req.body.user_id.email,
		user_id: req.body.user_id._id,
		total_price: c.price * c.qty,
	}));
	console.log('resorder', finaldata);

	soldItem
		.insertMany(finaldata)
		.then((value) => {
			console.log('Saved Successfully');
		})
		.catch((error) => {
			console.log(error);
		});
});
app.get('/all_product', async (req, res) => {
	try {
		const data = await allproduct.find();
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});
app.listen(8000, () =>
	console.log(`API is running on http://localhost:${port}`)
);
