import React from 'react';
import { useSelector } from 'react-redux';
import { FcHome } from 'react-icons/fc';
import { AiOutlineRollback } from 'react-icons/ai';
import { Link } from 'react-router-dom';
function UserDashboard() {
	let profileState = useSelector((state) => state.Auth.currentUser);
	console.log('profileState', profileState);
	var fields = profileState.email.split('@');
	console.log('profileState', fields[0]);

	return (
		<div>
			<div className="flex justify-between ">
				<Link to="" className="">
					<AiOutlineRollback size={32} className="m0l-2" />
				</Link>
				<Link to="/">
					{' '}
					<FcHome size={32} className="mr-3" />
				</Link>
			</div>
			<div class="relative max-w-md mx-auto md:max-w-2xl  min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
				<div class="px-6">
					<div class="flex flex-wrap justify-center">
						<div class="w-full flex justify-center ">
							<img
								src={'/user.png'}
								class="shadow-xl rounded-full align-middle border-none lg:-ml-16 max-w-[150px] w-40 h-40"
							/>
							{/* <div class="relative">
								<img
									src="./rIcon.png"
									class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
								/>
							</div> */}
						</div>

						<div class="w-full text-center mt-20">
							<div class="flex justify-center lg:pt-4 pt-8 pb-0">
								<div class="p-3 text-center">
									<span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
										3,360
									</span>
									<span class="text-sm text-slate-400">Photos</span>
								</div>
								<div class="p-3 text-center">
									<span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
										2,454
									</span>
									<span class="text-sm text-slate-400">Followers</span>
								</div>

								<div class="p-3 text-center">
									<span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
										564
									</span>
									<span class="text-sm text-slate-400">Following</span>
								</div>
							</div>
						</div>
					</div>
					<div class="text-center mt-2">
						<h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1 text-red-500">
							{fields[0]}
						</h3>
						<div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
							<i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
							{profileState.email}
						</div>
					</div>
					<div class="mt-6 py-6 border-t border-slate-200 text-center">
						<div class="flex flex-wrap justify-center">
							<div class="w-full px-4">
								<p class="font-light leading-relaxed text-slate-600 mb-4">
									An artist of considerable range, Mike is the name taken by
									Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
									and records all of his own music, giving it a warm.
								</p>
								<a
									href="javascript:;"
									class="font-normal text-slate-700 hover:text-slate-400"
								>
									Follow Account
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<footer class="relative pt-6 pb-2 mt-6">
				<div class="container mx-auto px-4">
					<div class="flex flex-wrap items-center md:justify-between justify-center">
						<div class="w-full md:w-6/12 px-4 mx-auto text-center">
							<div class="text-sm text-slate-500 font-semibold py-1"></div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default UserDashboard;
