import React, { useContext, useRef, useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { GrLocation, GrTextAlignLeft, GrGroup } from 'react-icons/gr'
import { BsFillSquareFill } from 'react-icons/bs'

import ModalContext from '../../contexts/ModalContext'
import ModalDetail from '../atom/modaldetail'
import { groupColors } from '../atom/idols'

const ModalList = () => {
	const { ModalEvent } = useContext(ModalContext)
	const groupid = ModalEvent[5]
	const color = groupColors[groupid]

	// モーダルの最大高さをウィンドウ高さの8割に設定
	// const [maxHeight, setMaxHeight] = useState(window.innerHeight * 0.8)
	// useEffect(() => {
	// 	const handleResize = () => setMaxHeight(window.innerHeight * 0.8)
	// 	window.addEventListener('resize', handleResize)
	// 	return () => window.removeEventListener('resize', handleResize)
	// }, [])

	// // コンテンツの高さを取得し、モーダルの高さを調整する
	// const [contentHeight, setContentHeight] = useState(0)
	// const contentRef = useRef<HTMLDivElement | null>(null)
	// useEffect(() => {
	// 	if (contentRef.current) {
	// 		setContentHeight(contentRef.current.clientHeight)
	// 	}
	// }, [ModalEvent])
	// const modalHeight = Math.min(contentHeight, maxHeight)

	return (
		<div className="flex flex-col pl-6 pr-6 pb-2">
			<div>
				<div className="flex inline-flex items-start pt-1 pb-2">
					<div className="pr-5 pt-2">
						<IconContext.Provider value={{ color, size: '18' }}>
							<BsFillSquareFill />
						</IconContext.Provider>
					</div>
					<div className="whitespace-pre-wrap text-xl md:text-2xl ">
						{ModalEvent[0]}
					</div>
				</div>
				<div className="pl-10">{ModalEvent[1]}</div>
			</div>

			<ModalDetail text={ModalEvent[4]}>
				<GrGroup size={21} />
			</ModalDetail>

			{ModalEvent[2] && (
				<div className="flex inline-flex items-start pt-2 pb-2">
					<div className="pr-5 pt-2">
						<GrTextAlignLeft size={18} />
					</div>
					<div
						className="whitespace-pre-wrap overflow-auto break-words"
						dangerouslySetInnerHTML={{ __html: ModalEvent[2] }}
					/>
				</div>
			)}

			{ModalEvent[3] && (
				<ModalDetail text={ModalEvent[3]}>
					<GrLocation size={18} />
				</ModalDetail>
			)}
		</div>
	)
}

export default ModalList
