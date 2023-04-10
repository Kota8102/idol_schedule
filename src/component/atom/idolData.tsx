export const idols = [
	{ name: 'CYNHN', color: 'accent-cyan-600', groupid: '16' },
	{ name: 'fishbowl', color: 'accent-blue-600', groupid: '6' },
	{ name: 'kolokol', color: 'accent-teal-600', groupid: '4' },
	{ name: 'Mirror,Mirror.', color: 'accent-amber-600', groupid: '12' },
	{ name: 'Ringwanderung', color: 'accent-neutral-700', groupid: '9' },
	{ name: 'SANDAL TELEPHONE', color: 'accent-rose-500', groupid: '3' },
	{ name: 'situasion', color: 'accent-slate-500', groupid: '10' },
	{ name: 'THE ORCHESTRA TOKYO', color: 'accent-teal-600', groupid: '11' },
	{ name: 'tipToe.', color: 'accent-fuchsia-500', groupid: '7' },
	{ name: 'yosugala', color: 'accent-purple-500', groupid: '1' },
	{ name: 'かすみ草とステラ', color: 'accent-lime-600', groupid: '15' },
	// { name: 'きのホ。', color: 'accent-emerald-600', groupid: '2' },
	{ name: '群青の世界', color: 'accent-orange-600', groupid: '14' },
	{ name: 'さとりモンスター', color: 'accent-violet-700', groupid: '13' },
	{ name: 'タイトル未定', color: 'accent-sky-600', groupid: '5' },
	// { name: 'のらりくらり', color: 'accent-pink-500', groupid: '8' },
]

interface GroupColors {
	[key: string]: string
}

export const groupColors: GroupColors = {
	'1': '#a855f7',
	'2': '#059669',
	'3': '#f43f5e',
	'4': '#0284c7',
	'5': '#0284c7',
	'6': '#2563eb',
	'7': '#d946ef',
	'8': '#ec4899',
	'9': '#404040',
	'10': '#64748b',
	'11': '#0d9488',
	'12': '#d97706',
	'13': '#6d28d9',
	'14': '#FB923C',
	'15': '#84CC16',
	'16': '#22D3EE',
}

export const totalIdols = idols.length
