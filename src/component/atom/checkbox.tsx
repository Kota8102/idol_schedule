import React, { useContext } from 'react'
import CheckboxContext from '../../contexts/CheckboxContext'

type Props = {
	inp_name: string

	color: string
	index: number
	groupid: string
}

const Checkbox: React.FC<Props> = ({ inp_name, color, index, groupid }) => {
	const { checkList, setCheckList, groupidList, setGroupidList } =
		useContext(CheckboxContext)

	return (
		<label className="flex my-1 items-center hover:bg-gray-200 px-2">
			<input
				type="checkbox"
				checked={checkList[index]}
				onChange={() => {
					const newCheckList = [...checkList]
					if (checkList[index]) {
						newCheckList[index] = false
						setGroupidList(groupidList.filter((e) => e !== groupid))
					} else {
						newCheckList[index] = true
						setGroupidList([...groupidList, groupid])
					}
					setCheckList(newCheckList)
				}}
				className={`${color} w-4 h-4`}
			/>
			<p className="px-2 truncate">{inp_name}</p>
		</label>
	)
}

export default Checkbox
