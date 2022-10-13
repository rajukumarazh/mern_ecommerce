// import React from 'react';
// import { useSelector } from 'react-redux';

// import { useDispatch } from 'react-redux';
// import { removeFromCart } from '../../redux/actions/cartActions';
// function CartDetails() {
// 	const cartData = useSelector((state) => {
// 		return state.cart.cart;
// 	});
// 	console.log('cart', cartData);
// 	let complete;
// 	if (cartData !== undefined) {
// 		complete = cartData.map((ar) => ar.price);
// 	}
// 	const sum = complete.reduce(function (sum, number) {
// 		const updatedSum = sum + number;
// 		return updatedSum;
// 	}, 0);

// 	const dispatch = useDispatch(removeFromCart);
// 	return (
// 		<div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
// 			<div class="pointer-events-auto w-screen max-w-md">
// 				<div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
// 					<div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
// 						<div class="flex items-start justify-between">
// 							<h2
// 								class="text-lg font-medium text-gray-900"
// 								id="slide-over-title"
// 							>
// 								Shopping cart..
// 							</h2>
// 							<div class="ml-3 flex h-7 items-center">
// 								<button
// 									type="button"
// 									class="-m-2 p-2 text-gray-400 hover:text-gray-500"
// 								>
// 									<span class="sr-only">Close panel</span>
// 									{/* <!-- Heroicon name: outline/x --> */}
// 									<svg
// 										class="h-6 w-6"
// 										xmlns="http://www.w3.org/2000/svg"
// 										fill="none"
// 										viewBox="0 0 24 24"
// 										stroke-width="2"
// 										stroke="currentColor"
// 										aria-hidden="true"
// 									>
// 										<path
// 											stroke-linecap="round"
// 											stroke-linejoin="round"
// 											d="M6 18L18 6M6 6l12 12"
// 										/>
// 									</svg>
// 								</button>
// 							</div>
// 						</div>

// 						<div class="mt-8">
// 							<div class="flow-root">
// 								<ul role="list" class="-my-6 divide-y divide-gray-200">
// 									{/* <li class="flex py-6">
// 										<div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
// 											<img
// 												src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
// 												alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
// 												class="h-full w-full object-cover object-center"
// 											/>
// 										</div>

// 										<div class="ml-4 flex flex-1 flex-col">
// 											<div>
// 												<div class="flex justify-between text-base font-medium text-gray-900">
// 													<h3>
// 														<a href="#">
// 															{" "}
// 															Throwback
// 															Hip
// 															Bag{" "}
// 														</a>
// 													</h3>
// 													<p class="ml-4">
// 														$90.00
// 													</p>
// 												</div>
// 												<p class="mt-1 text-sm text-gray-500">
// 													Salmon
// 												</p>
// 											</div>
// 											<div class="flex flex-1 items-end justify-between text-sm">
// 												<p class="text-gray-500">
// 													Qty 1
// 												</p>

// 												<div class="flex">
// 													<button
// 														type="button"
// 														class="font-medium text-indigo-600 hover:text-indigo-500"
// 													>
// 														Remove
// 													</button>
// 												</div>
// 											</div>
// 										</div>
// 									</li> */}

// 									{cartData?.map((singleItem) => {
// 										return (
// 											<li class="flex py-6">
// 												<div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
// 													<img
// 														src={singleItem.image}
// 														alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
// 														class="h-full w-full object-cover object-center"
// 													/>
// 												</div>
// 												<div class="ml-4 flex flex-1 flex-col">
// 													<div>
// 														<div class="flex justify-between text-base font-medium text-gray-900">
// 															<h3>
// 																<a href="#">{singleItem.name}</a>
// 															</h3>
// 															<p class="ml-4">{singleItem.price}</p>
// 														</div>
// 														<p class="mt-1 text-sm text-gray-500">
// 															{singleItem.type}
// 														</p>
// 													</div>
// 													<div class="flex flex-1 items-end justify-between text-sm">
// 														<p class="text-gray-500">Qty 1</p>

// 														<div class="flex">
// 															<button
// 																id={singleItem.id}
// 																onClick={() =>
// 																	dispatch(removeFromCart(singleItem.id))
// 																}
// 																type="button"
// 																class="font-medium text-indigo-600 hover:text-indigo-500"
// 															>
// 																Remove
// 															</button>
// 														</div>
// 													</div>
// 												</div>
// 											</li>
// 										);
// 									})}

// 									{/* <!-- More products... --> */}
// 								</ul>
// 							</div>
// 						</div>
// 					</div>

// 					<div class="border-t border-gray-200 py-6 px-4 sm:px-6">
// 						<div class="flex justify-between text-base font-medium text-gray-900">
// 							<p>Subtotal</p>
// 							<p className="text-red-500">Rs:{sum}</p>
// 						</div>
// 						<p class="mt-0.5 text-sm text-gray-500">
// 							Shipping and taxes calculated at checkout.
// 						</p>
// 						<div class="mt-6">
// 							{/* <a
// 								href="/checkout"
// 								class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
// 							>
// 								Checkout
// 							</a> */}
// 							{cartData.length > 0 ? (
// 								<Link to={'/checkout'}>
// 									<button
// 										type="button"
// 										class="font-medium text-indigo-600 hover:text-indigo-500"
// 									>
// 										CheckOut
// 										<span aria-hidden="true"> &rarr;</span>
// 									</button>
// 								</Link>
// 							) : (
// 								<Link to={'/'} />
// 							)}
// 						</div>
// 						<div class="mt-6 flex justify-center text-center text-sm text-gray-500">
// 							<p>
// 								or{' '}
// 								<Link to={'/'}>
// 									<button
// 										type="button"
// 										class="font-medium text-indigo-600 hover:text-indigo-500"
// 									>
// 										Continue Shopping
// 										<span aria-hidden="true"> &rarr;</span>
// 									</button>
// 								</Link>
// 							</p>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default CartDetails;

import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
	removeFromCart,
	proceedSafeAmount,
} from '../../redux/actions/cartActions';
import { Link } from 'react-router-dom';
import WebFooter from './WebFooter';
import NavBar from './NavBar';
import { ManipulateQuantity } from '../../redux/actions/cartActions';
import CheckOut from './CheckOut';
function CartDetails() {
	const [quant, setQuant] = useState([]);
	const dispatch = useDispatch(removeFromCart, proceedSafeAmount);
	const cartData = useSelector((state) => {
		return state.cart.cart;
	});

	console.log('allCartItem', cartData);
	let complete;
	if (cartData !== undefined) {
		complete = cartData.map((ar) => {
			return {
				id: ar.id,
				price: ar.price * ar.qty,
				qty: ar.qty,
				name: ar.name,
			};
		});
	}
	console.log('complete', complete);

	const sum = complete.reduce(function (sum, number) {
		const updatedSum = sum + number.price;

		return updatedSum;
	}, 0);
	let calculatedTax = sum - (sum * 90) / 100;
	let total = sum - calculatedTax;
	console.log('sum ', sum, calculatedTax, total);
	// const ManipulateQuantity = (id) => {
	// 	// setQuant(quant+1)
	// 	let qty = cartData.map((curr, i, arr) => {
	// 		if (id == curr.id) {
	// 			return {
	// 				...curr,
	// 				qty: curr.qty++,
	// 				price: curr.price * curr.qty,
	// 			};
	// 		} else {
	// 			return { ...curr };
	// 		}
	// 	});

	// 	console.log('helloMoto', qty);
	// };

	// 	const sum = complete.reduce(function (sum, number) {
	// 	const updatedSum = sum + number;
	// 	return updatedSum;
	// }, 0);

	return (
		<div>
			<NavBar />
			<div class="flex justify-center my-6">
				<div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
					<div class="flex-1">
						<table class="w-full text-sm lg:text-base" cellspacing="0">
							<thead>
								<tr class="h-12 uppercase">
									<th class="hidden md:table-cell"></th>
									<th class="text-left">Product</th>
									<th class="lg:text-right text-left pl-5 lg:pl-0">
										<span class="lg:hidden" title="Quantity">
											Qtd
										</span>
										<span class="hidden lg:inline">Quantity</span>
									</th>
									<th class="hidden text-right md:table-cell">Unit price</th>
									<th class="text-right">Total price</th>
								</tr>
							</thead>
							<tbody>
								{cartData.map((curr) => {
									return (
										<tr>
											<td class="hidden pb-4 md:table-cell">
												<a href="#">
													<img
														src={curr.image}
														class="w-20 rounded"
														alt="Thumbnail"
													/>
												</a>
											</td>
											<td>
												<a href="#">
													<p class="mb-2 md:ml-4">{curr.name}</p>
													<form action="" method="POST">
														<button
															type="submit"
															class="text-gray-700 md:ml-4"
															onClick={() => dispatch(removeFromCart(curr.id))}
														>
															<small className="text-red-600">
																(Remove item)
															</small>
														</button>
													</form>
												</a>
											</td>
											<td class="justify-center md:justify-end md:flex mt-6">
												<div class="w-20 h-10">
													<div class="relative flex flex-row w-full h-8">
														<input
															type="number"
															// value={curr.qty}
															placeholder={curr.qty}
															class="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
															// onChange={(e) => ManipulateQuantity(curr.id)}
															onChange={(e) => {
																return (
																	console.log(e.target.value),
																	dispatch(
																		ManipulateQuantity(curr.id, e.target.value)
																	)
																);
															}}
														/>
													</div>
												</div>
											</td>
											<td class="hidden text-right md:table-cell">
												<span class="text-sm lg:text-base font-medium">
													{curr.price}
												</span>
											</td>
											<td class="text-right">
												<span class="text-sm lg:text-base font-medium">
													{' '}
													{curr.price * curr.qty}
												</span>
											</td>
										</tr>
									);
								})}
								{/* <tr>
									<td class="hidden pb-4 md:table-cell">
										<a href="#">
											<img
												src="https://limg.app/i/Cute-Constrictor-Super-Sexy-Military-Enforcer-W7mvBp.png"
												class="w-20 rounded"
												alt="Thumbnail"
											/>
										</a>
									</td>
									<td>
										<p class="mb-2 md:ml-4">Tesla Model 3</p>
										<form action="" method="POST">
											<button type="submit" class="text-gray-700 md:ml-4">
												<small>(Remove item)</small>
											</button>
										</form>
									</td>
									<td class="justify-center md:justify-end md:flex md:mt-4">
										<div class="w-20 h-10">
											<div class="relative flex flex-row w-full h-8">
												<input
													type="number"
													value="3"
													class="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
												/>
											</div>
										</div>
									</td>
									<td class="hidden text-right md:table-cell">
										<span class="text-sm lg:text-base font-medium">
											49,600.01€
										</span>
									</td>
									<td class="text-right">
										<span class="text-sm lg:text-base font-medium">
											148,800.03€
										</span>
									</td>
								</tr> */}
								{/* <tr>
									<td class="hidden pb-4 md:table-cell">
										<a href="#">
											<img
												src="https://limg.app/i/Successful-Spider-Biblical-Mutant---Total-War-lKoE7D.jpeg"
												class="w-20 rounded"
												alt="Thumbnail"
											/>
										</a>
									</td>
									<td>
										<p class="mb-2 md:ml-4">Bic 4 colour pen</p>
										<form action="" method="POST">
											<button type="submit" class="text-gray-700 md:ml-4">
												<small>(Remove item)</small>
											</button>
										</form>
									</td>
									<td class="justify-center md:justify-end md:flex md:mt-8">
										<div class="w-20 h-10">
											<div class="relative flex flex-row w-full h-8">
												<input
													type="number"
													value="5"
													class="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
												/>
											</div>
										</div>
									</td>
									<td class="hidden text-right md:table-cell">
										<span class="text-sm lg:text-base font-medium">1.50€</span>
									</td>
									<td class="text-right">
										<span class="text-sm lg:text-base font-medium">7.50€</span>
									</td>
								</tr> */}
							</tbody>
						</table>
						<hr class="pb-6 mt-6" />
						<div class="my-4 mt-6 -mx-2 lg:flex">
							<div class="lg:px-2 lg:w-1/2">
								<div class="p-4 bg-gray-100 rounded-full">
									<h1 class="ml-2 font-bold uppercase">Coupon Code</h1>
								</div>
								<div class="p-4">
									<p class="mb-4 italic">
										If you have a coupon code, please enter it in the box below
									</p>
									<div class="justify-center md:flex">
										<form action="" method="POST">
											<div class="flex items-center w-full h-13 pl-3 bg-white bg-gray-100 border rounded-full">
												<input
													type="coupon"
													name="code"
													id="coupon"
													placeholder="Apply coupon"
													value="90off"
													class="w-full bg-gray-100 outline-none appearance-none focus:outline-none active:outline-none"
												/>
												<button
													type="submit"
													class="text-sm flex items-center px-3 py-1 text-white bg-gray-800 rounded-full outline-none md:px-4 hover:bg-gray-700 focus:outline-none active:outline-none"
												>
													<svg
														aria-hidden="true"
														data-prefix="fas"
														data-icon="gift"
														class="w-8"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 512 512"
													>
														<path
															fill="currentColor"
															d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
														/>
													</svg>
													<span class="font-medium">Apply coupon</span>
												</button>
											</div>
										</form>
									</div>
								</div>
								<div class="p-4 mt-6 bg-gray-100 rounded-full">
									<h1 class="ml-2 font-bold uppercase">
										Instruction for seller
									</h1>
								</div>
								<div class="p-4">
									<p class="mb-4 italic">
										If you have some information for the seller you can leave
										them in the box below
									</p>
									<textarea class="w-full h-24 p-2 bg-gray-100 rounded"></textarea>
								</div>
							</div>
							<div class="lg:px-2 lg:w-1/2">
								<div class="p-4 bg-gray-100 rounded-full">
									<h1 class="ml-2 font-bold uppercase">Order Details</h1>
								</div>
								<div class="p-4">
									<p class="mb-6 italic">
										Shipping and additionnal costs are calculated based on
										values you have entered
									</p>
									<div class="flex justify-between border-b">
										<div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
											Subtotal
										</div>
										<div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-red-500">
											Rs. {sum}
										</div>
									</div>
									<div class="flex justify-between pt-4 border-b">
										<div class="flex lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-gray-800">
											<form action="" method="POST">
												<button type="submit" class="mr-2 mt-1 lg:mt-2">
													<svg
														aria-hidden="true"
														data-prefix="far"
														data-icon="trash-alt"
														class="w-4 text-red-600 hover:text-red-800"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 448 512"
													>
														<path
															fill="currentColor"
															d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z"
														/>
													</svg>
												</button>
											</form>
											Coupon "90OFF"
										</div>
										<div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-green-700">
											Rs. {Math.floor(calculatedTax).toFixed(2)}
										</div>
									</div>
									<div class="flex justify-between pt-4 border-b">
										<div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
											New Subtotal
										</div>
										<div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
											Rs. {Math.floor(total).toFixed(2)}
										</div>
									</div>
									<div class="flex justify-between pt-4 border-b">
										<div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
											Tax <span>(CGST 18%)</span>
										</div>
										<div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
											Rs {Math.floor((total * 18) / 100).toFixed(2)}
										</div>
									</div>
									<div class="flex justify-between pt-4 border-b">
										<div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
											Total
										</div>
										<div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
											Rs. {Math.floor(total + (total * 18) / 100).toFixed(2)}
										</div>
									</div>

									<button
										class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none"
										onClick={() => dispatch(proceedSafeAmount(complete))}
									>
										<svg
											aria-hidden="true"
											data-prefix="far"
											data-icon="credit-card"
											class="w-8"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512"
										>
											<path
												fill="currentColor"
												d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
											/>
										</svg>
										<Link to="/checkout">
											<span class="ml-2 mt-5px">Procceed to checkout</span>
										</Link>
									</button>
									<button class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
										{/* <svg
												aria-hidden="true"
												data-prefix="far"
												data-icon="credit-card"
												class="w-8"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 576 512"
											>
												<path
													fill="currentColor"
													d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
												/>
											</svg> */}
										<Link to="/">
											<span class="ml-2 mt-5px">Back </span>
										</Link>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <WebFooter /> */}
		</div>
	);
}

export default CartDetails;
