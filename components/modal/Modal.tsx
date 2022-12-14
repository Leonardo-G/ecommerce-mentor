import React, { FC } from 'react'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { productDB } from '../../db/product'
import { Gallery } from '../gallery/Gallery'
import { 
    CloseModal, 
    ImageContainer, 
    LeftButton, 
    ModalLayout, 
    ModalMedia
} from '../../styled/modal/modal'
import { ButtonRight } from '../buttons/ButtonRight'
import { ButtonLeft } from '../buttons/ButtonLeft';


interface Props {
    image: string;
    setImage: React.Dispatch<React.SetStateAction<string>>;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal:FC<Props> = ({ image, setImage, setModalOpen }) => {
    
    const changeImage = (type: "next" | "previous") => {
        let idxImage: number;
        let nextImage: string;
        let previousImage: string;
        
        productDB.images.forEach(( img, idx ) => {
            if(img === image){
                idxImage = idx;
                return;
            }
        })

        if ( type === "next" ){
            nextImage = productDB.images.filter( (image, idx) => {
                if ( idxImage + 1 >= productDB.images.length ) return 0 === idx;
                if ( idx === idxImage + 1 ) return idx;
            })[0];

            setImage( nextImage );
            return;
        }

        previousImage = productDB.images.filter( (image, idx) => {
            if ( idxImage - 1 <= -1 ) return 3 === idx;
            if ( idx === idxImage - 1 ) {
                if ( idx === 0 ) return 1;
                return idx
            };
        })[0];
        
        setImage( previousImage );

    } 

    return (
        <ModalLayout>
            <ModalMedia>
                <CloseModal
                    onClick={ () => setModalOpen(false) }    
                >
                    <FontAwesomeIcon className='icon' icon={ faXmark }/>
                </CloseModal>
                <ButtonRight 
                    event={ () => changeImage("next") }
                />
                <ButtonLeft 
                    event={ () => changeImage("previous") }
                />
                
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
