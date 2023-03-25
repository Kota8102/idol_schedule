import React from 'react'
import IdolsList from '../molecule/idolslist'
import { idols } from '../atom/idolData'

type Props = {
	isIdolslist?: boolean
}

const Sidebar: React.FC<Props> = ({ isIdolslist }) => {
	return <div>{isIdolslist ? <IdolsList idols={idols} /> : null}</div>
}

export default Sidebar
