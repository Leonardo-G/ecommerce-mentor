import React, { useState } from 'react';

import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import { productDB } from '../../db/product';
import { addProduct } from "../../reducers/cart/cartSlice";

import { 
    Brand, 
    ButtonCart, 
    ButtonQuantity, 
    Description, 
    Discount, 
    PreviousPrice, 
    Price, 
    ProductCart, 
    Quantity, 
    QuantityContainer, 
    Title 
} from '../../styled/product/productDetail';
import { Button } from '../buttons/Button';

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
                <Button 
                    title='Add to cart'
                    icon
                    iconSvg={ faCartShopping }
                    eventClick={ handleAddProduct }

                />
                {/* <ButtonCart
                    onClick={ handleAddProduct }
                >
                    <FontAwesomeIcon className='icon' icon={ faCartShopping }/>
                    Add to cart
                </ButtonCart> */}
            </ProductCart>
        </>
    )
}