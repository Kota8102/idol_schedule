import { createContext } from 'react';

type ModalContextType = {
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    ModalEvent: string[],
    setModalEvent: React.Dispatch<React.SetStateAction<string[]>>,
    clientY: number,
    setClientY : React.Dispatch<React.SetStateAction<number>>
}

const ModalContext = createContext<ModalContextType>({
    showModal:false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setShowModal:() => {},
    ModalEvent:[],
    setModalEvent:() => {},
    clientY:0,
    setClientY:() => {}
});

export default ModalContext;
  