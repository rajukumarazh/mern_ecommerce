import React, { useEffect } from 'react';
import { useState } from 'react';
import { FaAmazon } from 'react-icons/fa';
import { getCurrentUser, login, logout } from '../../redux/actions/authAction';
import { useSelector, useDispatch } from 'react-redux';
import ManageToken from '../ManageToken';
import { Navigate } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import Register from './Register';
import { useLocation } from 'react-router';
const CLIENT_ID =
	'133480509903-74jgf61507mmvg8umpqvlon7r3geh15s.apps.googleusercontent.com';
function LogIn(props) {
	let location = useLocation().search;
	console.log('props', props);
	console.log('location', location);

	const navigate = useNavigate();
	const log = useDispatch(login, getCurrentUser);
	const [getToken, setToken] = useState();
	const [details, setDetails] = useState({
		email: '',
		password: '',
		token: '',
	});
	const [loggedUser, setLoggedUser] = useState();
	const [create, setCreate] = useState(false);
	const [google, setGoogle] = useState();
	const [profile, setProfile] = useState([]);
	const clientId =
		'133480509903-74jgf61507mmvg8umpqvlon7r3geh15s.apps.googleusercontent.com';
	useEffect(() => {
		const initClient = () => {
			gapi.client.init({
				client_id: clientId,
				scope: '',
			});
		};
		gapi.load('client:auth2', initClient);
	});
	// useEffect(async () => {
	// 	const st = await getToken;
	// 	// log(login({ ...d
	// 	// 	token: getToken }));
	// 	setDetails({ ...details, token: st });
	// 	log(login({ ...details, token: st?.accessToken }));
	// }, [getToken]);
	///----------------------------------------------------------- manage google Login
	const onSuccess = (res) => {
		setProfile(res.profileObj);
		console.log('responseGoogle', res);
		log(getCurrentUser(res.profileObj));
	};

	const onFailure = (err) => {
		console.log('failed', err);
	};

	console.log('profile', profile);
	const logOut = () => {
		setProfile(null);
	};

	////
	async function loginUser(currentUser) {
		return fetch('http://localhost:8000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(currentUser),
		}).then((result) => result.json());
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		const token = await loginUser(details);
		console.log('token', token.user);
		setLoggedUser(() => token?.user);
		sessionStorage.setItem('token', JSON.stringify(token.token));

		// let st = await sessionStorage.getItem('token');
		// console.log('token', st);
		// setToken(token.accessToken);
		setDetails({ ...details, token: token });
		log(login({ token: token }));
		log(getCurrentUser(token?.user[0]));
		// if (st !== undefined) {
		// 	navigate('/');
		// }
	};
	console.log('loggeduser', loggedUser);
	useEffect(() => {
		if (details.token) {
			sessionStorage.setItem('token', details.token);
		}
	}, []);
	console.log('hello', sessionStorage.getItem('token'));

	// && navigate('/');
	console.log(sessionStorage.getItem('token'), 'token');

	return (
		<div>
			{props.res == true && location !== '?logout' ? (
				<p className="text-red-500 text-center font-semibold">
					You are Successfully registered
				</p>
			) : (
				''
			)}
			{/* {location == '?logout' && (
				<p className="text-red-500 text-center font font-bold">
					{' '}
					Log out Successfully
				</p>
			)} */}
			{create ? (
				<Register />
			) : (
				<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
					<form className="max-w-md w-full space-y-8" onSubmit={handleSubmit}>
						<div>
							{/* <FaAmazon
						size={50}
						className="mx-auto h-12 w-auto text-blue-400"
					/> */}
							<img src="rcom2.png" className="h-40 w-full" />
							<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
								Sign in to your account
							</h2>
							{/* <p className="mt-2 text-center text-sm text-gray-600">
						Or
						<a
							href="#"
							className="font-medium text-indigo-600 hover:text-indigo-500"
						>
							{' '}
							start your 14-day free trial{' '}
						</a>
					</p> */}
						</div>
						<div className="mt-8 space-y-6" action="#">
							{/* <input type="hidden" name="remember" value="true" /> */}
							<form className="rounded-md shadow-sm -space-y-px">
								<div className=" mb-5">
									<label className="sr-only">Email address</label>
									<input
										onChange={(e) =>
											setDetails({
												...details,
												email: e.target.value,
											})
										}
										id="email-address"
										name="email"
										type="email"
										autocomplete="email"
										required
										className="appearance-none  rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										placeholder="Email address"
									/>
								</div>
								<div className="mt-5">
									<label for="password" className="sr-only">
										Password
									</label>
									<input
										onChange={(e) =>
											setDetails({
												...details,
												password: e.target.value,
											})
										}
										name="password"
										type="password"
										autocomplete="current-password"
										required
										className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										placeholder="Password"
									/>
								</div>
							</form>

							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<input
										name="remember-me"
										type="checkbox"
										className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
									/>
									<label
										for="remember-me"
										className="ml-2 block text-sm text-gray-900"
									>
										Remember me
									</label>
								</div>

								<div className="text-sm">
									<Link to={'/forgot_password'}>
										<button
											href="#"
											className="font-medium text-indigo-600 hover:text-indigo-500"
										>
											Forgot your password?
										</button>
									</Link>
								</div>
							</div>
							<GoogleLogin
								clientId={clientId}
								buttonText="Sign in with Google"
								onSuccess={onSuccess}
								onFailure={onFailure}
								cookiePolicy={'single_host_origin'}
								//  isSignedIn={true}
								className="w-full text-center text-black  font-medium"
							/>

							{(sessionStorage.getItem('token') !== null ||
								profile.email !== undefined) && (
								<Navigate to="/dashboard" replace={true} />
							)}
							<div>
								<button
									onClick={async () => log(login(details))}
									className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									<span className="absolute left-0 inset-y-0 flex items-center pl-3">
										<svg
											className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
												clip-rule="evenodd"
											/>
										</svg>
									</span>
									Sign in
								</button>
								{/* <Link to="/register"> */}
								<button
									onClick={() => setCreate(!create)}
									className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-5"
								>
									<span className="absolute left-0 inset-y-0 flex items-center pl-3">
										<svg
											className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
												clip-rule="evenodd"
											/>
										</svg>
									</span>
									Create Account
								</button>
								{/* </Link> */}
							</div>
						</div>
					</form>
				</div>
			)}
		</div>
	);
}

export default LogIn;
