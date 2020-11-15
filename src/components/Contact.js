import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Styles = styled.div`

    .PIcontact {
        display: -webkit-flex; /* Safari */
        display: flex;
        padding-bottom: 0%;
        padding-top: 3%;
        max-width: 800px;
        margin: auto;
    }
    header h3 {
        font-weight: bold;
        font-size: 30px;
        letter-spacing: -0.5px;
        color: #FEFFFF;
    }
    .contt {
        font-weight: 500;
        font-size: 20px;
        width: 100%;
        letter-spacing: -0.5px;
        text-align: center;
    }

`;

export const Contact = () => (
    <Container>
        <Styles>
            <div className="PIcontact">
                <header><h3>Contact Me :</h3></header>
            </div>
            <div className="PIcontact">
                <p className="contt">
                    Connect with me on <a href="https://www.linkedin.com/in/tqzmatt/" target="_blank" rel="noopener noreferrer">LinkedIn!</a><br/>
                    Check out my <a href="https://github.com/zhangtia" target="_blank" rel="noopener noreferrer">Github!</a><br/>
                    Send me an email at <a href="mailto: zhangtia@umich.edu" target="_blank" rel="noopener noreferrer">zhangtia@umich.edu.</a><br/>
                </p>
            </div>
        </Styles>
    </Container>

)