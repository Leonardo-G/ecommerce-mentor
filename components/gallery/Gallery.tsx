import React, { FC } from 'react'
import styled from 'styled-components'
import { ImgGallery } from './ImgGallery';

const ContainerGallery = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`

interface Props {
    gallery: string[];
}


export const Gallery: FC<Props> = ({ gallery }) => {
    return (
        <ContainerGallery>
            {
                gallery.map(( g, idx) => (
                    <ImgGallery key={ idx } src={ g }/>
                ))
            }
        </ContainerGallery>
    )
}
