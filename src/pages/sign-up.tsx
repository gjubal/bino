import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next/types';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CreateUserInput, createUserSchema } from '../schemas/user.schema';
import { zodResolver } from '@hookform/resolvers/zod';

const SignUp: NextPage = () => {
	// const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

	return (
		<>
			<Head>
				<title>Bino</title>
				<meta name="description" content="Personal expense tracking" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<SignUpComponent />
		</>
	);
};

const SignUpComponent = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateUserInput>({
		resolver: zodResolver(createUserSchema),
	});
	const onSubmit: SubmitHandler<CreateUserInput> = useCallback(
		data => alert(JSON.stringify(data)),
		[]
	);

	return (
		<section className="bg-gray-200 h-screen">
			<div className="flex justify-center items-center h-full">
				<div className="w-full mx-auto max-w-md shadow-lg rounded-lg bg-white py-12 px-4 sm:px-6 lg:px-8">
					<h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
						Create your account
					</h2>
					<form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
						<div className="-space-y-px rounded-md shadow-sm">
							<div>
								<label className="sr-only">Email address</label>
								<input
									type="email"
									className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
									placeholder="Email address"
									{...register('email')}
								/>
								{errors.email && (
									<p className="mt-2 mb-2 text-red-500">
										⚠ {errors.email?.message}
									</p>
								)}
							</div>
							<div>
								<label className="sr-only">Password</label>
								<input
									type="password"
									className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
									placeholder="Password"
									{...register('password')}
								/>
								{errors.password && (
									<p className="mt-2 mb-2 text-red-500">
										⚠ {errors.password.message}
									</p>
								)}
							</div>
							<div>
								<label className="sr-only">Confirm password</label>
								<input
									type="password"
									className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
									placeholder="Confirm password"
									{...register('passwordConfirmation')}
								/>
								{errors.passwordConfirmation && (
									<p className="mt-2 mb-2 text-red-500">
										⚠ {errors.passwordConfirmation.message}
									</p>
								)}
							</div>
						</div>

						<div className="flex flex-col gap-8">
							<div>
								<button
									type="submit"
									className="group relative flex w-full justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
								>
									Sign up
								</button>
							</div>

							<Divider />

							<Link href="/">
								<a className="font-medium text-cyan-600 hover:text-cyan-500 block">
									Sign in
								</a>
							</Link>
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

export default SignUp;
