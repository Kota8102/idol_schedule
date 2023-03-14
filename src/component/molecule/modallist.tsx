import React, { useContext, useRef, useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { GrLocation, GrTextAlignLeft, GrGroup } from 'react-icons/gr'
import { BsFillSquareFill } from 'react-icons/bs'

import ModalContext from '../../contexts/ModalContext'
import ModalDetail from '../atom/modaldetail'
import { groupColors } from '../atom/idols'

const ModalList: React.FC = () => {
	const { ModalEvent } = useContext(ModalContext)
	const groupid = ModalEvent[5]
	const color = groupColors[groupid]

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
