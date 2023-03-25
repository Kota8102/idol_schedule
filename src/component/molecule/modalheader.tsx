import React, { useContext } from 'react'
import { MdOutlineClose } from 'react-icons/md'

import AddToGoogleCalendarButton from './AddToGoogleCalendarButton'
import ModalContext from '../../contexts/ModalContext'

const ModalHeader: React.FC = () => {
	const handleMouseDown = (event: React.MouseEvent) => {
		event.stopPropagation()
	}

	const { setShowModal, modalEvent, setmodalEvent } = useContext(ModalContext)

	const handleClick = () => {
		setShowModal(false)
		setmodalEvent({
			title: '',
			date: null,
			formatdate: '',
			description: '',
			location: '',
			idolname: '',
			groupid: '',
		})
	}

	return (
		<div
			className="modal-header flex justify-end pt-2 pr-2"
			onMouseDown={handleMouseDown}
		>
			<div className="p-2 hover:bg-gray-200">
				<AddToGoogleCalendarButton event={modalEvent} />
			</div>

			<div className="p-2 hover:bg-gray-200" onClick={handleClick}>
				<button>
					<MdOutlineClose size={21} className="w-21 h-21" />
				</button>
			</div>
		</div>
	)
}

export default ModalHeader
