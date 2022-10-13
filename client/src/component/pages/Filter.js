import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	searchHeadphone,
	searchProduct,
	sortProduct,
	sortProduct2,
} from '../../redux/actions/productActions';
function Filter() {
	const [isOpen, setIsOpen] = useState(false);
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
	return (
		<aside className="w-64" aria-label="Sidebar md:flex">
			<div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 ">
				<ul className="space-y-2">
					<li>
						<button
							type="button"
							className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
							aria-controls="dropdown-example"
							data-collapse-toggle="dropdown-example"
							onClick={() => setIsOpen(!isOpen)}
						>
							<svg
								className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
									clip-rule="evenodd"
								></path>
							</svg>
							<span
								className="flex-1 ml-3 text-left whitespace-nowrap"
								sidebar-toggle-item
							>
								Filter Product
							</span>
							<svg
								sidebar-toggle-item
								className="w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</button>
						{isOpen == true && (
							<ul id="dropdown-example" className="  space-y-2 p-3">
								<li className=" ">
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
								</li>
								<li className=" ">
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
								</li>
								<li className=" ">
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
								</li>
								<li>select Size</li>
							</ul>
						)}
					</li>
				</ul>
			</div>
		</aside>
	);
}

export default Filter;
