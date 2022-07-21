import React, { FC } from 'react'
import MaterialNav from '../components/navigation/Navbar'
import { BottomNav } from '../components/navigation/BottomNav'

export const Body: FC = ({ children }) => {
  return (
    <>
      <MaterialNav />
      <main>{children}</main>
      <BottomNav />
    </>
  )
}