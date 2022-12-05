import styled from "styled-components"

export const ModalLayout = styled.div`
    position: relative;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000b2;
    z-index: 9;
    @media (max-width: 720px){
        display: none;
    }
`

export const ModalMedia = styled.div`
    position: relative;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );
`
export const ImageContainer = styled.div`
    position: relative;
    height: 650px;
    width: 650px;
    img{
        border-radius: 20px;
        object-fit: cover;
        height: 100%;
    }
`

export const CloseModal = styled.div`
    position: absolute;
    top: -40px;
    right: 5px;
    z-index: 99;
    cursor: pointer;
    .icon{
        font-size: 25px;
        color: hsl(26, 100%, 55%);
    }
`

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