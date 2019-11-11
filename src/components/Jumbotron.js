import React from 'react';
import { Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import hi from '../assets/hi.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${hi}) no-repeat fixed bottom;
        background-size: cover;
        color #ccc;
        height: 200px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Welcome, Webpage in development!</h1>
                <p>Last Edit : 11 Nov 2019 15:54:07  --  Changed footer, hopefully works in mobile</p>
            </Container>
        </Jumbo>
    </Styles>
)
