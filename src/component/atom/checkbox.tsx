import React, { useContext } from 'react';
import CheckboxContext from '../../contexts/CheckboxContext';

type Props = {
    inp_name : string
    // isCheck?: boolean
    color: string
    index: number
    groupid :string
    // onChange : () => void
}


const Checkbox: React.FC<Props> = ( {inp_name, color, index, groupid }) => {

    // const [isChecked, setIsChecked] = useState(input_check);

    // const {check, setCheck} = useContext(CheckboxContext);
    const { checkList, setCheckList, groupidList, setGroupidList } = useContext(CheckboxContext);
    // const { checkList, setCheckList } = useContext(CheckboxContext);

    return (
        <label className="flex my-1 items-center hover:bg-gray-200 px-2">
            <input
                type="checkbox"
                // checked={isChecked}
                checked={checkList[index]}
                // onChange={() => setIsChecked(!isChecked)}
                onChange={() => {

                    const newCheckList = [...checkList];
                    if(checkList[index]) {
                        newCheckList[index] = false;
                        setGroupidList(groupidList.filter((e)=> e!==groupid));
                    } else {
                        newCheckList[index] = true;
                        setGroupidList([...groupidList,groupid]);
                    }
                    setCheckList(newCheckList);
                    // const newCheckList = [...checkList];
                    // newCheckList[index] = !checkList[index];
                    // setCheckList(newCheckList);
 
                    // setIsChecked(!isChecked);

                    // setCheck(!isChecked);
                    // setName(!isChecked ? inp_name: "");
                    // onChange();
                  }}
                className= {`${color} w-4 h-4`}
            />
            <p className="px-2 truncate">{inp_name}</p>
        </label>
    );

}

export default Checkbox;