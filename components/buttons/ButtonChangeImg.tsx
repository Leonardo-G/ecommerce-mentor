import React from 'react'
import styled from 'styled-components'

export const RightButton = styled.div`
    position: relative;
    position: absolute;
    top: 37.5%;
    right: -25px;
    z-index: 99;
    background #fff;
    width: 50px;
    height: 50px;
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
`

export const LeftButton = styled.div`
    position: relative;
    position: absolute;
    top: 37.5%;
    left: -25px;
    z-index: 99;
    background #fff;
    width: 50px;
    height: 50px;
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
`

export const ButtonChangeImg = () => {
    return (
        <div>ButtonChangeImg</div>
    )
}
