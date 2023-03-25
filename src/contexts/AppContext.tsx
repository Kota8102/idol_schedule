import React, { ReactNode, useState } from 'react'

import CheckboxContext from './CheckboxContext'
import LoadingContext from './LoadingContext'
import ModalContext from './ModalContext'

type Props = {
	children: ReactNode
}

const AppContext: React.FC<Props> = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false)

	const [groupidList, setGroupidList] = useState<string[]>(
		Array.from({ length: 13 }, (_, i) => i + 1).map((i) => i.toString())
	)
	const [checkList, setCheckList] = useState<boolean[]>(
		new Array(13).fill(true)
	)

	const [showModal, setShowModal] = useState(false)

	const [modalEvent, setmodalEvent] = useState<{
		title: string
		date: Date | null
		formatdate: string
		description: string
		location: string
		idolname: string
		groupid: string
	}>({
		title: '',
		date: null,
		formatdate: '',
		description: '',
		location: '',
		idolname: '',
		groupid: '',
	})

	const [modalPosition, setModalPosition] = useState({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0,
	})

	return (
		<ModalContext.Provider
			value={{
				showModal,
				setShowModal,
				modalEvent,
				setmodalEvent,
				modalPosition,
				setModalPosition,
			}}
		>
			<CheckboxContext.Provider
				value={{ checkList, setCheckList, groupidList, setGroupidList }}
			>
				<LoadingContext.Provider value={{ isLoading, setIsLoading }}>
					{children}
				</LoadingContext.Provider>
			</CheckboxContext.Provider>
		</ModalContext.Provider>
	)
}

export default AppContext
