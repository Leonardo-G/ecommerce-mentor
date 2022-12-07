import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { NavBarBtn } from './NavBarBtn';
import { RootState } from '../../store/configureStore';
import { clearCart } from "../../reducers/cart/cartSlice";

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
    CartNaContainer,
    ContainerProductCart,
    ImageContainerCart,
    DetailProductCart,
    ContainerCartDiv
} from '../../styled/UI/nav';
import { Button } from '../buttons/Button';

export const Nav = () => {

    const dispatch = useDispatch()
    const [openNavbar, setOpenNavbar] = useState(false);
    const [cartHover, setCartHover] = useState(false);
    const { quantity, img, title, price } = useSelector( (state: RootState) => state.cart )

    const handleClearCart = () => {
        dispatch( clearCart() );
    }

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
                    onClick={ () => setCartHover( true ) }
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
                                {
                                    quantity === 0
                                    ?
                                        <p className='empty'>Your cart is empty.</p>
                                    :
                                        <ContainerCartDiv>
                                            <ContainerProductCart>
                                                <ImageContainerCart>
                                                    <Image 
                                                        alt='productCart'
                                                        src={ img }
                                                        fill
                                                    />
                                                </ImageContainerCart>
                                                <DetailProductCart>
                                                    <p className='description'>{ title }</p>
                                                    <p className='price'>
                                                        $ { price.toFixed(2) } x { quantity }
                                                        <span className='total'>$ { (quantity * price).toFixed(2) }</span>    
                                                    </p>
                                                </DetailProductCart>
                                                <FontAwesomeIcon 
                                                    icon={ faTrash }
                                                    className="icon"
                                                    onClick={ handleClearCart }  
                                                />
                                                
                                            </ContainerProductCart>
                                            <Button title='Checkout'/>
                                        </ContainerCartDiv>
                                }
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
