import { React, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { FaShoppingCart, FaAmazon, FaBars } from 'react-icons/fa';
import WebFooter from './WebFooter';
import NavBar from './NavBar';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
// import Modal from './Admin/Modal';
function ProductDetails() {
	const products = useSelector((state) => {
		return state.allProducts.viewProduct;
	});
	const [modal, setModal] = useState(false);
	const [dynamic, setDynamic] = useState(null);
	const [updated, setUpdated] = useState(false);
	const [updateProduct, setUpdateProduct] = useState({
		name: '',
		price: '',
		type: '',
		description: '',
		image: '',
	});
	console.log('ddd ', updateProduct);

	console.log('products ', products);
	const cart = useSelector((state) => {
		return state.cart;
	});
	const location = useLocation();
	console.log('location', location);
	console.log('products ', products);
	console.log('products ', cart);
	const [image, setImage] = useState(null);
	console.log('dynamic', dynamic);
	const upddate_product = async () => {
		//   handleClick()
		let datas = await axios
			.post('http://localhost:8000/image-upload', image)
			.then((res) => res);
		// setUpdateProduct({...updateProduct,image:datas.data})
		let data = await dynamic;
		axios.post('http://localhost:8000/update_product', {
			id: data,
			for: updateProduct,
		});
		// setModal(false)
		setUpdated(true);
	};
	const handleClick = async () => {
		let datas = await axios
			.post('http://localhost:8000/image-upload', image)
			.then((res) => res);
		console.log('resp', datas);
	};
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
	const cartDispatch = useDispatch(addToCart);
	const handleAlert = () => {
		toast.success('Hurrah item grabbed  !', {
			position: toast.POSITION.TOP_CENTER,
			theme: 'colored',
			delay: 1000,
		});
	};
	/// delete Products
	async function delProduct(props) {
		let data = await axios.post('http://localhost:8000/del_product', {
			currenProdut: props,
		});
		setUpdated(true);
		console.log('dataDeleted', data);
	}
	console.log('modal response', modal);
	const multiFunct = (id) => {
		return setModal(!modal), setDynamic(id);
	};
	if (updated == true) {
		return <Navigate to="/_admin" />;
	}
	return (
		<div>
			<ToastContainer />
			<NavBar />
			{modal == true && (
				<div className="">
					<div>
						{/* <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        data-modal-toggle="authentication-modal"
    >
        Toggle modal
    </button> */}

						<div
							id="authentication-modal"
							tabindex="-1"
							aria-hidden="true"
							className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
						>
							<div className=" p-4 w-full max-w-md h-full md:h-auto">
								{/* <!-- Modal content --> */}
								<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
									<p className="text-red-600">{dynamic}</p>
									<button
										onClick={() => setModal(false)}
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
												Update Product
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			<div className="ml-4 flex justify-end items-center md:ml-6 p-1 ">
				<button
					type="button"
					className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
				>
					<span className="sr-only">View notifications</span>
					{/* <!-- Heroicon name: outline/bell --> */}
					<div className="relative">
						{cart.cart.length != 0 ? (
							<Link to={'/cart'}>
								<FaShoppingCart size={20} className="text-white" />
							</Link>
						) : (
							<Link to="/emptycart">
								{' '}
								<FaShoppingCart size={20} className="text-white" />
							</Link>
						)}
						<span className="inline-flex absolute bottom-4 items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
							{cart.cart.length > 0 ? cart.cart.length : ''}
						</span>
					</div>
				</button>

				{/* <!-- Profile dropdown --> */}
				<div className="ml-3 relative">
					<div>
						<button
							type="button"
							className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
							id="user-menu-button"
							aria-expanded="false"
							aria-haspopup="true"
						>
							<span className="sr-only">Open user menu</span>
							{location.pathname !== '/product' && (
								<img
									className="h-8 w-8 rounded-full"
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
								/>
							)}
						</button>
					</div>
				</div>
			</div>
			<section className="text-gray-700 body-font overflow-hidden bg-white">
				<div className="container px-5 py-24 mx-auto">
					<div className="lg:w-4/5 mx-auto flex flex-wrap">
						<img
							src={`${products?.image}`}
							className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
						></img>
						{/* <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="./headphone.jpg"> </img> */}
						<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
							<h2 className="text-sm title-font text-gray-500 tracking-widest">
								{products.brand}
							</h2>
							<h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
								{products.name}
							</h1>
							<div className="flex mb-4">
								<span className="flex items-center">
									<svg
										fill="currentColor"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-4 h-4 text-red-500"
										viewBox="0 0 24 24"
									>
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
									</svg>
									<svg
										fill="currentColor"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-4 h-4 text-red-500"
										viewBox="0 0 24 24"
									>
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
									</svg>
									<svg
										fill="currentColor"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-4 h-4 text-red-500"
										viewBox="0 0 24 24"
									>
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
									</svg>
									<svg
										fill="currentColor"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-4 h-4 text-red-500"
										viewBox="0 0 24 24"
									>
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
									</svg>
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-4 h-4 text-red-500"
										viewBox="0 0 24 24"
									>
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
									</svg>
									<span className="text-gray-600 ml-3">
										{products.stars} Reviews
									</span>
								</span>
								<span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
									<a className="text-gray-500">
										<svg
											fill="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
										</svg>
									</a>
									<a className="ml-2 text-gray-500">
										<svg
											fill="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
										</svg>
									</a>
									<a className="ml-2 text-gray-500">
										<svg
											fill="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
										</svg>
									</a>
								</span>
							</div>
							<p className="leading-relaxed">
								Fam locavore kickstarter distillery. Mixtape chillwave tumeric
								sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
								juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
								seitan poutine tumeric. Gastropub blue bottle austin listicle
								pour-over, neutra jean shorts keytar banjo tattooed umami
								cardigan.
							</p>
							<div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
								<div className="flex">
									<span className="mr-3">Color</span>
									<button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
									<button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
									<button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
								</div>
								<div className="flex ml-6 items-center">
									<span className="mr-3">Size</span>
									<div className="relative">
										<select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
											<option>SM</option>
											<option>M</option>
											<option>L</option>
											<option>XL</option>
										</select>
										<span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
											<svg
												fill="none"
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												className="w-4 h-4"
												viewBox="0 0 24 24"
											>
												<path d="M6 9l6 6 6-6"></path>
											</svg>
										</span>
									</div>
								</div>
							</div>
							<div className="flex">
								<span className="title-font font-medium text-2xl text-gray-900">
									Rs. {products.price}
								</span>
								{cart.length > 0 ? (
									<Link to="/cart">
										<button className="flex ml-5 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
											Go To Payment
										</button>
									</Link>
								) : (
									''
								)}
								{location.pathname == '/_admin/product' ? (
									<div className="flex  gap-5 justify-around ml-3">
										<button
											onClick={() => delProduct(products)}
											className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
										>
											Delete
										</button>
										<button
											onClick={() => multiFunct(products._id)}
											className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
										>
											Edit
										</button>
									</div>
								) : (
									<button
										onClick={() => [
											handleAlert(),
											cartDispatch(addToCart(products)),
										]}
										className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
									>
										Add to Cart
									</button>
								)}

								<button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
									<svg
										fill="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
export default ProductDetails;
