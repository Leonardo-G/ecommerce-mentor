import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { ImgGallery } from './ImgGallery';

const ContainerGallery = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`

interface Props {
    gallery: string[];
    setImage: React.Dispatch<React.SetStateAction<string>>;
    image: string;
}

export const Gallery: FC<Props> = ({ gallery, setImage, image }) => {


    return (
        <ContainerGallery>
            {
                gallery.map(( g, idx) => (
                    <ImgGallery 
                        key={ idx } 
                        src={ g }
                        setImages={ setImage }
                        image={ image }
                    />
                ))
            }
        </ContainerGallery>
    )
}
