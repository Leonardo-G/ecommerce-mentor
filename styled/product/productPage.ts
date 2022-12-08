import styled from "styled-components"

export const Section = styled.section`
    margin: 100px 50px;
    display: flex;
    align-items: center;
    column-gap: 150px;

    @media (max-width: 1280px){
        column-gap: 50px;
        margin: 100px 0px;
    }

    @media (max-width: 720px){
        flex-direction: column;
        margin: 0px;
    }
`

export const FlexLeft = styled.div`
    flex: 0.8;
    @media (max-width: 720px){
        width: 100%;
        flex: 1;
        position: relative;
    }
`
export const ImageContainer = styled.div`
    position: relative;
    height: 550px;
    img{
        border-radius: 20px;
        object-fit: cover;
        height: 100%;
    }

    @media (max-width: 920px){
        height: 350px;
    }

    @media (max-width: 720px){
        width: 100%;
        object-fit: contain;
        height: 100%;
        img{
            position: inherit !important;
            border-radius: 0px;
            height: 100%;
            min-height: 400px;
            max-height: 550px;
        }
    }
`

export const FlexRight = styled.div`
    flex: 1;

    @media (max-width: 720px){
        margin: 0px;
        padding: 30px 15px;
    }
`

export const RightButton = styled.div`
    position: relative;
    position: absolute;
    top: 50%;"
    transform: translateY(-50%);"
    right: 15px;
    z-index: 99;
    background #fff;
    width: 30px;
    height: 30px;
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
        display: none;
    }
`

export const LeftButton = styled.div`
    position: relative;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
    z-index: 99;
    background #fff;
    width: 30px;
    height: 30px;
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
        display: none;
    }
`