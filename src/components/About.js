import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Styles = styled.div`

    .PI {
        display: -webkit-flex; /* Safari */
        display: flex;
        padding-bottom: 3%;
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
    .intro {
        font-weight: 400;
        font-size: 20px;
        letter-spacing: -0.5px;
        
    }

`;

export const About = () => (
    <Container>
        <Styles>
            <div className="PI">
                <div>
                    <a name="about"></a>
                    <header><h3>About :</h3></header>
                    <p className="intro">
                        Hi! I'm an undergraduate student at the University of Michigan, Ann Arbor, 
                        majoring in Computer Science with a minor in Material Science and Engineering. 
                        I am currently working as a Instructional Aide (Teaching Assistant) 
                        for EECS484 Database Management Systems with 
                        <a href="https://web.eecs.umich.edu/~mozafari/" target="_blank" rel="noopener noreferrer"> Prof. Barzan Mozafari</a> and 
                        <a href="https://kjleach.eecs.umich.edu/" target="_blank" rel="noopener noreferrer"> Prof. Kevin Leach</a>.
                        <br/><br/>
                        I have interned as a Fullstack Engineer and a Data Engineer and relevant courses 
                        I have taken include EECS482 Intro to Operating Systems, EECS484 Database Management Systems,
                        EECS485 Web Systems, EECS445 Intro to Machine Learning, EECS388 Intro to Computer Security, EECS370 Intro to Computer Organization,
                        EECS281 Data Structures and Algorithms.
                    </p>
                </div>
            </div>
            <hr/>
        </Styles>
    </Container>

)