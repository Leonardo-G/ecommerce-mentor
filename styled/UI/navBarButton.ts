import styled from "styled-components";

export const NavBarButton = styled.div`
    cursor: pointer;
    margin-right: 30px;
    z-index: 999;
    .navbar{
        width: 25px;
        height: 3px;
        background: hsl(219, 9%, 45%);
        border-radius: 6px;
        position: relative;
        margin-bottom: 20px;
        transition: .3s all ease;
        &:before{
            content: "";
            position: absolute;
            top: 200%;
            left: 0;
            width: 25px;
            height: 3px;
            background: hsl(219, 9%, 45%);
            transition: .3s all ease;
        }
        &:after{
            content: "";
            position: absolute;
            top: 400%;
            left: 0;
            width: 25px;
            height: 3px;
            background: hsl(219, 9%, 45%);
            transition: .3s all ease;
        }
    }
    .openNavBar{
        background: #fff;
        transition: .3s all ease;
        &:after{
            transform: rotate(45deg);
            transition: .3s all ease;
        }
        &:before{
            transform: rotate(135deg);
            transition: .3s all ease;
            top: 350%;
        }
    }
    @media (min-width: 920px){
        display: none;
    }

    @media (max-width: 420px){
        margin-right: 10px;
    }
`