import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
// import { setProducts } from "../../redux/Action/productActions";
import { setProducts } from '../../redux/actions/productActions';
// import { addToCart } from "../../redux/actions/cartActions";
import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartDetails from './CartDetails';
import { viewProduct } from '../../redux/actions/productActions';
function ProductList() {
	const products = useSelector((state) => {
		console.log('state', state);
		return state.allProducts.products;
	});
	const [open, setOpern] = useState(false);
	const dispatch = useDispatch(setProducts);
	const cartDispatch = useDispatch(addToCart, viewProduct);
	// const fetchProducts = async () => {
	// 	const resp = await axios
	// 		.get('https://600c30e638fd25001702cf7e.mockapi.io/api/v1/products')
	// 		.catch((err) => {
	// 			console.error(`Error in fetchProducts API call with ${err}`);
	// 		});
	// 	if (resp?.data) {
	// 		console.log('response', resp.data);
	// 		let withInitialQty = resp.data.map((obj) => ({ ...obj, qty: 1 }));
	// 		dispatch(setProducts(withInitialQty));
	// 	}
	// };

	useEffect(async () => {
		// fetchProducts();
		let response = await axios.get('http://localhost:8000/all_product');
		console.log('responseive', response.data);
		
		dispatch(setProducts(response.data));
	}, []);

	return (
		//  <!--
		//   This example requires Tailwind CSS v2.0+

		//   This example requires some changes to your config:

		//   ```
		//   // tailwind.config.js
		//   module.exports = {
		//     // ...
		//     plugins: [
		//       // ...
		//       require('@tailwindcss/aspect-ratio'),
		//     ],
		//   }
		//   ```
		// -->
		<div class="bg-white">
			<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
				<h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
					Customers also purchased
				</h2>
				{open == true && <CartDetails open={open} />}
				<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					{products !== undefined &&
						products.map((single, i) => {
							return (
								<div
									class="group relative "
									id={single.id}
									// onClick={cartDispatch(
									// 	addToCart(1),
									// )}
									// onClick={() =>
									// 	cartDispatch(
									// 		addToCart(single),
									// 	)
									// }
								>
									<div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none cursor-pointer">
										<button onClick={() => cartDispatch(viewProduct(single))}>
											{' '}
											<Link to={'/product'}>
												<img src={single.image} />
											</Link>
										</button>
									</div>
									<div class="mt-4 flex justify-between">
										<div>
											<h3 class="text-sm text-gray-700">
												{/* <a href="/cart">
													<span
														aria-hidden="true"
														class="absolute inset-0"
													></span>
												</a> */}
												{single.name}
											</h3>
											<p class="mt-1 text-sm text-gray-500"></p>
										</div>
										<p class="text-sm font-medium text-gray-900">
											Price:
											{single.price}
										</p>
										<span className="text-yellow-400 flex gap-2">
											<FaStar size={20} />
											{single.stars}
										</span>
									</div>
									{/* <button className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
											{" "}
											Add
											To
											Cart
										</button> */}
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}

export default ProductList;
