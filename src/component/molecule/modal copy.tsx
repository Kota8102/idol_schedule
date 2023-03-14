import React, {
	useRef,
	useEffect,
	useContext,
	useState,
	useLayoutEffect,
} from 'react'

import ModalList from './modallist'
import ModalHeader from './modalheader'
import ModalContext from '../../contexts/ModalContext'

const Modal: React.FC = () => {
	const modalWidth = 448
	const contentRef = useRef<HTMLDivElement | null>(null)
	const headerRef = useRef<HTMLDivElement | null>(null)
	const { ModalEvent, modalPosition, showModal, setShowModal } =
		useContext(ModalContext)

	const isMobile = (): boolean => {
		const ua = navigator.userAgent
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			ua
		)
	}
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

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement

			// クリックされたターゲットがイベントであれば、モーダルを閉じずにそのイベントのモーダルを開く
			if (target.closest('.fc-event')) {
				setShowModal(true)
				return
			}
			// モーダル以外の場所がクリックされた場合は、モーダルを閉じる
			if (contentRef.current && !contentRef.current.contains(target)) {
				setShowModal(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ModalEvent, modalPosition, contentRef, headerRef, setShowModal])

	const [windowHeight, setWindowHeight] = useState(window.innerHeight)
	useEffect(() => {
		const handleResize = () => setWindowHeight(window.innerHeight)
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const [contentHeight, setContentHeight] = useState(0)
	const [modalHeight, setModalHeight] = useState(0)
	const [headerHeight, setHeaderHeight] = useState(0)
	const [maxmodalHeight, setMaxmodalHeight] = useState(0)

	useLayoutEffect(() => {
		if (contentRef.current && headerRef.current) {
			const contentHeight = contentRef.current.clientHeight
			const headerHeight = headerRef.current.clientHeight
			const maxmodalHeight = Math.floor(window.innerHeight * 0.8)

			setHeaderHeight(headerHeight)
			setMaxmodalHeight(maxmodalHeight)

			if (contentHeight + headerHeight > maxmodalHeight) {
				setContentHeight(maxmodalHeight - headerHeight)
				setModalHeight(maxmodalHeight)
			} else {
				setContentHeight(contentHeight)
				setModalHeight(contentHeight + headerHeight)
			}
		}
	}, [ModalEvent, contentRef, headerRef, windowHeight])

	// モーダルのスタイル
	const modalStyle = isMobile()
		? {
				top: `${window.scrollY + modalPosition.top}px`,
		  }
		: {
				top: 100,
				left: 0,
				height: modalHeight,
		  }

	const modalContentStyle = {
		maxHeight: contentHeight,
	}

	console.log(contentHeight)

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
			<div ref={headerRef}>
				<ModalHeader />
			</div>
			<div
				ref={contentRef}
				className="modal-body overflow-y-auto"
				style={modalContentStyle}
			>
				<ModalList />
			</div>
		</div>
	)
}

export default Modal
