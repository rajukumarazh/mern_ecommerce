const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const PORT = process.env.PORT;
const multer = require('multer');
app.use(cors());
app.use(bodyParser.json());
require('dotenv').config();
const Model = require('./model');
const soldItem = require('./productModel');
const allproduct = require('./allproduct');
const shortid = require('shortid');

const Razorpay = require('razorpay');
const crypto = require('crypto');
const { deleteOne } = require('./model');
const accessTokenSecret = 'youraccesstokensecret';
const path = require('path');
const uri =
	'mongodb+srv://raju:Ra%409058837496@crud.kjkyk5j.mongodb.net/Crud?retryWrites=true&w=majority';
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};
mongoose.connect(uri, options).then(() => {
	console.log('database connnected');
});
app.use('/static', express.static(path.join(__dirname, './client/build')));
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
	key_id: 'rzp_test_LUoWzQJZYjdLNB',
	key_secret: 'gAz9uhd7QvbNqLYP6DT3rHHn',
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
		const key_secret = 'gAz9uhd7QvbNqLYP6DT3rHHn';

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
///user related api's
app.get('/all_user', async (req, res) => {
	try {
		const data = await Model.find();
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});
app.post('/_singleuser', async (req, res) => {
	try {
		console.log('das', req.body.currentUser);
		Model.deleteOne(req.body.currentUser, (err, results) => {
			console.log('deletedResult', results);
			res.json(results);
		});
		// res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});
app.post('/del_product', async (req, res) => {
	try {
		console.log('das', req.body.currenProdut);
		allproduct.deleteOne(req.body.currenProdut, (err, results) => {
			console.log('deletedResult', results);
			res.json(results);
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});
// const imageUploadPath = 'D:/ReactProject/rCom/rCom/public';
const imageUploadPath = 'D:/raju_kumar/shop1/Server/client/public';

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, imageUploadPath);
	},
	filename: function (req, file, cb) {
		cb(null, `${file.originalname}`);
	},
});
const imageUpload = multer({ storage: storage });
/// image upload api for product
app.post('/image-upload', imageUpload.array('my-image-file'), (req, res) => {
	// console.log('Axios POST body: ', req.files[0].originalname);
	let ur = `./${req.files[0].originalname}`;
	res.send(ur);
});
/// update product
app.post('/update_product', async (req, res) => {
	console.log('he', req.body);
	const options = { new: true };
	let id = req.body.id;
	let updatedData = req.body.for;

	const result = await allproduct.findByIdAndUpdate(id, updatedData, options);
	res.send(result);
});
app.post('/addProduct', (req, res) => {
	// res.send("product added")

	console.log('res', req.body);
	const data = new allproduct({
		name: req.body.for.name,
		price: req.body.for.price,
		type: req.body.for.type,
		description: req.body.for.description,
		image: req.body.for.image,
	});
	const dataToSave = data.save();
	res.status(200).json(dataToSave);
});
//deploying
app.get('*', function (_, res) {
	res.sendFile(
		express.static(
			path.join(__dirname + './client/build/index.html'),
			function (err) {
				res.status(500).send(err);
			}
		)
	);
});
app.listen(8000, () =>
	console.log(`API is running on http://localhost:${port}`)
);
