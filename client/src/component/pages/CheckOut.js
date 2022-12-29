import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import PaymentSuccess from './PaymentSuccess';
import { Navigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
	resetCartOnPayment,
	payment_Success,
} from '../../redux/actions/cartActions';
import WebFooter from './WebFooter';
import NavBar from './NavBar';

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script');
		script.src = src;
		script.onload = () => {
			resolve(true);
		};
		script.onerror = () => {
			resolve(false);
		};
		document.body.appendChild(script);
	});
}

function CheckOut(props) {
	let amount = useSelector((state) => state.cart.payableAmount);
	const cart = useSelector((state) => {
		return state.cart;
	});
	console.log('cart', cart);
	let amt = JSON.stringify(amount);

	const dispatch = useDispatch(resetCartOnPayment, payment_Success);
	const [paid, setPaid] = useState();
	async function showRazorpay() {
		const res = await loadScript(
			'https://checkout.razorpay.com/v1/checkout.js'
		);

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?');
			return;
		}
		buyedItem({ user_id: profileState, data: cart.cart });
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				data: amount,
			}),
		};
		const data = await fetch(
			'http://localhost:8000/razorpay',
			requestOptions
		).then((response) => {
			return response.json();
		});

		// const data = await fetch('http://localhost:8000/razorpay', {
		// 	method: 'POST',
		// 	body: JSON.stringify({
		// 		data: amount[0].price,
		// 	}),
		// }).then((t) => t.json());
		// let data = await axios
		// 	.post('http://localhost:8000/razorpay', amount)
		// 	.then((res) => res);
		console.log('data', data);
		const options = {
			key: 'rzp_test_LUoWzQJZYjdLNB',
			currency: data.currency,
			amount: data.data?.amount?.toString(),
			order_id: data.id,
			name: 'rCommerce',
			description: 'Hello Folk!! Avoid  to be Click Refresh button/icon',
			// image: 'http://localhost:1337/logo.svg',
			handler: async function (response) {
				// console.log('dkfkdfkdfdfd', response);
				const result = await axios.post(
					'http://localhost:8000/verification',
					response
				);
				console.log('rsponse', result.data);
				if (result.data) {
					dispatch(payment_Success(result.data.success));
				}
			},
			prefill: {
				name: 'raju Kumar',
				email: 'raju.kumar@palinfocom.com',
				phone_number: '9899999999',
			},
		};
		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	}
	console.log('amount', amount);
	// if (cart?.paid === true) {
	// 	dispatch(resetCartOnPayment());
	// }
	let profileState = useSelector((state) => state.Auth.currentUser);
	console.log('profileState', profileState);
	console.log('datasPaid', paid);
	async function buyedItem(stock) {
		return fetch('http://localhost:8000/sold_item', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(stock),
		}).then((result) => result.json());
	}

	// buyedItem(cart.cart)

	return (
		<div>
			<NavBar />
			<div className=" flex justify start p-3">
				<div>
					<h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
						Here is some reason's for why we want online payment
					</h2>
					<ul className="space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400">
						<li className="flex items-center">
							<svg
								className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								></path>
							</svg>
							For maintaining social distancing due to Covid 19
						</li>
						<li className="flex items-center">
							<svg
								className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								></path>
							</svg>
							some Area are in present day facing lockdown due to Covid!
						</li>
						<li className="flex items-center">
							<svg
								className="w-4 h-4 mr-1.5 text-gray-400 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
									clip-rule="evenodd"
								></path>
							</svg>
							We offer some additional offer for online payment user
						</li>
						<li className="flex items-center">
							<svg
								className="w-4 h-4 mr-1.5 text-gray-400 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
									clip-rule="evenodd"
								></path>
							</svg>
							If your cart contains product whoose total price crossed our
							decided criteria then we prowide some offer
						</li>
					</ul>
				</div>
			</div>
			<div className="flex justify-center mt-5 mb-5 ">
				<header className="App-header">
					<div class="max-w-xl rounded overflow-hidden shadow-lg">
						<img
							class="w-full"
							src="razorpay.jpg"
							alt="Sunset in the mountains"
						/>
						<div class="px-6 py-4">
							<p class="text-gray-700 text-base"></p>
						</div>
						<div class="px-6 pt-4 pb-2">
							<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
								Rules & Regulations
							</span>
							<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
								# EMI Makes life better
							</span>
							<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
								#winter
							</span>
						</div>
						<div className="flex justify-center gap-20 p-2">
							{' '}
							<button
								onClick={showRazorpay}
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
							>
								Pay Now
							</button>
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
								Pay Later
							</button>
						</div>
					</div>
				</header>
				{cart?.paid == true && <Navigate to="/PaymentSuccess" />}
				{/* {cart?.paid == true && } */}
				{/* {cart?.paid == true ? dispatch(resetCartOnPayment()) : ''} */}
			</div>
			{/* <WebFooter /> */}
		</div>
	);
}

export default CheckOut;

// import React, { useEffect } from "react";
// import axios from "axios";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// function loadScript(src) {
// 	return new Promise((resolve) => {
// 		const script = document.createElement("script");
// 		script.src = src;
// 		script.onload = () => {
// 			resolve(true);
// 		};
// 		script.onerror = () => {
// 			resolve(false);
// 		};
// 		document.body.appendChild(script);
// 	});
// }

// function CheckOut() {
// 	// const order = fetch("http://localhost:3001/order", {
// 	// 	method: "POST",
// 	// }).then((data) => data.json());
// 	// console.log(order);
// 	let navigate = useNavigate();
// 	const [paymentId, setPaymentId] = useState();

// 	// useEffect(() => {
// 	// 	// if (paymentId) {
// 	// 	// 	<Navigate to={"/"} />;
// 	// 	// }
// 	// }, [paymentId]);
// 	const payablePrice = useSelector((state) => {
// 		return state.cart.cart;
// 	});
// 	let complete;
// 	if (payablePrice !== undefined) {
// 		complete = payablePrice.map((ar) => ar.price);
// 	}
// 	const sum = complete.reduce(function (sum, number) {
// 		const updatedSum = sum + number;
// 		return updatedSum;
// 	}, 0);
// 	console.log("rs", sum);
// 	console.log("kkkk", payablePrice);
// 	console.log("raju", paymentId);

// 	async function displayRazorpay() {
// 		const res = await loadScript(
// 			"https://checkout.razorpay.com/v1/checkout.js",
// 		);

// 		if (!res) {
// 			alert("Razorpay SDK failed to load...");
// 			return;
// 		}
// 		var order = axios
// 			.post("http://localhost:8000/order")
// 			.then((res) => console.log("response", res));
// 		console.log("order", order);

// 		if (order.id !== undefined) {
// 			window.location.replace("/");
// 		}

// 		var options = {
// 			key: "rzp_test_kYqueGLbD5UyAE",
// 			amount: `${sum * 100}`,
// 			currency: "INR",
// 			name: "T-Shirt",
// 			description: "This is business!",
// 			order_id: order.id,
// 			handler: async function (response) {
// 				console.log("respnaw", response);
// 				const data = {
// 					orderCreationId: order.id,
// 					razorpayPaymentId: response.razorpay_payment_id,
// 					razorpayOrderId: response.razorpay_order_id,
// 					razorpaySignature: response.razorpay_signature,
// 				};

// 				const result = await axios.post(
// 					"http://localhost:8000/success",
// 					data,
// 				);
// 				console.log("kkk", result);
// 				// alert(result.data.msg);
// 				// if (response) {
// 				// 	setPaymentId(() => response.razorpay_payment_id);
// 				// }
// 				// alert(response.razorpay_payment_id);
// 				// alert(response.razorpay_order_id);
// 				// alert(response.razorpay_signature);
// 			},
// 			prefill: {
// 				name: "raju kumar",
// 				email: "example@example.com",
// 				contact: "9999999999",
// 			},
// 			theme: {
// 				color: "#32a86d",
// 			},
// 		};
// 		const paymentObject = new window.Razorpay(options);
// 		paymentObject.open();
// 	}

// 	return (
// 		<div className="App">
// 			<button
// 				className="App-link bg-red-600 text-black px-2 py-3 rounded-lg"
// 				onClick={displayRazorpay}
// 			>
// 				Pay ₹{sum}
// 			</button>
// 			{/* if (order.id!==undefined) return <Navigate to="/" /> */}
// 			{/* {order?.id !== undefined ? <Navigate to="/" /> : ""} */}
// 		</div>
// 	);
// }

// export default CheckOut;
