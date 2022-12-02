import styled from "styled-components"

export const Navigation = styled.div`
    display: flex;
    border-bottom: 1px solid hsl(220, 14%, 75%);
    justify-content: space-between;
` 

export const Logo = styled.a`
    font-weight: 700;
    font-size: 32px;
    color: #000;
    text-decoration: none;
    margin-top: 28px;
    letter-spacing: -1.5px;
`

export const NavLinks = styled.div`
    display: flex;
    column-gap: 30px;
    margin-left: 50px;
    flex: 2;
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

export const LeftNav = styled.div`
    display: flex;
    column-gap: 40px;
`

export const Cart = styled.div`
    align-self: center;
    margin-bottom: 10px;
    cursor: pointer;
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