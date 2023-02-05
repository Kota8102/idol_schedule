import { createContext } from 'react';

type ModalContextType = {
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    ModalEvent:string[],
    setModalEvent: React.Dispatch<React.SetStateAction<string[]>>
}

const ModalContext = createContext<ModalContextType>({
    showModal:false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setShowModal:()=>{},
    ModalEvent:[],
    setModalEvent:()=>{}
});

export default ModalContext;
  