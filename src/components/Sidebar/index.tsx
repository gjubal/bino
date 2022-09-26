import { FcBinoculars } from 'react-icons/fc';
import { FiClipboard } from 'react-icons/fi';
import { BiHome, BiLogOutCircle, BiUser } from 'react-icons/bi';
import { ReactElement } from 'react';
import Link from 'next/link';

export default function Sidebar() {
	return (
		<div className="flex flex-col min-h-screen p-3 bg-white shadow w-60">
			<div className="space-y-3">
				<div className="flex items-center justify-center gap-2 mt-4">
					<FcBinoculars />
					<h2 className="text-xl text-center font-bold">bino</h2>
				</div>
				<div className="flex">
					<ul className="pt-2 pb-4 space-y-1 text-sm w-full">
						<SidebarOption
							title="Home"
							linkHref="/dashboard"
							icon={<BiHome size={26} />}
						/>
						<SidebarOption
							title="Files"
							linkHref="/files/upload-file"
							icon={<FiClipboard size={26} />}
						/>
						<SidebarOption
							title="Profile"
							linkHref="/profile"
							icon={<BiUser size={26} />}
						/>
						<SidebarOption
							title="Log out"
							linkHref="/"
							icon={<BiLogOutCircle size={26} />}
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

const SidebarOption: React.FC<{
	title: string;
	linkHref: string;
	icon: ReactElement;
}> = props => {
	return (
		<li className="rounded-lg hover:bg-cyan-400">
			<Link href={props.linkHref}>
				<a className="flex items-center p-2 space-x-3 rounded-md text-gray-600 hover:text-white">
					{props.icon}
					<span>{props.title}</span>
				</a>
			</Link>
		</li>
	);
};
