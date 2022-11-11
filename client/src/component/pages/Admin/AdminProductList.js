import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../redux/actions/cartActions';
import { viewProduct } from '../../../redux/actions/productActions';
// import { Modal } from 'react-bootstrap';
import ModalDialog from './ModalDialog';
import { Navigate } from 'react-router-dom';
function AdminProductList() {
	const [products, setProducts] = useState();
	const [addProduct, setAddProduct] = useState(false);
	const [image, setImage] = useState(null);
	const [dynamic, setDynamic] = useState(null);
	const cartDispatch = useDispatch(addToCart, viewProduct);
	const [updateProduct, setUpdateProduct] = useState({
		name: '',
		price: '',
		type: '',
		description: '',
		image: '',
	});
	const [addedProduct, setAddedProduct] = useState(false);
	console.log('data is here', updateProduct);
	const handleFileInput = (e) => {
		console.log(e.target.files[0]);
		setUpdateProduct({
			...updateProduct,
			image: `./${e.target.files[0].name}`,
		});
		const formData = new FormData();
		formData.append('my-image-file', e.target.files[0], e.target.files[0].name);
		setImage(formData);
	};
	const upddate_product = async () => {
		//   handleClick()
		let datas = await axios
			.post('http://localhost:8000/image-upload', image)
			.then((res) => res);
		// setUpdateProduct({...updateProduct,image:datas.data})
		let data = await dynamic;
		axios.post('http://localhost:8000/addProduct', {
			for: updateProduct,
		});
		setAddProduct(true);
		// setModal(false)
	};
	async function fetchProducts() {
		let response = await axios.get('http://localhost:8000/all_product');
		console.log('responseive', response.data);
		setProducts(response.data);
		// dispatch(setProducts(response.data));
		console.log('response', response.data);
	}

	useEffect(() => {
		fetchProducts();
	}, []);
	console.log('data', products);
	// if (addedProduct == true) {
	// 	return <Redirect to="/_admin" />;
	// }
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
				<div className="flex justify-between ">
					<h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
						Customers also purchased
					</h2>
					<button
						onClick={() => setAddProduct(!addProduct)}
						className=" h-8 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
					>
						{' '}
						Add Product
					</button>
				</div>
				{addProduct && (
					<div className=" flex justify-center">
						<div>
							<div
								id="authentication-modal"
								tabindex="-1"
								aria-hidden="true"
								className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
							>
								<div className=" p-4 w-full max-w-md h-full md:h-auto">
									{/* <!-- Modal content --> */}
									<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
										<p className="text-red-600">...</p>
										<button
											onClick={() => setAddProduct(false)}
											type="button"
											className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
											data-modal-toggle="authentication-modal"
										>
											<svg
												aria-hidden="true"
												className="w-5 h-5"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fill-rule="evenodd"
													d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">Close modal</span>
										</button>
										<div className="py-6 px-6 lg:px-8">
											<h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
												Edit product Here
											</h3>
											<div className="space-y-6" action="#">
												<div className="flex justify-between gap-5">
													<div>
														<label
															for=""
															className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
														>
															Product name
														</label>
														<input
															type="text"
															name="email"
															id="email"
															className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
															placeholder="name@company.com"
															required=""
															onChange={(e) =>
																setUpdateProduct({
																	...updateProduct,
																	name: e.target.value,
																})
															}
														/>
													</div>
													<div>
														<label
															for=""
															className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
														>
															Price
														</label>
														<input
															type="text"
															// placeholder="••••••••"
															className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
															required=""
															onChange={(e) =>
																setUpdateProduct({
																	...updateProduct,
																	price: e.target.value,
																})
															}
														/>
													</div>
												</div>
												<div className="flex justify-between gap-5">
													<div>
														<label
															for=""
															className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
														>
															Type
														</label>
														<input
															type="text"
															className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
															placeholder="name@company.com"
															required=""
															onChange={(e) =>
																setUpdateProduct({
																	...updateProduct,
																	type: e.target.value,
																})
															}
														/>
													</div>
													<div>
														<label
															for=""
															className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
														>
															descriptions
														</label>
														{/* <input
														type="textar"
														name="password"
														id="password"
														// placeholder="••••••••"
														className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
														required=""
													/> */}
														<textarea
															onChange={(e) =>
																setUpdateProduct({
																	...updateProduct,
																	description: e.target.value,
																})
															}
															id="product"
															name="product_manipulation"
															rows="4"
															cols="30"
															className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
														>
															text- here
														</textarea>
													</div>
												</div>
												<input
													className="w-full text-red-500"
													type="file"
													onChange={(e) => handleFileInput(e)}
												/>
												{/* <div className="flex justify-between">
												<div className="flex items-start">
													<div className="flex items-center h-5">
														<input
															id="remember"
															type="checkbox"
															value=""
															className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
															required=""
														/>
													</div>
													<label
														for="remember"
														className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
													>
														Remember me
													</label>
												</div>
												<a
													href="#"
													className="text-sm text-blue-700 hover:underline dark:text-blue-500"
												>
													Lost Password?
												</a>
											</div> */}
												<button
													onClick={() => upddate_product()}
													type=""
													className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
												>
													Add Product
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
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
											<Link to={'/_admin/product'}>
												{/* <img src={single?.image} /> */}
												<img src={`${single?.image}`} />
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

export default AdminProductList;
