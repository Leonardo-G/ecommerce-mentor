import React, { FC } from 'react'
import Image from 'next/image'

import styled from 'styled-components'

import { productDB }from "../../db/product";
import { Gallery } from '../gallery/Gallery';

const Section = styled.section`
    margin: 100px 0;
    display: flex;
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

const FlexLeft = styled.div`
    flex: 0.7;
`

export const ProductPage: FC = () => {
    return (
        <Section>
            <FlexLeft>
                <ImageContainer>
                    <Image
                        src={ productDB.images[0] }
                        alt="Image"
                        fill
                    />
                </ImageContainer>
                <Gallery gallery={ productDB.images }/>
            </FlexLeft>
            <div style={{ flex: 1 }}></div>
        </Section>
    )
}
