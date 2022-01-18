import React, { FC } from 'react'
import MaterialNav from '../components/navigation/Navbar'
import Footer from '../components/navigation/Footer'

export const Body: FC = ({ children }) => {
  return (
    <>
        <MaterialNav />
        <main>{children}</main>
        <Footer />
    </>
  )
}