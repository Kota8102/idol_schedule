import React, { useContext } from "react";
import { GrClose } from  "react-icons/gr";
// import { HiOutlineExternalLink } from "react-icons/hi"
import 'material-symbols';

import ModalContext from "../../contexts/ModalContext";
import ModalList from "./modallist";

const ModalComp:React.FC = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {showModal, setShowModal, ModalEvent, setModalEvent, clientY, setClientY} = useContext(ModalContext);

    const handleClick = () => {
        setShowModal(false);
        setModalEvent([]);
    };
      
    console.log(clientY)
    return (
            
        // <div className='modal-content bg-white p-3 border-solid rounded-lg shadow-xl w-[25rem] h-auto' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '99999' }}>
        <div className='modal-content bg-white border-solid rounded-lg border border-gray-200 min-h-min inset-2/4 absolute z-[99999] translate-y-1/4 md:-translate-y-2/4 -translate-x-2/4  w-[20rem] md:w-[30rem]' style={{top: `${clientY}px`}}>
            <div className='flex flex-col pl-2'>
                <div className="modal_header flex justify-end pt-2 pr-2">
                    
                    {/* <div className="mr-3 p-2 hover:bg-gray-200">
                        <button>
                            <HiOutlineExternalLink size={21}/>
                        </button>
                    </div> */}

                    <div className="p-2 hover:bg-gray-200" onClick={handleClick}>
                        <button>
                            <GrClose size={21} className="w-21 h-21" />
                        </button>
                    </div>

                </div>
                <ModalList />
            </div>
        </div>
)
}

export default ModalComp