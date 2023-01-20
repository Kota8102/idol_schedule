import React, { useContext } from 'react';
import CheckboxContext from '../../contexts/CheckboxContext';

const Button: React.FC = () => {

    const { checkList, setCheckList, groupidList, setGroupidList } = useContext(CheckboxContext);

    return (

        <button 
            className="bg-gray-800 hover:bg-gray-500 text-white rounded px-4 py-2"
            onClick={() => {
                setGroupidList([])
                setCheckList(new Array(13).fill(false))
              }}
            >全てを解除</button>
    )
}

export default Button