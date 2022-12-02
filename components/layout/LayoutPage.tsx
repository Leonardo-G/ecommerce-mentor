import React, { FC, ReactNode } from 'react';
import styled from "styled-components";
import { Nav } from '../UI/Nav';

const Container = styled.div`
    width: min( 95%, 1440px );
    margin: 0px auto;
`

interface Props {
    children: ReactNode
}

const LayoutPage: FC<Props> = ({ children }) => {
    return (
        <Container>
            <header>
                <Nav />
            </header>
            <main>
                { children }
            </main>
        </Container>
    )
}

export default LayoutPage