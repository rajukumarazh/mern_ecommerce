import React from 'react';
import { useState } from 'react';
import ProductList from './ProductList';
// import Product from "./Product";
import { FaShoppingCart, FaAmazon, FaBars } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SidebarFilter from './SidebarFilter';
import Crousel from './Crousel';
import Filter from './Filter';
import axios from 'axios';

// import { sortProduct, sortProduct2 } from "../../redux/actions/filterAction";
import {
	searchHeadphone,
	searchProduct,
	sortProduct,
	sortProduct2,
} from '../../redux/actions/productActions';
import WebFooter from './WebFooter';

function Dashboard() {
	const [open, setOpen] = useState(false);
	const [sideBar, setSidebar] = useState(false);
	const cart = useSelector((state) => {
		console.log('state', state);
		return state.allProducts.products;
	});

	const cart2 = useSelector((state) => {
		return state?.cart;
	});

	const searchedItems = useDispatch(searchProduct);
	const short = useDispatch(sortProduct);
	const short2 = useDispatch(sortProduct2);
	const headphone = useDispatch(searchHeadphone);
	console.log('dashboard', sessionStorage.getItem('token'));
	let data = { name: 'raju', age: 23 };

	return (
		<div className="min-h-full">
			<nav className="bg-gray-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								{/* <img
									className="h-8 w-8"
									src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
									alt="Workflow"
								/> */}

								<Link to="/">
									{/* <FaAmazon size={30} className="text-white  bg-transparent" /> */}
									<img src="/rcom3.png" className="w-32 h-24" />
								</Link>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									{/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
									<Link
										to={'/user_address'}
										className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
										aria-current="page"
									>
										Select Your Address
									</Link>
									{/* <Product /> */}
								</div>
							</div>
							{/* Search bar */}
							<div>
								<input
									className="px-4  py-2 rounded-lg w-full ml-10 text-center"
									type="text"
									onChange={(e) => {
										e.preventDefault();
										searchedItems(
											searchProduct({
												current: e.target.value,
											})
										);
									}}
									placeholder="Search Your Product Here"
								/>
							</div>
						</div>

						<div className="hidden md:block">
							<div className="ml-4 flex items-center md:ml-6">
								<button
									type="button"
									className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
								>
									<span className="sr-only">View notifications</span>
									{/* <!-- Heroicon name: outline/bell --> */}
									<div className="relative">
										{cart2.length > 0 ? (
											<Link to={'/cart'}>
												<FaShoppingCart size={20} className="text-white" />
											</Link>
										) : (
											<Link to="/emptycart">
												<FaShoppingCart size={20} className="text-white" />
											</Link>
										)}
										<span className="inline-flex absolute bottom-4 items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
											{cart2.cart.length > 0 ? cart2.cart.length : ''}
										</span>
									</div>
									{/* <svg
										className="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
										/>
									</svg> */}
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
											onClick={() => setOpen(!open)}
										>
											<span className="sr-only">Open user menu</span>
											<img
												className="h-8 w-8 rounded-full"
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
										</button>
									</div>

									{/* <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              --> */}
									{open == true && (
										<div
											className=" z-50 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
											role="menu"
											aria-orientation="vertical"
											aria-labelledby="user-menu-button"
											tabIndex={-1}
										>
											{/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
											<Link
												to="/user_profile"
												className="block px-4 py-2 text-sm text-gray-700"
												role="menuitem"
												tabindex="-1"
												id="user-menu-item-0"
											>
												Your Profile
											</Link>
											<a
												href="#"
												className="block px-4 py-2 text-sm text-gray-700"
												role="menuitem"
												tabindex="-1"
												id="user-menu-item-1"
											>
												Settings
											</a>

											<Link to="/?logout">
												<button
													className="block px-4 py-2 text-sm text-gray-700"
													role="menuitem"
													tabindex="-1"
													id="user-menu-item-2"
													onClick={() => sessionStorage.removeItem('token')}
												>
													Sign out
												</button>
											</Link>
										</div>
									)}
								</div>
							</div>
						</div>
						<div className="-mr-2 flex md:hidden">
							{/* <!-- Mobile menu button --> */}
							<button
								type="button"
								className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{/* <!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
								{/* <!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            --> */}
								<svg
									className="hidden h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>

				{/* <!-- Mobile menu, show/hide based on menu state. --> */}
				<div className="md:hidden" id="mobile-menu">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
						<a
							href="#"
							className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
							aria-current="page"
						>
							Dashboard
						</a>

						<a
							href="#"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
						>
							Team
						</a>

						<a
							href="#"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
						>
							Projects
						</a>

						<a
							href="#"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
						>
							Calendar
						</a>

						<a
							href="#"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
						>
							Reports
						</a>
					</div>
					<div className="pt-4 pb-3 border-t border-gray-700">
						<div className="flex items-center px-5">
							<div className="flex-shrink-0">
								<img
									className="h-10 w-10 rounded-full"
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
								/>
							</div>
							<div className="ml-3">
								<div className="text-base font-medium leading-none text-white">
									Tom Cook
								</div>
								<div className="text-sm font-medium leading-none text-gray-400">
									tom@example.com
								</div>
							</div>
							<button
								type="button"
								className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
							>
								<span className="sr-only">View notifications</span>
								{/* <!-- Heroicon name: outline/bell --> */}
								<svg
									className="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
									/>
								</svg>
							</button>
						</div>
						<div className="mt-3 px-2 space-y-1">
							<a
								href="#"
								className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
							>
								Your Profile
							</a>

							<a
								href="#"
								className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
							>
								Settings
							</a>

							<a
								href="#"
								className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
							>
								Sign out
							</a>
						</div>
					</div>
				</div>
			</nav>

			<header className="bg-white shadow">
				<div className="">
					<ul className="flex gap-3">
						{/* <li>
							<FaBars
								className="text-black cursor-pointer"
								onClick={() => setSidebar(!sideBar)}
							/>
						</li> */}
						{/* <li>
							<div class="flex items-center mb-4">
								<input
									onClick={() => short(sortProduct())}
									id="default-checkbox"
									type="checkbox"
									value=""
									className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="default-checkbox"
									class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
								>
									Price High to Low
								</label>
							</div>
						</li> */}
						{/* <li>
							<div class="flex items-center mb-4">
								<input
									onClick={() => short(sortProduct2())}
									id="default-checkbox"
									type="checkbox"
									value=""
									className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="default-checkbox"
									class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
								>
									Price Low to High
								</label>
								<input
									// onClick={() =>
									// 	short(sortProduct2())
									// }
									onClick={() => headphone(searchHeadphone())}
									id="default-checkbox"
									type="checkbox"
									value=""
									className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="default-checkbox"
									class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
								>
									headphone
								</label>
								<input
									// onClick={() =>
									// 	short(sortProduct2())
									// }

									id="default-checkbox"
									type="checkbox"
									value=""
									className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="default-checkbox"
									class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
								>
									shoe
								</label>
								<input
									onClick={() => short(sortProduct2())}
									id="default-checkbox"
									type="checkbox"
									value=""
									className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="default-checkbox"
									class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
								>
									shirt
								</label>
							</div>
						</li> */}
					</ul>
				</div>
				{/* <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
				</div> */}
				<Crousel />
			</header>

			<main>
				<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-4 flex ">
					<div className="w-1/5">
						<Filter />
					</div>
					{/* <!-- Replace with your content --> */}
					<div className=" sm:px-0 w-4/5">
						<ProductList />
					</div>

					{/* <!-- /End replace --> */}
				</div>
			</main>
			{/* <WebFooter /> */}
		</div>
	);
}

export default Dashboard;
