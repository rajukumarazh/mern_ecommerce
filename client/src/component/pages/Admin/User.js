import { useEffect, useState } from 'react';
import axios from 'axios';
function User() {
	const [allUser, setAllUser] = useState();
	const [item, setItem] = useState();
	async function fetchUser() {
		let response = await axios.get('http://localhost:8000/all_user');
		console.log('responseive', response.data);
		setAllUser(response.data);
		setItem(response.data);
	}
	useEffect(() => {
		fetchUser();
	}, []);
	const handleSearch = (e) => {
		const search = e.target.value;
		let ar = allUser.filter((curr) => {
			if (search.length === 0) {
				return curr;
			} else if (curr.email.toLowerCase().includes(search.toLowerCase())) {
				return curr;
			}
		});

		setItem(() => ar);
	};
	console.log('items', item);
	async function delUser(props) {
		console.log('button Clicked');
		let data = await axios.post('http://localhost:8000/_singleuser', {
			currentUser: props,
		});
		console.log('dataDeleted', data);
	}

	// console.log('kkkkkk', allUser);
	return (
		<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4  ">
			{/* <div class="text-center pb-12">
				<h2 class="text-base font-bold text-indigo-600">
					We have the best equipment
				</h2>
				<h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
					Customers
				</h1>
			</div> */}
			{/* search user bar */}
			<div>
				<label
					for="default-search"
					class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
				>
					Search
				</label>
				<div class="relative">
					<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
						<svg
							aria-hidden="true"
							class="w-5 h-5 text-gray-500 dark:text-gray-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							></path>
						</svg>
					</div>
					<input
						type="search"
						id="default-search"
						class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search users's"
						required
						onChange={(e) => handleSearch(e)}
					/>
					<button
						type="submit"
						class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Search user's
					</button>
				</div>
			</div>
			<div className="flex">
				{item &&
					item?.map((curr) => {
						return (
							<div className=" mt-3">
								<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 border-0">
									<div class="w-full rounded-lg  flex flex-col justify-center items-center">
										<div class="mb-8">
											<img
												class="object-center object-cover rounded-full h-36 w-36"
												src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
												alt="gg"
												onClick={() => console.log('curr.', curr._id)}
											/>
										</div>
										<div class="text-center mr-2">
											<p class="text-xl text-gray-700 font-bold mb-2">
												{curr.email}
											</p>
											<p class="text-base text-gray-400 font-normal">
												Software Engineer
											</p>
										</div>
										<div className="flex gap-6">
											<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
												Edit
											</button>
											<button
												class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
												onClick={() => delUser(curr)}
											>
												Delete
											</button>
										</div>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</section>
	);
}

export default User;
