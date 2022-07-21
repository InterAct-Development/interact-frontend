import React, { FC } from 'react'
import MaterialNav from '../components/navigation/Navbar'

export const Body: FC = ({ children }) => {
  return (
    <>
      <MaterialNav />
      <main>{children}</main>
      {/* <BottomNav /> */}
    </>
  )
}