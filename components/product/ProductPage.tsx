import React, { FC, useState } from 'react'
import Image from 'next/image'

import styled from 'styled-components'

import { productDB }from "../../db/product";
import { Gallery } from '../gallery/Gallery';
import { Modal } from '../modal/Modal';

const Section = styled.section`
    margin: 100px 0;
    display: flex;
`

const FlexLeft = styled.div`
    flex: 0.7;
`
const ImageContainer = styled.div`
    position: relative;
    height: 550px;
    img{
        border-radius: 20px;
        object-fit: cover;
        height: 100%;
    }
`

export const ProductPage: FC = () => {
    
    const [image, setImage] = useState( productDB.images[0] );

    return (
        <Section>
            <Modal 
                image={ image }
                setImage={ setImage }
            />
            <FlexLeft>
                <ImageContainer>
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
            <div style={{ flex: 1 }}></div>
        </Section>
    )
}
