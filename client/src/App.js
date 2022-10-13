import React, { useEffect, useState } from 'react';
import Dashboard from './component/pages/Dashboard';
import LogIn from './component/pages/LogIn';
import { useSelector } from 'react-redux';
import ManageToken from './component/ManageToken';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import CartDetails from './component/pages/CartDetails';
import CheckOut from './component/pages/CheckOut';
import PaymentSuccess from './component/pages/PaymentSuccess';
import PrdoductDetails from './component/pages/ProductDetails';
import EmptyCart from './component/pages/EmptyCart';
import WebFooter from './component/pages/WebFooter';
// import { useNavigate } from 'react-router-dom';
import Addresses from './component/pages/Addresses';
import FinalShipping from './component/pages/FinalShipping';
import UserDashboard from './component/pages/UserDashboard';
import Register from './component/pages/Register';
import { useNavigate } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import ForgotPassword from './component/pages/ForgotPassword';
function App(props) {
	let navigate = useNavigate();
	let Logged = sessionStorage.getItem('token');
	console.log('kkkkkkdfydfefd', Logged);

	return (
		<div>
			<Routes>
				<Route exact path="/" element={<LogIn />}></Route>

				<Route exact path="/dashboard" element={<Dashboard />}></Route>

				{/* {Logged == undefined && <Navigate to="/login" />} */}
				<Route
					exact
					path="/PaymentSuccess"
					element={<PaymentSuccess />}
				></Route>
				{/* <Route exact path="/login" element={<LogIn />}></Route> */}

				<Route exact path="/product" element={<PrdoductDetails />}></Route>
				<Route exact path="/cart" element={<CartDetails />}></Route>
				<Route exact path="/checkout" element={<CheckOut />}></Route>
				<Route exact path="/emptycart" element={<EmptyCart />}></Route>
				<Route exact path="/user_address" element={<Addresses />}></Route>
				<Route exact path="/shipping" element={<FinalShipping />}></Route>
				<Route exact path="/user_profile" element={<UserDashboard />}></Route>
				<Route exact path="/register" element={<Register />}></Route>
				<Route
					exact
					path="/forgot_password"
					element={<ForgotPassword />}
				></Route>
			</Routes>
			{/* <WebFooter /> */}
		</div>
	);
}

export default App;
