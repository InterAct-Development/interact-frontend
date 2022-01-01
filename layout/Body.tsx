import React, { FC } from 'react'

export const Body: FC = ({ children }) => {
  return (
    <>
        {/* Navigation Component here */}
        <main>{children}</main>
        {/* Footer Component here */}
    </>
  )
}