import React from 'react'
import Header from './header'
import Footer from './footer'
import {BsFillTelephoneFill} from "react-icons/bs"
import logoImg from "../images/logo/logo.svg"

const Layout = ({children}) => {
  return (
    <>
      <Header icons={<BsFillTelephoneFill />} logo={logoImg} />
      {children}
      <Footer icons={<BsFillTelephoneFill />} logo={logoImg} />
      </>
       
  )
}

export default Layout
