import React, { ReactNode } from 'react'

import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'

import AppContext from '../../contexts/AppContext'

type Props = {
  children: ReactNode;
  isIdolslist?: boolean;
}

const Layout = ({ children, isIdolslist }: Props) => {

    return (
      <AppContext>
        <div className="flex flex-col h-screen">
          <Header />
          <main className="flex-grow py-1 md:p-6">
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
      </AppContext>
    )
  }

  export default Layout
  