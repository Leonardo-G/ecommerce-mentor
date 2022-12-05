import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { ImgGallery } from './ImgGallery';

const ContainerGallery = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: ${ ({ center }: { center?: boolean }) => center ? "center" : "space-between" };
    column-gap: ${ ({ center }: { center?: boolean }) => center ? "30px" : "" };

    @media (max-width: 720px){
        display: none;
    }
`

interface Props {
    gallery: string[];
    setImage: React.Dispatch<React.SetStateAction<string>>;
    image: string;
    center?: boolean;
}


export const Gallery: FC<Props> = ({ gallery, setImage, image, center = false }) => {


    return (
        <ContainerGallery center={ center }>
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
