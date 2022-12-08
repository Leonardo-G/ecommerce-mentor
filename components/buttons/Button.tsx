import React, { FC } from 'react'

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';

const ButtonCart = styled.button`
    color: #fff;
    background: hsl(26, 100%, 55%);
    font-weight: 700;
    border: none;
    padding: 15px 70px;
    border-radius: 6px;
    width: 100%;
    .icon {
        margin-right: 15px;
    }

    @media (max-width: 1280px ) {
        width: 100%;
        padding: 15px 0px;
    }
    
    @media (max-width: 920px) {
        font-size: 14px;
    }
`

interface Props {
    title: string;
    icon?: boolean;
    iconSvg?: IconDefinition;
    eventClick?: () => void;
}

export const Button: FC<Props> = ({ title, icon, iconSvg, eventClick }) => {

    if ( icon ) {
        return (
            <ButtonCart onClick={ eventClick }>
                <FontAwesomeIcon 
                    icon={ iconSvg! }
                    className="icon"
                />
                { title }
            </ButtonCart>
        )
    }

    return (
        <ButtonCart onClick={ eventClick }>{ title }</ButtonCart>
    )
}
