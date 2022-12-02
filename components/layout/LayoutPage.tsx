import React, { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const LayoutPage: FC<Props> = ({ children }) => {
    return (
        <>
            <header>
                
            </header>
            <main>
                { children }
            </main>
        </>
    )
}

export default LayoutPage