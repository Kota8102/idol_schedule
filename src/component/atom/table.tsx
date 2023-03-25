import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

type Props = {
	id: number
	name: string
	url: string
	twitter: string
}

const data: Props[] = [
	{
		id: 1,
		name: 'yosugala',
		url: 'https://yosugala2022.ryzm.jp/',
		twitter: 'https://twitter.com/yosugala_info',
	},
	{
		id: 2,
		name: 'きのホ。',
		url: 'https://kinopo.jp/',
		twitter: 'https://twitter.com/kinopo_idol',
	},
	{
		id: 3,
		name: 'SANDAL TELEPHONE',
		url: 'https://sandaltelephone.com/',
		twitter: 'https://twitter.com/sandaltelephone',
	},
	{
		id: 4,
		name: 'kolokol',
		url: 'https://kinopo.jp/',
		twitter: 'https://twitter.com/kinopo_idol',
	},
	{
		id: 5,
		name: 'タイトル未定',
		url: 'https://miteititle.com/',
		twitter: 'https://twitter.com/MiteiTitle/',
	},
	{
		id: 6,
		name: 'fishbowl',
		url: 'https://fishbowl.jp/',
		twitter: 'https://twitter.com/fishbowl2021',
	},
	{
		id: 7,
		name: 'tipToe.',
		url: 'https://tiptoe-official.com/',
		twitter: 'https://twitter.com/tipToe_official',
	},
	{
		id: 8,
		name: 'のらりくらり',
		url: 'https://norakura.tokyo/',
		twitter: 'https://twitter.com/norari_official',
	},
	{
		id: 9,
		name: 'Ringwanderung',
		url: 'https://ringwanderung-official.com/',
		twitter: 'https://twitter.com/RWR__OFFICIAL',
	},
	{
		id: 10,
		name: 'situasion',
		url: 'https://situasion.com/',
		twitter: 'https://twitter.com/situasion_info',
	},
	{
		id: 11,
		name: 'THE ORCHESTRA TOKYO',
		url: 'https://lit.link/TheOrchestraTokyo',
		twitter: 'https://twitter.com/OrchestraTokyo',
	},
	{
		id: 12,
		name: 'Miller, Miller',
		url: 'https://www.mirror--mirror.com/',
		twitter: 'https://twitter.com/MirrorMirror_V',
	},
	{
		id: 13,
		name: 'さとりモンスター',
		url: 'https://ntkcreation.com/artist/satomon',
		twitter: 'https://twitter.com/info_satomon',
	},
]

const column = ['idol name', 'url', 'twitter']

const Table: React.FC = () => {
	return (
		<div className="flex flex-col">
			<div className="overflow-x-auto">
				<div className="p-1.5 w-full inline-block align-middle">
					<div className="overflow-hidden border rounded-lg">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									{column.map((item) => (
										<th
											key={item}
											scope="col"
											className="px-4 py-3 text-xs font-bold text-center text-gray-500 uppercase"
										>
											{item}
										</th>
									))}
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200">
								{data.map((item) => (
									<tr key={item.id}>
										<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
											{item.name}
										</td>
										<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
											<a href={item.url}>
												<div className="hidden md:inline-block">
													{item.url}
												</div>
												<div className="grid place-content-center md:hidden">
													<FiExternalLink />
												</div>
											</a>
										</td>
										<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
											<a href={item.twitter}>
												<div className="hidden md:inline-block">
													{item.twitter}
												</div>
												<div className="grid place-content-center md:hidden">
													<FaTwitter />
												</div>
											</a>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Table
