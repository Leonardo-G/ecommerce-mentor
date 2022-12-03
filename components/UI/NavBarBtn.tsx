import React, { FC } from 'react'

import { NavBarButton } from '../../styled/UI/navBarButton';

interface Props {
    isHover: boolean;
    setIsHover: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavBarBtn: FC<Props> = ({ isHover, setIsHover }) => {
    return (
        <NavBarButton
            onClick={ () => setIsHover( isHover => !isHover ) }
        >
            <div className={`navbar ${ isHover && "openNavBar" }`}></div>
        </NavBarButton>
    )
}
