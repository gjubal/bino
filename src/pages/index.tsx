import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
	// const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

	return (
		<>
			<Head>
				<title>Bino</title>
				<meta name="description" content="Personal expense tracking" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<LoginComponent />
		</>
	);
};

const LoginComponent = () => {
	return (
		<section className="h-full bg-gray-200 md:h-screen">
			<div className="flex justify-center items-center h-full">
				<div className="w-full mx-auto max-w-md shadow-lg rounded-lg bg-white py-12 px-4 sm:px-6 lg:px-8">
					<h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
						Sign in to your account
					</h2>
					<form className="mt-8 space-y-6" action="#" method="POST">
						<input type="hidden" name="remember" value="true" />
						<div className="-space-y-px rounded-md shadow-sm">
							<div>
								<label htmlFor="email-address" className="sr-only">
									Email address
								</label>
								<input
									id="email-address"
									name="email"
									type="email"
									required
									className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
									placeholder="Email address"
								/>
							</div>
							<div>
								<label htmlFor="password" className="sr-only">
									Password
								</label>
								<input
									id="password"
									name="password"
									type="password"
									required
									className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
									placeholder="Password"
								/>
							</div>
						</div>

						<div className="flex flex-col gap-8">
							{/* <div className="flex items-center">
								<input
									id="remember-me"
									name="remember-me"
									type="checkbox"
									className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
								/>
								<label
									htmlFor="remember-me"
									className="ml-2 block text-sm text-gray-900"
								>
									Remember me
								</label>
							</div> */}

							<div>
								<button
									type="submit"
									className="group relative flex w-full justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
								>
									Sign in
								</button>
							</div>

							<Divider />

							<div className="flex flex-col gap-2 text-sm">
								<Link href="/forgot-password">
									<a className="font-medium text-cyan-600 hover:text-cyan-500">
										Forgot your password?
									</a>
								</Link>
								<Link href="/sign-up">
									<a className="font-medium text-cyan-600 hover:text-cyan-500 block">
										Create account
									</a>
								</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

const Divider = () => {
	return <hr className="border-b-1 border-gray-200" />;
};

export default Home;
