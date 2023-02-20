import React, { useContext } from "react";
import { GrStopFill, GrLocation, GrTextAlignLeft, GrGroup, GrMultimedia } from  "react-icons/gr";

import ModalContext from "../../contexts/ModalContext";

import ModalDetail from "../atom/modaldetail";

const ModalList = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {showModal, setShowModal, ModalEvent, setModalEvent} = useContext(ModalContext);

    return (

        <div className="flex flex-col overflow-auto max-h-96 pl-6 pr-6 pb-2">

            <div className="flex inline-flex items-start pt-2 pb-2">
                <div className="pr-5 pt-2">
                <GrStopFill size={18}/>
                </div>
                <div className="whitespace-pre-wrap text-xl md:text-2xl ">
                    {ModalEvent[0]}
                </div>
            </div>

            <ModalDetail text={ModalEvent[1]}>
                <GrMultimedia size={18}/>
            </ModalDetail>

            {ModalEvent[2] && (
                <div className="flex inline-flex items-start pt-2 pb-2">
                    <div className="pr-5 pt-2">
                        <GrTextAlignLeft size={18}/>
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

            <ModalDetail text={ModalEvent[4]}>
                <GrGroup size={21}/>
            </ModalDetail>
        </div>
    )

}

export default ModalList