import Image from 'next/image';
import React, { FC } from 'react'
import styled from 'styled-components';

interface Props {
    src: string;
}

const ImageContainer = styled.div`
    position: relative;
    height: 500px;
    img{
        border-radius: 20px;
        object-fit: contain;
        width: auto !important;
    }
`

export const ProductImg: FC<Props> = ({ src }) => {
    return (
        <ImageContainer>
            <Image 
                src={ src }
                alt="Image"
                fill
            />
        </ImageContainer>
    )
}
