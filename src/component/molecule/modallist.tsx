import React, { useContext } from 'react'
import { IconContext } from 'react-icons'
import { GrLocation, GrTextAlignLeft, GrGroup } from 'react-icons/gr'
import { BsFillSquareFill } from 'react-icons/bs'

import ModalContext from '../../contexts/ModalContext'
import ModalDetail from '../atom/modaldetail'
import { groupColors } from '../atom/idolData'

const ModalList: React.FC = () => {
	const { modalEvent } = useContext(ModalContext)
	const groupid = modalEvent.groupid
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
						{modalEvent.title}
					</div>
				</div>
				<div className="pl-10">{modalEvent.formatdate}</div>
			</div>

			<ModalDetail text={modalEvent.idolname}>
				<GrGroup size={21} />
			</ModalDetail>

			{modalEvent.description && (
				<div className="flex inline-flex items-start pt-2 pb-2">
					<div className="pr-5 pt-2">
						<GrTextAlignLeft size={18} />
					</div>
					<div
						className="whitespace-pre-wrap overflow-auto break-words"
						dangerouslySetInnerHTML={{
							__html: modalEvent.description,
						}}
					/>
				</div>
			)}

			{modalEvent.location && (
				<ModalDetail text={modalEvent.location}>
					<GrLocation size={18} />
				</ModalDetail>
			)}
		</div>
	)
}

export default ModalList
