import type { NextPage } from 'next';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import Sidebar from '../../components/Sidebar';

const Archive: NextPage = () => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<div className="flex bg-gray-200">
			<Sidebar />
			<div className="container mx-auto mt-12 px-16">
				<nav className="flex flex-row justify-start gap-12">
					<h1 className="text-3xl font-bold mb-6">Files</h1>
					<NavTabCollection />
				</nav>

				<ArchiveTable setOpenModal={setOpenModal} />

				{openModal && <DeleteModal setOpenModal={setOpenModal} />}
			</div>
		</div>
	);
};

const NavTabCollection = () => {
	return (
		<div className="">
			<ul className="flex cursor-pointer">
				<Link href="/files/upload-file">
					<li className="py-2 px-6 bg-white rounded-t-lg text-gray-500">
						Upload file
					</li>
				</Link>
				<Link href="#">
					<li className="py-2 px-6 bg-white rounded-t-lg text-cyan-500">
						Archive
					</li>
				</Link>
			</ul>
		</div>
	);
};

const ArchiveTable: React.FC<{
	setOpenModal: Dispatch<SetStateAction<boolean>>;
}> = ({ setOpenModal }) => {
	return (
		<div className="mt-8 mb-6 flex flex-col">
			<div className="mx-auto w-full max-w-[440px]">
				<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th
										scope="col"
										className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										<div className="flex items-center justify-between">
											<p>File name</p>
										</div>
									</th>
								</tr>
							</thead>
							<tbody className="flex flex-col bg-white divide-y divide-gray-200">
								<FileCell name="july.txt" setOpenModal={setOpenModal} />
								<FileCell name="august.txt" setOpenModal={setOpenModal} />
								<FileCell name="september.txt" setOpenModal={setOpenModal} />
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

const FileCell: React.FC<{
	name: string;
	setOpenModal: Dispatch<SetStateAction<boolean>>;
}> = props => {
	return (
		<td className="px-6 py-4 whitespace-nowrap" role="cell">
			<div className="flex justify-between">
				<p>{props.name}</p>
				<button
					type="button"
					onClick={() => props.setOpenModal(true)}
					className="text-red-500"
				>
					<FiTrash />
				</button>
			</div>
		</td>
	);
};

const DeleteModal: React.FC<{
	setOpenModal: Dispatch<SetStateAction<boolean>>;
}> = ({ setOpenModal }) => {
	return (
		<div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
			<div className="bg-white px-16 py-14 rounded-md text-center">
				<h1 className="text-xl mb-4 font-bold text-slate-500">
					Are you sure you want to delete the file?
				</h1>
				<button
					type="button"
					onClick={() => setOpenModal(false)}
					className="bg-red-500 px-4 py-2 rounded-md text-md text-white"
				>
					Cancel
				</button>
				<button
					type="button"
					onClick={() => console.log('delete')}
					className="bg-cyan-500 px-7 py-2 ml-2 rounded-md text-md text-white"
				>
					Confirm
				</button>
			</div>
		</div>
	);
};

export default Archive;
