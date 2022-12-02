import React from 'react';
import Image from 'next/image';

import { 
    Cart, 
    LeftNav, 
    LinkStyled, 
    Logo,
    Navigation, 
    NavLinks, 
    Profile 
} from '../../styled/UI/nav';

export const Nav = () => {
    return (
        <Navigation>
            <Logo href="/">sneakers</Logo>
            <NavLinks>
                <LinkStyled>Collections</LinkStyled>
                <LinkStyled>Men</LinkStyled>
                <LinkStyled>Women</LinkStyled>
                <LinkStyled>About</LinkStyled>
                <LinkStyled>Contact</LinkStyled>
            </NavLinks>
            <LeftNav>
                <Cart>
                    <Image 
                        src="/icons/icon-cart.svg"
                        alt='Icono carrito'
                        width={ 25 }
                        height={ 25 }
                    />
                </Cart>
                <Profile>
                    <Image 
                        src="/img/static/image-avatar.png"
                        width={ 50 }
                        height={ 50 }
                        alt="Perfil"
                    />
                </Profile>
            </LeftNav>
        </Navigation>
    )
}
