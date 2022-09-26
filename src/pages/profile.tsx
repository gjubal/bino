import { NextPage } from 'next/types';
import Sidebar from '../components/Sidebar';

const Profile: NextPage = () => {
	return (
		<div className="flex bg-gray-200">
			<Sidebar />
			<div className="container mx-auto mt-12 px-16">
				<h1 className="text-3xl font-bold mb-10">Profile</h1>

				<ProfileSection />
			</div>
		</div>
	);
};

const ProfileSection = () => {
	return (
		<div className="flex justify-center items-center">
			<div className="w-full mx-auto max-w-md shadow-lg rounded-lg bg-white py-6 px-4 sm:px-6 lg:px-8">
				<h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
					Reset your password
				</h2>
				<form className="mt-8 space-y-6" action="#" method="POST">
					<input type="hidden" name="remember" value="true" />
					<div className="-space-y-px rounded-md shadow-sm">
						<div>
							<label htmlFor="current-password" className="sr-only">
								Current password
							</label>
							<input
								id="current-password"
								name="current-password"
								type="password"
								required
								className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
								placeholder="Current password"
							/>
						</div>
						<div>
							<label htmlFor="new-password" className="sr-only">
								Password
							</label>
							<input
								id="new-password"
								name="new-password"
								type="password"
								required
								className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
								placeholder="New password"
							/>
						</div>
						<div>
							<label
								htmlFor="password-confirmation"
								className="sr-only"
							></label>
							<input
								type="password"
								name="password-confirmation"
								required
								id="password-confirmation"
								className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
								placeholder="Confirm password"
							/>
						</div>
					</div>

					<div className="flex flex-col gap-8">
						<div>
							<button
								type="submit"
								className="group relative flex w-full justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
							>
								Reset password
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Profile;
