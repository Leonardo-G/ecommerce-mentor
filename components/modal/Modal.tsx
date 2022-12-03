import Image from 'next/image'
import React, { FC } from 'react'
import styled from 'styled-components'
import { productDB } from '../../db/product'
import { Gallery } from '../gallery/Gallery'

const ModalLayout = styled.div`
    position: relative;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000b2;
    z-index: 9;
`

const ModalMedia = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );
`
const ImageContainer = styled.div`
    position: relative;
    height: 650px;
    width: 650px;
    img{
        border-radius: 20px;
        object-fit: cover;
        height: 100%;
    }
`

interface Props {
    image: string;
    setImage: React.Dispatch<React.SetStateAction<string>>;
}

export const Modal:FC<Props> = ({ image, setImage }) => {
    return (
        <ModalLayout>
            <ModalMedia>
                <ImageContainer>
                    <Image
                        src={ image }
                        alt="Image"
                        fill
                    />
                </ImageContainer>
                <Gallery 
                    gallery={ productDB.images }
                    image={ image }
                    setImage={ setImage }
                    center
                />
            </ModalMedia>
        </ModalLayout>
    )
}
