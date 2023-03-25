import React, { useRef, useEffect, useState, useContext } from 'react'

import ModalList from './modallist'
import ModalHeader from './modalheader'
import ModalContext from '../../contexts/ModalContext'

const Modal: React.FC = () => {
	const modalWidth = 448
	const modalcontentRef = useRef<HTMLDivElement | null>(null)
	const modalheaderRef = useRef<HTMLDivElement | null>(null)

	const { modalEvent, modalPosition, showModal, setShowModal } =
		useContext(ModalContext)

	const [modalHeight, setModalHeight] = useState(0)

	const [isModalHeightAdjusted, setisModalHeightAdjusted] = useState(false)
	const innerHeight = Math.floor(window.innerHeight * 0.8)
	const innermoblieHeight = Math.floor(window.innerHeight * 0.9)

	const isMobile = (): boolean => {
		const ua = navigator.userAgent
		return (
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				ua
			) && document.documentElement.clientWidth < 768
		)
	}

	const [modalcontentHeight, setModalContentHeight] = useState(
		isMobile() ? innermoblieHeight : 0
	)

	useEffect(() => {
		if (modalcontentRef.current && modalheaderRef.current) {
			const contentHeight = modalcontentRef.current.clientHeight
			const headerHeight = modalheaderRef.current.clientHeight
			const maxmodalHeight = Math.floor(window.innerHeight * 0.8)

			setModalHeight(contentHeight + headerHeight)

			if (contentHeight + headerHeight > maxmodalHeight) {
				setModalContentHeight(maxmodalHeight - headerHeight)
				setModalHeight(maxmodalHeight)
				setisModalHeightAdjusted(true)
			} else {
				setModalContentHeight(contentHeight)
				setModalHeight(contentHeight + headerHeight)
				setisModalHeightAdjusted(false)
			}
		}
		if (isMobile()) {
			setModalContentHeight(innermoblieHeight)
		}
	}, [modalcontentRef, modalheaderRef, modalEvent, innerHeight])

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

	// スクロールの位置を固定
	useEffect(() => {
		const originalOverflow = document.body.style.overflow
		const originalScrollPosition = window.scrollY

		if (showModal) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = originalOverflow
			window.scrollTo(0, originalScrollPosition)
		}

		return () => {
			document.body.style.overflow = originalOverflow
			window.scrollTo(0, originalScrollPosition)
		}
	}, [showModal])

	// モーダルのスタイル
	const modalStyle = isMobile()
		? {
				top: `calc(50% + ${window.scrollY}px)`,
				left: '50%',
				transform: 'translate(-50%, -50%)',
				height: '100%',
				// left: 0,
				width: '100%',
		  }
		: {
				top: 0,
				left: 0,
				height: modalHeight,
		  }

	if (isMobile() === false) {
		if (modalPosition.left < modalWidth) {
			modalStyle.left = modalPosition.left + modalPosition.width + 10
		} else {
			modalStyle.left = modalPosition.left - modalWidth
		}

		if (isModalHeightAdjusted || modalPosition.top - modalHeight < 0) {
			modalStyle.top = 90
		} else if (innerHeight - modalPosition.top < modalHeight) {
			modalStyle.top = modalPosition.top - modalHeight
		} else {
			modalStyle.top = modalPosition.top
		}
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
