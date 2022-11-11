import react from 'react';
import Sidebar from './Sidebar';
import NavBar from '../NavBar';

import AdminProductList from './AdminProductList';
import { useSelector } from 'react-redux';
import User from './User';
import AddProduct from './AddProduct';
function AdminDashboard() {
	const state = useSelector((state) => state.render.state);
	console.log('State', state);
	return (
		<div>
			<NavBar />
			<h2 className="text-red-500 text-right "> Welcome Again Admin !!!</h2>
			<h1 className="text-black font-semibold  text-center text-xl underline mb-2">
				Admin Ground
			</h1>

			<div className="flex">
				<div className="w-1/4">
					<Sidebar />
				</div>

				<div className="w-3/4 ">
					{state == 0 ? (
						<User />
					) : state == 3 ? (
						<AddProduct />
					) : (
						<AdminProductList />
					)}
				</div>
			</div>
		</div>
	);
}
export default AdminDashboard;
