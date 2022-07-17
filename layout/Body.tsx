import React, { FC } from 'react'
import { BottomNav } from '../components/navigation/BottomNav'

export const Body: FC = ({ children }) => {
  return (
    <>
        <main>{children}</main>
        <BottomNav />
    </>
  )
}