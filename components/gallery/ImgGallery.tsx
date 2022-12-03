import Image from 'next/image';
import React, { FC } from 'react'
import styled from 'styled-components';

interface Props {
    src: string;
}

const ImageContainer = styled.div`
    position: relative;
    height: 115px;
    width:  115px;
    img{
        border-radius: 10px;
        object-fit: contain;
    }
`

export const ImgGallery: FC<Props> = ({ src }) => {
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
