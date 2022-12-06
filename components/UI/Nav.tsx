import React, { useState } from 'react';
import Image from 'next/image';

import { NavBarBtn } from './NavBarBtn';
import { 
    Cart,
    RightNav,
    LinkStyled,
    Logo,
    Navigation, 
    NavLinks,
    Profile,
    LeftNav,
    NavBar,
    NavColumn,
    BackgroundShadow,
    CartNav,
    CartNaContainer
} from '../../styled/UI/nav';
import Link from 'next/link';

export const Nav = () => {
    const [openNavbar, setOpenNavbar] = useState(false);
    const [cartHover, setCartHover] = useState(false);

    return (
        <Navigation>
            {
                openNavbar &&
                <BackgroundShadow></BackgroundShadow>
            }
            <NavBar 
                style={{
                    transform: openNavbar ? "translateX(0%)" : "translateX(-100%)"
                }}
            >
                <NavColumn>
                    <Link href="/" className='enlace'>Collections</Link>
                    <Link href="/" className='enlace'>Men</Link>
                    <Link href="/" className='enlace'>Women</Link>
                    <Link href="/" className='enlace'>About</Link>
                    <Link href="/" className='enlace'>Contact</Link>
                </NavColumn>
            </NavBar>
            <LeftNav>
                <NavBarBtn
                    isHover={ openNavbar }
                    setIsHover={ setOpenNavbar }
                />
                <Logo href="/">sneakers</Logo>
            </LeftNav>
            <NavLinks>
                <LinkStyled>Collections</LinkStyled>
                <LinkStyled>Men</LinkStyled>
                <LinkStyled>Women</LinkStyled>
                <LinkStyled>About</LinkStyled>
                <LinkStyled>Contact</LinkStyled>
            </NavLinks>
            <RightNav>
                <Cart
                    onMouseOver={ () => setCartHover( true ) }
                    onMouseLeave={ () => setCartHover( false ) }
                >
                    <Image 
                        src="/icons/icon-cart.svg"
                        alt='Icono carrito'
                        width={ 25 }
                        height={ 25 }
                    />
                    {
                        cartHover &&
                        <CartNaContainer>
                            <CartNav>
                                <p className='title'>Cart</p>
                                <p className='empty'>Your cart is empty.</p>
                            </CartNav>
                        </CartNaContainer>
                    }
                </Cart>
                <Profile>
                    <Image 
                        src="/img/static/image-avatar.png"
                        width={ 50 }
                        height={ 50 }
                        alt="Perfil"
                    />
                </Profile>
            </RightNav>
        </Navigation>
    )
}
