import React, { useContext } from 'react'
import { GrClose } from 'react-icons/gr'

import ModalContext from '../../contexts/ModalContext'

const ModalHeader: React.FC = () => {
	const handleMouseDown = (event: React.MouseEvent) => {
		event.stopPropagation()
	}

	const { setShowModal, setModalEvent } = useContext(ModalContext)

	const handleClick = () => {
		setShowModal(false)
		setModalEvent([])
	}

	return (
		<div
			className="modal-header flex justify-end pt-2 pr-2"
			onMouseDown={handleMouseDown}
		>
			<div className="p-2 hover:bg-gray-200" onClick={handleClick}>
				<button>
					<GrClose size={21} className="w-21 h-21" />
				</button>
			</div>
		</div>
	)
}

export default ModalHeader
