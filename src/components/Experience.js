import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Styles = styled.div`

    .PI {
        display: -webkit-flex; /* Safari */
        display: flex;
        padding-bottom: 0%;
        padding-top: 5%;
        max-width: 800px;
        margin: auto;
    }

    header h3 {
        font-weight: bold;
        font-size: 30px;
        letter-spacing: -0.5px;
        color: #FEFFFF;
    }

    .descript {
        font-weight: 400;
        font-size: 17.5px;
    }
    .descript_a {
        font-weight: 400;
        font-size: 17.5px;
        margin-bottom: 0;
    }
    .experience {
        width: 100%
    }

    .experience a {
        font-weight: 500;
        font-size: 25px;
    }

    .date {
        float: right;
        padding-top: 1%
    }


`;

export const Experience = () => (
    <Container>
        <Styles>
            <div>
                <div className="PI">
                    <header><h3>Work Experience :</h3></header>
                    <br/>
                </div>

                <div className="PI">
                    <div className="experience">
                        <a href="https://dijkstra.eecs.umich.edu/kleach/eecs484/f20/" target="_blank" rel="noopener noreferrer"> University of Michigan, College of Engineering</a>
                        
                        <span className="date">
                            August 2020 - Present
                        </span>
                        <p className="descript">Instructional Aide - EECS484 Database Management Systems</p>
                        <p className="descript_a">Skills: SQL, JavaScript, C++, Java, MongoDB, SQLite3</p>
                    </div>
                </div>

                <div className="PI">
                    <div className="experience">
                        <a href="https://openwatervc.com/" target="_blank" rel="noopener noreferrer"> Open Water Venture Capital</a>
                        
                        <span className="date">
                            June 2020 - August 2020
                        </span>
                        <p className="descript">Fullstack Developer Intern, OffChance Mobile App team</p>
                        <p className="descript_a">Skills: Javascript, Python, React Native, RESTful API, MongoDB, IBM Cloud, Twilio, SendGrid, Stripe</p>
                    </div>
                </div>

                <div className="PI">
                    <div className="experience">
                        <a href="http://www.starcharge.com/" target="_blank" rel="noopener noreferrer"> Star Charge, Wanbang New Energy Investment Group</a>
                        
                        <span className="date">
                            May 2019 - August 2019
                        </span>
                        <p className="descript">Data Engineer Intern, Cloud Platform Team</p>
                        <p className="descript_a">Skills: SQL, Java, C++, MongoDB, MySQL, Oracle</p>
                    </div>
                </div>
                
                
            </div>
            <hr/>
        </Styles>
    </Container>

)