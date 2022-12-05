import React, { FC, useState } from 'react'
import Image from 'next/image'

import styled from 'styled-components'

import { productDB }from "../../db/product";
import { Gallery } from '../gallery/Gallery';
import { Modal } from '../modal/Modal';
import { ProductDetail } from './ProductDetail';

const Section = styled.section`
    margin: 100px 50px;
    display: flex;
    align-items: center;
    column-gap: 150px;

    @media (max-width: 1280px){
        column-gap: 50px;
        margin: 100px 0px;
    }

    @media (max-width: 720px){
        flex-direction: column;
        margin: 0px;
    }
`

const FlexLeft = styled.div`
    flex: 0.8;
    @media (max-width: 720px){
        width: 100%;
        flex: 1;
    }
`
const ImageContainer = styled.div`
    position: relative;
    height: 550px;
    img{
        border-radius: 20px;
        object-fit: cover;
        height: 100%;
    }

    @media (max-width: 920px){
        height: 350px;
    }

    @media (max-width: 720px){
        width: 100%;
        object-fit: contain;
        height: 100%;
        img{
            position: inherit !important;
            border-radius: 0px;
            height: 100%;
            min-height: 400px;
            max-height: 550px;
        }
    }
`

const FlexRight = styled.div`
    flex: 1;

    @media (max-width: 720px){
        margin: 0px;
        padding: 30px 15px;
    }
`

export const ProductPage: FC = () => {
    
    const [image, setImage] = useState( productDB.images[0] );
    const [modalOpen, setModalOpen] = useState( false );

    return (
        <Section>
            {
                modalOpen &&
                <Modal 
                    image={ image }
                    setImage={ setImage }
                    setModalOpen={ setModalOpen }
                />
            }
            <FlexLeft>
                <ImageContainer
                    onClick={ () => setModalOpen( true ) }
                >
                    <Image
                        src={ image }
                        alt="Image"
                        fill
                    />
                </ImageContainer>
                <Gallery
                    gallery={ productDB.images }
                    setImage={ setImage }
                    image={ image }  
                />
                
            </FlexLeft>
            <FlexRight>
                <ProductDetail />
            </FlexRight>
        </Section>
    )
}
