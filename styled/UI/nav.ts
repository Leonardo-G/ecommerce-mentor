import styled from "styled-components"

export const Navigation = styled.div`
    display: flex;
    border-bottom: 1px solid hsl(220, 14%, 75%);
    justify-content: space-between;
    align-items:center;
    z-index: 999;
    @media (max-width: 720px){
        padding: 5px 20px;
    }
`

export const Logo = styled.a`
    font-weight: 700;
    font-size: 32px;
    color: #000;
    text-decoration: none;
    margin-bottom: 20px;
    letter-spacing: -1.5px;

    @media (max-width: 420px){
        font-size: 25px;
        margin-bottom: 15px;
    }
`

export const LeftNav = styled.div`
    display: flex;
    align-items: center;
`

export const NavLinks = styled.div`
    display: flex;
    column-gap: 30px;
    margin-left: 50px;
    flex: 2;

    @media (max-width: 920px) {
        display: none;
    }
`

export const LinkStyled = styled.a`
    padding: 40px 0px 50px 0px;
    cursor: pointer;
    border-bottom: 3px solid transparent;
    color: hsl(219, 9%, 45%);
    text-decoration: none;

    &:hover{
        border-bottom: 3px solid hsl(26, 100%, 55%);
        color: hsl(220, 13%, 13%);
    }

`

export const RightNav = styled.div`
    display: flex;
    column-gap: 40px;
    @media (max-width: 420px){
        column-gap: 10px;
    }
`

export const Cart = styled.div`
    position: relative;
    align-self: center;
    margin-bottom: 10px;
    cursor: pointer;
`

export const CartNaContainer = styled.div`
    position: relative;
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    min-height: 200px;
    width: 100%;
`

export const CartNav = styled.div`
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    min-width: 300px;
    min-height: 200px;
    background: #fff;
    border-radius: 16px;
    -webkit-box-shadow: 0px 20px 53px -9px rgba(0,0,0,0.43);
    -moz-box-shadow: 0px 20px 53px -9px rgba(0,0,0,0.43);
    box-shadow: 0px 20px 53px -9px rgba(0,0,0,0.43);
    .title{
        border-bottom: 1px solid hsl(220, 14%, 75%);
        font-weight: 700;
        padding: 20px; 
    }
    .empty {
        padding: 55px;
        text-align: center;
        color: hsl(219, 9%, 45%);
        font-weight: 700;
    }
`

export const Profile = styled.div`
    align-self: center;
    margin-bottom: 13px;
    img{
        border-radius: 50px;
        border: 2px solid transparent;
        cursor: pointer;
        &:hover{
            border: 2px solid hsl(26, 100%, 55%);
        }
    }
`

export const NavBar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    background: #fff;
    transition: all ease .2s;
    z-index: 999;
`

export const NavColumn = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    padding-left: 20px; 
    .enlace{
        font-size: 16px;
        color: #000;
        font-weight: 700;
        padding: 12.5px 0;
    }
`

export const BackgroundShadow = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000a3;
    z-index: 999;
`