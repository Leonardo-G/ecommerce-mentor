import Image from 'next/image';
import React, { FC } from 'react'
import styled from 'styled-components';

interface Props {
    src: string;
    setImages: React.Dispatch<React.SetStateAction<string>>;
    image: string;
}

const ImageContainer = styled.div`
    position: relative;
    height: 115px;
    width:  115px;
    cursor: pointer;
    border-radius: 10px;
    overflow:hidden;
    border: ${({ hover }: { hover: boolean }) => hover ? "2px solid hsl(26, 100%, 55%)" :  "2px solid transparent"};
    
    &:hover{
        border: 2px solid hsl(26, 100%, 55%);
    }

    img{
        object-fit: cover;
        &:hover{
            filter: opacity(35%);
        }
    }
`

export const ImgGallery: FC<Props> = ({ src, setImages, image }) => {
    return (
        <ImageContainer
            onClick={ () => setImages( src ) }
            hover={ src === image }
        >
            <Image 
                src={ src }
                alt="Image"
                fill
                style={{
                    filter: image === src ? "opacity(35%)" : "opacity(100%)" 
                }}
            />
        </ImageContainer>
    )
}
