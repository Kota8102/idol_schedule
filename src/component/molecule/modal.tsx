import React, { useContext } from "react";
import { GrClose, GrStopFill, GrLocation, GrTextAlignLeft, GrGroup, GrMultimedia } from  "react-icons/gr";
import { HiOutlineExternalLink } from "react-icons/hi"
import 'material-symbols';

import ModalContext from "../../contexts/ModalContext";
import ModalDetail from "./modaldetail";
// import CreateLink from "../atom/createLink";

const ModalComp:React.FC = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {showModal, setShowModal, ModalEvent, setModalEvent} = useContext(ModalContext);

    return (
            
        // <div className='modal-content bg-white p-3 border-solid rounded-lg shadow-xl w-[25rem] h-auto' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '99999' }}>
        <div className='modal-content bg-white p-3 border-solid rounded-lg shadow-xl min-h-min inset-2/4 absolute z-[99999] translate-y-1/4 md:-translate-y-2/4 -translate-x-2/4  w-[20rem] md:w-[25rem]'>
            <div className='flex flex-col pl-2'>
                <div className="modal_header flex justify-end">
                    
                    <div className="mr-3 p-1 hover:bg-gray-200">
                        <button>
                            <HiOutlineExternalLink size={22}/>
                        </button>
                    </div>
                    <div className="p-1 hover:bg-gray-200">
                        <button onClick={() =>{ 
                            setShowModal(false)
                            setModalEvent([]) 
                        }}>
                        <GrClose size={22}/>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col overflow-auto max-h-96">

                    <div className="flex inline-flex items-center pt-2 pb-2">
                        <div className="pr-5"><GrStopFill size={18}/></div>
                        <div className="whitespace-pre-wrap text-xl md:text-2xl ">{ModalEvent[0]}</div>
                    </div>

                    <ModalDetail text={ModalEvent[1]}>
                        <GrMultimedia size={21}/>
                    </ModalDetail>

                    
                    {ModalEvent[2] && (
                        <ModalDetail text={ModalEvent[2]}>
                            <GrTextAlignLeft size={21}/>
                        </ModalDetail>
                    )}

                    {ModalEvent[3] && (
                        <ModalDetail text={ModalEvent[3]}>
                            <GrLocation size={21} />
                        </ModalDetail>
                    )}

                    <ModalDetail text={ModalEvent[4]}>
                        <GrGroup size={21}/>
                    </ModalDetail>
                </div>

            </div>
        </div>
)
}

export default ModalComp