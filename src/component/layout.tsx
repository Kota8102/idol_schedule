import React, { ReactNode, useState } from 'react'

import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'

import CheckboxContext from '../contexts/CheckboxContext'

type Props = {
  children: ReactNode;
  isIdolslist?: boolean;
}

const Layout = ({ children, isIdolslist }: Props) => {

  // const [check, setCheck] = useState(false);
  // const [name, setName] = useState('');

  // const [checkList, setCheckList] = useState<boolean[]>([]);
  const [groupidList,setGroupidList]=useState<string[]>(["1","2","3","4"]);
  const [checkList, setCheckList] = useState<boolean[]>(new Array(4).fill(true));

    return (
      // <CheckboxContext.Provider value={{check, setCheck, name, setName}}>
      <CheckboxContext.Provider value={{ checkList, setCheckList, groupidList, setGroupidList }}>

        <div className="flex flex-col h-screen">
          <Header />
          <main className="flex-grow py-5 md:p-6">
            <div className="flex flex-col md:flex-row">
              <div className="basis-1/12 p-4 md:inline-block">
                <Sidebar isIdolslist={isIdolslist}/>
              </div>
              <div className="flex-auto md:p-4">
                 {children}
              </div>
            </div>
          </main>
          <Footer/>
        </div>

      </CheckboxContext.Provider>
     
    )
  }

  export default Layout
  