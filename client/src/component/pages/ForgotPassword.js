import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import WebFooter from './WebFooter';
function ForgotPassword() {
	return (
		<body className="font-mono ">
			<NavBar />
			<div className="container mx-auto">
				<div className="flex justify-center px-6 my-12">
					<div className="w-full xl:w-3/4 lg:w-11/12 flex">
						<div
							className="w-full h-auto  hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
							// style="background-image: url('https://source.unsplash.com/oWTW-jNGl9I/600x800')"
							// style={
							// 	"background-image: url('https://source.unsplash.com/oWTW-jNGl9I/600x800')"
							// }
							style={{
								backgroundImage: `url('https://source.unsplash.com/oWTW-jNGl9I/600x800')`,
							}}
						></div>

						<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
							<div className="px-8 mb-4 text-center">
								<h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
								<p className="mb-4 text-sm text-gray-700">
									We get it, stuff happens. Just enter your email address below
									and we'll send you a link to reset your password!
								</p>
							</div>
							<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
								<div className="mb-4">
									<label
										className="block mb-2 text-sm font-bold text-gray-700"
										for="email"
									>
										Email
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="email"
										type="email"
										placeholder="Enter Email Address..."
									/>
								</div>
								<div className="mb-6 text-center">
									<button
										className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
										type="button"
									>
										Reset Password
									</button>
								</div>
								<hr className="mb-6 border-t" />
								<div className="text-center">
									<Link
										to="/register"
										className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									>
										Create an Account!
									</Link>
								</div>
								<div className="text-center">
									<Link
										to="/"
										className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									>
										Already have an account? Login!
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<WebFooter />
		</body>
	);
}

export default ForgotPassword;
