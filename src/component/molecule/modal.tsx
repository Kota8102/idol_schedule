import React, { useRef, useEffect, useState, useContext } from 'react'

import ModalList from './modallist'
import ModalHeader from './modalheader'
import ModalContext from '../../contexts/ModalContext'

const Modal: React.FC = () => {
	const modalWidth = 448
	const modalcontentRef = useRef<HTMLDivElement | null>(null)
	const modalheaderRef = useRef<HTMLDivElement | null>(null)

	const {
		ModalEvent,
		setModalEvent,
		modalPosition,
		showModal,
		setShowModal,
	} = useContext(ModalContext)

	const [modalHeight, setModalHeight] = useState(0)
	const [modalcontentHeight, setModalContentHeight] = useState(0)

	useEffect(() => {
		if (modalcontentRef.current && modalheaderRef.current) {
			const contentHeight = modalcontentRef.current.clientHeight
			const headerHeight = modalheaderRef.current.clientHeight
			const maxmodalHeight = Math.floor(window.innerHeight * 0.8)

			setModalHeight(contentHeight + headerHeight)

			if (contentHeight + headerHeight > maxmodalHeight) {
				setModalContentHeight(maxmodalHeight - headerHeight)
				setModalHeight(maxmodalHeight)
			} else {
				setModalContentHeight(contentHeight)
				setModalHeight(contentHeight + headerHeight)
			}
			console.log(modalcontentHeight)
		}
	}, [modalcontentRef, modalheaderRef, ModalEvent])

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement

			if (target.closest('.fc-event')) {
				setModalContentHeight(0)
				return
			}

			if (
				modalcontentRef.current &&
				!modalcontentRef.current.contains(target)
			) {
				setShowModal(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [modalcontentRef, setShowModal])

	// モーダルのスタイル
	const modalStyle = {
		// top: 100,
		left: 0,
		height: modalHeight,
	}

	if (modalPosition.left < modalWidth) {
		modalStyle.left = modalPosition.left + modalPosition.width + 10
	} else {
		modalStyle.left = modalPosition.left - modalWidth
	}

	return (
		<div
			className="modal absolute inset-0 bg-white rounded-lg border border-gray-200 z-[99999] w-full md:max-w-md md:w-[448px]"
			style={modalStyle}
		>
			<div ref={modalheaderRef}>
				<ModalHeader />
			</div>
			<div
				ref={modalcontentRef}
				className="modal-body overflow-y-auto"
				style={
					modalcontentHeight !== 0
						? { height: modalcontentHeight }
						: {}
				}
			>
				<ModalList />
			</div>
		</div>
	)
}
export default Modal
