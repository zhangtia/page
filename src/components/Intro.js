import React from 'react';
import styled from 'styled-components';
import { Container, Image } from 'react-bootstrap';
import Headshot from '../assets/hs.png';

const Styles = styled.div`
    .test {
        background-color: red;
    }

    .PI {
        display: -webkit-flex; /* Safari */
        display: flex;
        padding-bottom: 5%;
        padding-top: 10%;
        max-width: 800px;
        margin: auto;
    }

    .left {
        -webkit-flex-grow: 0; /* Safari 6.1+ */
        -webkit-flex-shrink: 0; /* Safari 6.1+ */
        -webkit-flex-basis: 30%; /* Safari 6.1+ */
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 60%;
      }

    .right {
        -webkit-flex-grow: 0; /* Safari 6.1+ */
        -webkit-flex-shrink: 0; /* Safari 6.1+ */
        -webkit-flex-basis: 70%; /* Safari 6.1+ */
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 40%;
    }
    header h1 {
        font-weight: bold;
        font-size: 60px;
        letter-spacing: -0.5px;
        color: #FEFFFF;
    }

    .myLinks {
        font-weight: 500;
        font-size: 20px;
    }

    a {
        text-decoration: None;
    }

`;

export const Intro = () => (
    <Container>
        <Styles>
            <div className="PI">
                <div className="left">
                    <a name="home"></a>
                    <header><h1>Tianqi Zhang</h1></header>
                    <p className="myLinks">
                        <a href="mailto: zhangtia@umich.edu" target="_blank" rel="noopener noreferrer">zhangtia@umich.edu</a> <br/>
                    </p>
                    <p className="myLinks">
                        - <a href="https://zhangtia.github.io/static/media/MatthewTQZhang.pdf" target="_blank" rel="noopener noreferrer">Resume</a> <br/>
                        - <a href="https://github.com/zhangtia" target="_blank" rel="noopener noreferrer">Github</a>, <a href="https://www.linkedin.com/in/tqzmatt/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </p>
                </div>
                <div className="right"><Image src={Headshot} roundedCircle style={{ width: '100%' }} /></div>
            </div>
            <hr/>
        </Styles>
    </Container>

)