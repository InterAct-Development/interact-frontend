import React from 'react'

interface Props {

}

export const Card: React.FC<Props> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}