import Link from 'next/link';
import { NextPage } from 'next/types';
import Sidebar from '../../components/Sidebar';

const UploadFile: NextPage = () => {
	return (
		<div className="flex bg-gray-200">
			<Sidebar />
			<div className="container mx-auto mt-12 px-16">
				<nav className="flex flex-row justify-start gap-12">
					<h1 className="text-3xl font-bold mb-6">Files</h1>
					<NavTabCollection />
				</nav>

				<UploadFileSection />
			</div>
		</div>
	);
};

const NavTabCollection = () => {
	return (
		<div className="">
			<ul className="flex cursor-pointer">
				<Link href="#">
					<li className="py-2 px-6 bg-white rounded-t-lg text-cyan-500">
						Upload file
					</li>
				</Link>
				<Link href="/files/archive">
					<li className="py-2 px-6 bg-white rounded-t-lg text-gray-500">
						Archive
					</li>
				</Link>
			</ul>
		</div>
	);
};

const UploadFileSection = () => {
	return (
		<div className="flex items-center justify-center p-12">
			<div className="mx-auto w-full max-w-[550px] bg-white">
				<form className="py-6 px-9" method="POST">
					<div className="mb-6 pt-4">
						<label className="mb-5 block text-xl font-semibold text-[#07074D]">
							Upload file
						</label>

						<div className="mb-8">
							<input type="file" name="file" id="file" className="sr-only" />
							<label
								htmlFor="file"
								className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
							>
								<div>
									<span className="mb-2 block text-xl font-semibold text-[#07074D]">
										Drop files here
									</span>
									<span className="mb-2 block text-base font-medium text-[#6B7280]">
										Or
									</span>
									<span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
										Browse
									</span>
								</div>
							</label>
						</div>

						<div className="max-w-2xl mx-auto">
							<label
								htmlFor="month"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
							>
								Choose the month
							</label>
							<select
								id="month"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							>
								<option value="01" selected>
									January
								</option>
								<option value="02">February</option>
								<option value="03">March</option>
								<option value="04">April</option>
								<option value="05">May</option>
								<option value="06">June</option>
								<option value="07">July</option>
								<option value="08">August</option>
								<option value="09">September</option>
								<option value="10">October</option>
								<option value="11">November</option>
								<option value="12">December</option>
							</select>
						</div>

						<div className="max-w-2xl mx-auto mt-4">
							<label
								htmlFor="year"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
							>
								Choose the year
							</label>
							<select
								id="year"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							>
								<option value="2022" selected>
									2022
								</option>
								<option value="2023">2023</option>
							</select>
						</div>

						{/* <div className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
							<div className="flex items-center justify-between">
								<span className="truncate pr-3 text-base font-medium text-[#07074D]">
									banner-design.png
								</span>
								<button className="text-[#07074D]">
									<svg width="10" height="10" viewBox="0 0 10 10" fill="none">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
											fill="currentColor"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
											fill="currentColor"
										/>
									</svg>
								</button>
							</div>
						</div> */}

						{/* <div className="rounded-md bg-[#F5F7FB] py-4 px-8">
							<div className="flex items-center justify-between">
								<span className="truncate pr-3 text-base font-medium text-[#07074D]">
									banner-design.png
								</span>
								<button className="text-[#07074D]">
									<svg width="10" height="10" viewBox="0 0 10 10" fill="none">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
											fill="currentColor"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
											fill="currentColor"
										/>
									</svg>
								</button>
							</div>
							<div className="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
								<div className="absolute left-0 right-0 h-full w-[75%] rounded-lg bg-[#6A64F1]"></div>
							</div>
						</div> */}
					</div>

					<div>
						<button className="hover:shadow-form w-full rounded-md bg-cyan-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
							Send file
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UploadFile;
