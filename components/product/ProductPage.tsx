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
    ImageContainer
} from '../../styled/product/productPage';

export const ProductPage: FC = () => {
    
    const [image, setImage] = useState( productDB.images[0] );
    const [modalOpen, setModalOpen] = useState( false );

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
                <ImageContainer
                    onClick={ () => setModalOpen( true ) }
                >
                    <Image
                        src={ image }
                        alt="Image"
                        fill
                    />
                </ImageContainer>
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
