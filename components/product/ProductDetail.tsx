import React, { useState } from 'react';
import styled from 'styled-components';

import { productDB } from '../../db/product';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../reducers/cart/cartSlice";

const Brand = styled.p`
    letter-spacing: 2px;
    color: hsl(26, 100%, 55%);
    text-transform: uppercase;
    font-weight: 700;

    @media (max-width: 920px) {
        font-size: 14px;
    }
`

const Title = styled.h1`
    font-size: 50px;
    font-weight: 700;
    text-transform: capitalize;
    margin-top: 30px;

    @media (max-width: 920px) {
        font-size: 24px;
    }
`

const Description = styled.p`
    font-size: 16px;
    color: hsl(219, 9%, 45%);
    line-height: 2;
    margin-top: 30px;
    width: 75%;
    word-spacing: 1.5px;
    @media (max-width: 920px) {
        font-size: 14px;
    }
    @media (max-width: 420px){
        width: 100%;
    }
`

const Price = styled.p`
    font-size: 30px;
    font-weight: 700;
    margin-top: 30px;
    display: flex;
    align-items: center;
    column-gap: 20px;
    @media (max-width: 920px) {
        font-size: 20px;
    }
`

const Discount = styled.span`
    background: hsl(25, 100%, 94%);
    color: hsl(26, 100%, 55%);
    padding: 3px 7px;
    border-radius: 6px;

    @media (max-width: 920px) {
        font-size: 14px;
    }
`

const PreviousPrice = styled.p`
    color: hsl(220, 14%, 75%);
    margin-top: 10px;
    text-decoration: line-through;
    font-weight: 700;
`

const ProductCart = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
    
    @media (max-width: 720px) {
        flex-direction: column;
    }
`

const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    background: hsl(223, 64%, 98%);
    column-gap: 30px;
    padding: 10px 20px;
    border-radius: 6px;
`

const ButtonQuantity = styled.button`
    color: hsl(26, 100%, 55%);
    background: transparent;
    border: none;
    font-size: 30px;
    cursor: pointer;
    padding-bottom: 6px;
    font-weight: 700;
` 

const Quantity = styled.p`
    color: #000;
    font-weight: 700;
    font-size: 20px;
    
    @media (max-width: 920px) {
        font-size: 16px;
    }
`

const ButtonCart = styled.button`
    color: #fff;
    background: hsl(26, 100%, 55%);
    font-weight: 700;
    border: none;
    padding: 15px 70px;
    border-radius: 6px;
    .icon {
        margin-right: 15px;
    }

    @media (max-width: 1280px ) {
        width: 100%;
        padding: 15px 0px;
    }
    
    @media (max-width: 920px) {
        font-size: 14px;
    }
`

export const ProductDetail = () => {

    const dispatch = useDispatch(); 
    const [quantity, setQuantity] = useState(0);

    const handleAddProduct = () => {
        dispatch( addProduct({
            quantity: quantity,
            title: productDB.title,
            img: productDB.images[0],
            price: productDB.price
        }) )
    }

    const addQuantity = () => {
        setQuantity( quantity + 1 );
    }

    const removeQuantity = () => {
        if ( quantity === 0 ) return;
        setQuantity( quantity - 1 );
    }

    return (
        <>
            <Brand>sneaker company</Brand>
            <Title>fall limited edition sneakers</Title>
            <Description>
                These low-profile sneakers are your perfect casual
                wear companion. Featuring a durable rubber outer sole, 
                they'll withstand everything the weather can offer.
            </Description>   
            <Price>
                ${ productDB.price.toFixed(2) }
                <Discount>50%</Discount>    
            </Price>
            <PreviousPrice>
                $250.00
            </PreviousPrice>
            <ProductCart>
                <QuantityContainer>
                    <ButtonQuantity onClick={ removeQuantity }>-</ButtonQuantity>
                    <Quantity>{ quantity }</Quantity>
                    <ButtonQuantity onClick={ addQuantity }>+</ButtonQuantity>
                </QuantityContainer>
                <ButtonCart
                    onClick={ handleAddProduct }
                >
                    <FontAwesomeIcon className='icon' icon={ faCartShopping }/>
                    Add to cart
                </ButtonCart>
            </ProductCart>
        </>
    )
}