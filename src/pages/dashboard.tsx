import type { NextPage } from 'next';
import Sidebar from '../components/Sidebar';
import ChartImage from '../../public/fc3noor2.png';
import Image from 'next/image';

const Dashboard: NextPage = () => {
	return (
		<div className="flex bg-gray-200">
			<Sidebar />
			<div className="container mx-auto mt-12 px-16">
				<nav className="flex flex-col justify-between items-center mb-6 sm:flex-row">
					<h1 className="text-3xl font-bold mb-3 md:mb-0">Dashboard</h1>
					<MonthSelect />
				</nav>
				<div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-6 lg:grid-rows-1">
					<ChartCard />
					<div className="flex flex-col gap-4 lg:row-span-1 lg:col-span-2 lg:justify-start">
						<Card title="Total expenses for the month" value="$2900" />
						<Card title="Daily average" value="$111.56" />
						<Card
							title="Most frequent expense"
							value="$143.72"
							subtitle="Chipotle"
						/>
					</div>
				</div>

				<section className="grid gap-4 md:gap-12 mb-6 mix-w-xl sm:grid-cols-2 lg:grid-cols-4">
					<Card title="Week one" value="$1200" />
					<Card title="Week two" value="$1200" />
					<Card title="Week three" value="$1200" />
					<Card title="Week four" value="$1200" />
				</section>

				<section>
					<h3 className="text-lg font-semibold">Category breakdown</h3>
					<CategoryTable />
				</section>
			</div>
		</div>
	);
};

const MonthSelect = () => {
	return (
		<div className="">
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
	);
};

const Card: React.FC<{
	title: string;
	value: string;
	subtitle?: string;
}> = props => {
	return (
		<div className="w-full px-4 py-5 bg-white rounded-lg shadow">
			<div className="text-sm font-medium text-gray-500 truncate">
				{props.subtitle ? (
					<p>
						{props.title}: {props.subtitle}
					</p>
				) : (
					<p>{props.title}</p>
				)}
			</div>
			<div className="mt-1 text-3xl font-semibold text-gray-900">
				{props.value}
			</div>
		</div>
	);
};

const ChartCard: React.FC = () => {
	return (
		<div className="w-full px-4 py-5 bg-white rounded-lg shadow lg:col-span-4">
			{/* <div className="text-sm font-medium text-gray-500 truncate">Chart</div> */}
			<Image
				src={ChartImage}
				alt="Chart"
				className="mt-1 text-3xl font-semibold text-gray-900"
				width={900}
				height={500}
			/>
		</div>
	);
};

const CategoryTable = () => {
	return (
		<div className="mt-4 mb-6 flex flex-col">
			<div className="overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
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
											<p>Category</p>
											<p>Total spent</p>
										</div>
									</th>
								</tr>
							</thead>
							<tbody className="flex flex-col bg-white divide-y divide-gray-200">
								<CategoryCell name="Eating Out" value={366.9} />
								<CategoryCell name="Gas" value={150.07} />
								<CategoryCell name="Groceries" value={223.82} />
								<CategoryCell name="Living" value={1881.25} />
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

const CategoryCell: React.FC<{ name: string; value: number }> = props => {
	return (
		<td className="px-6 py-4 whitespace-nowrap" role="cell">
			<div className="flex justify-between">
				<p>{props.name}</p>
				<p>${props.value}</p>
			</div>
		</td>
	);
};

export default Dashboard;
