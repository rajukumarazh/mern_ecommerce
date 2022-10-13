import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FinalShipping from './FinalShipping';
function Addresses() {
	const [selectedAddress, setSelectedAddress] = useState();
	console.log('setSelectedAddress', selectedAddress);
	let paymentStatus = useSelector((state) => state.cart.paid);
	console.log('paymentStatus', paymentStatus);
	return (
		<div className="flex gap-5">
			<div className=" w-1/3 p-5">
				<h3 className="text-red-500">Your availabe shipping addresses</h3>{' '}
				<div class="inline-block relative w-64">
					<select
						onChange={(e) => setSelectedAddress(e.target.value)}
						className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
					>
						<option value={'address 1'}>Address 1,</option>
						<option value={'address 2'}>Address 2</option>
						<option value={'address 3'}>Address 3</option>
					</select>

					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
						<svg
							className="fill-current h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
						</svg>
					</div>
				</div>
				{selectedAddress && paymentStatus == true ? (
					<div className="mt-10">
						<p>Are sure to shipping this choosen Address</p>
						<div className="flex justify-center gap-5 mt-5">
							<button class="bg-red-500 text-white font-bold py-2 px-4 border border-white-700 rounded">
								NO
							</button>
							<Link to="/shipping">
								<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
									Yes
								</button>
							</Link>
						</div>
					</div>
				) : (
					<p>please select Address</p>
				)}
			</div>
			<div className="w-2/3 p-5">
				<form class="w-full max-w-lg">
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-first-name"
							>
								First Name
							</label>
							<input
								className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
								id="grid-first-name"
								type="text"
								placeholder="Jane"
							/>
							<p className="text-red-500 text-xs italic">
								Please fill out this field.
							</p>
						</div>
						<div className="w-full md:w-1/2 px-3">
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-last-name"
							>
								Last Name
							</label>
							<input
								className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-last-name"
								type="text"
								placeholder="Doe"
							/>
						</div>
					</div>
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full px-3">
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-password"
							>
								Mobile
							</label>
							<input
								className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-password"
								// type="password"
								placeholder="mobile number"
							/>
							<p className="text-gray-600 text-xs italic">
								Make it as long and as crazy as you'd like
							</p>
						</div>
					</div>
					<div className="flex flex-wrap -mx-3 mb-2">
						<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-city"
							>
								City
							</label>
							<input
								className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-city"
								type="text"
								placeholder="city"
							/>
						</div>
						<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-state"
							>
								State
							</label>
							<div className="relative">
								<select
									className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="grid-state"
								>
									<option>New Mexico</option>
									<option>Missouri</option>
									<option>Texas</option>
								</select>
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
									<svg
										className="fill-current h-4 w-4"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
									</svg>
								</div>
							</div>
						</div>
						<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-zip"
							>
								Zip
							</label>
							<input
								className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-zip"
								type="text"
								placeholder="90210"
							/>
						</div>
					</div>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
						Save Address
					</button>
				</form>
			</div>
		</div>
	);
}

export default Addresses;
