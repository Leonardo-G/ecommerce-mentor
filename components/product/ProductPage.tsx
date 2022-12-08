import React, { FC, useState } from 'react'
import Image from 'next/image'

import { productDB }from "../../db/product";
import { Modal } from '../modal/Modal';
import { Gallery } from '../gallery/Gallery';
import { ProductDetail } from './ProductDetail';

import { 
    FlexLeft,
    FlexRight,
    Section,
    ImageContainer,
    LeftButton,
    RightButton
} from '../../styled/product/productPage';
import { ButtonRight } from '../buttons/ButtonRight';
import { ButtonLeft } from '../buttons/ButtonLeft';

export const ProductPage: FC = () => {
    
    const [image, setImage] = useState( productDB.images[0] );
    const [modalOpen, setModalOpen] = useState( false );

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
        <Section>
            {
                modalOpen &&
                <Modal 
                    image={ image }
                    setImage={ setImage }
                    setModalOpen={ setModalOpen }
                />
            }
            <FlexLeft>
                <ButtonLeft 
                    responsive 
                    event={ () => changeImage("previous") }
                    width={ 35 }    
                />
                <ImageContainer
                    onClick={ () => setModalOpen( true ) }
                >
                    <Image
                        src={ image }
                        alt="Image"
                        fill
                    />
                </ImageContainer>
                <ButtonRight 
                    event={ () => changeImage("next") }
                    responsive
                    width={ 35 }
                />
                <Gallery
                    gallery={ productDB.images }
                    setImage={ setImage }
                    image={ image }  
                />
                
            </FlexLeft>
            <FlexRight>
                <ProductDetail />
            </FlexRight>
        </Section>
    )
}
