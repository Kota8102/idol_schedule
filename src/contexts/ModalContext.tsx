import { createContext } from 'react'

type ModalContextType = {
	showModal: boolean
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>
	ModalEvent: string[]
	setModalEvent: React.Dispatch<React.SetStateAction<string[]>>
	modalPosition: {
		width: number
		height: number
		top: number
		left: number
		right: number
	}
	setModalPosition: (position: {
		width: number
		height: number
		top: number
		left: number
		right: number
	}) => void
}

const ModalContext = createContext<ModalContextType>({
	showModal: false,
	setShowModal: () => {
		//何もしない。
	},
	ModalEvent: [],
	setModalEvent: () => {
		// 何もしない。
	},
	modalPosition: { width: 0, height: 0, top: 0, left: 0, right: 0 },
	setModalPosition: () => {
		//何もしない。
	},
})

export default ModalContext
