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
        
    }
    .white{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 1;
        &:hover {
            background: #ffffff60;
        }
    }

    img{
        object-fit: cover;
    }
`

export const ImgGallery: FC<Props> = ({ src, setImages, image }) => {
    
    return (
        <ImageContainer
            onClick={ () => setImages( src ) }
            hover={ src === image }
        >
            <div 
                className='white'
                style={{
                    background: image === src ? "#ffffffa2" : "" 
                }}    
            ></div>
            <Image 
                src={ src }
                alt="Image"
                fill
                
            />
        </ImageContainer>
    )
}
