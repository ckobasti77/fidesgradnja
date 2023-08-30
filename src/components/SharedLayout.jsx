import React from 'react';
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from './components'

const SharedLayout = ({ scrollToTop }) => {
  return (
    <>
      <Navbar scrollToTop={scrollToTop} />
      <Outlet />
      <Footer scrollToTop={scrollToTop} />
    </>
  )
}

export default SharedLayout