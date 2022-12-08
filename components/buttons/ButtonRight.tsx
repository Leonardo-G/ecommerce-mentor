import React, { FC } from 'react'

import styled from 'styled-components'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const RightButton = styled.div`
    position: relative;
    position: absolute;
    top: ${ ({ width, responsive }: { width?: number, responsive?: boolean }) => responsive ? "50%" : "37.5%" };
    right: ${ ({ width, responsive }: { width?: number, responsive?: boolean }) => responsive ? "15px" : "-25px" };
    z-index: 99;
    background #fff;width: ${ ({ width, responsive }: { width?: number, responsive?: boolean }) => width ? `${width}px` : "50px" };
    transform: ${ ({ width, responsive }: { width?: number, responsive?: boolean }) => responsive ? "translateY(-50%)" : "" };
    height: ${ ({ width, responsive }: { width?: number, responsive?: boolean }) => width ? `${width}px` : "50px" };
    border-radius: 50px;
    cursor: pointer;

    &:hover{
        color: hsl(26, 100%, 55%);
    }

    .icon{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }
    
    @media (min-width: 720px){
        display: ${ ({ width, responsive }: { width?: number, responsive?: boolean }) => responsive ? "none" : "inherit" };
    }
`

interface Props {
    event: () => void;
    width?: number;
    responsive?: boolean;
}

export const ButtonRight: FC<Props> = ({ event, responsive = false, width }) => {
    return (
        <RightButton onClick={ event } responsive={ responsive } width={ width }>
            <FontAwesomeIcon 
                icon={ faChevronRight }
                className="icon"
            />
        </RightButton>
    )
}
