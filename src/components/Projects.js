import React from 'react';
import styled from 'styled-components';
import { Container, Image } from 'react-bootstrap';
import Netspot from '../assets/netspot.png';
import Offchance from '../assets/offchance.png';
import OffchanceVid from '../assets/OC_FullVersion.mp4';
import Alexa from '../assets/alexa.png';

const Styles = styled.div`

    .PI {
        display: -webkit-flex; /* Safari */
        display: flex;
        padding-bottom: 0%;
        padding-top: 3%;
        max-width: 800px;
        margin: auto;
    }

    .PIx {
        display: -webkit-flex; /* Safari */
        display: flex;
        padding-bottom: 2.5%;
        padding-top: 2.5%;
        max-width: 800px;
        margin: auto;
    }

    header h3 {
        font-weight: bold;
        font-size: 30px;
        letter-spacing: -0.5px;
        color: #FEFFFF;
    }

    .pleft {
        -webkit-flex-grow: 0; /* Safari 6.1+ */
        -webkit-flex-shrink: 0; /* Safari 6.1+ */
        -webkit-flex-basis: 30%; /* Safari 6.1+ */
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 40%;
        padding-left: 5%;
    }

    .pright {
        -webkit-flex-grow: 0; /* Safari 6.1+ */
        -webkit-flex-shrink: 0; /* Safari 6.1+ */
        -webkit-flex-basis: 70%; /* Safari 6.1+ */
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 60%;
        padding-right: 3%;
        padding-left: 3%;
    }

    a h4 {
        font-weight: 500;
        font-size: 25px;
    }

    a p {
        font-weight: 500;
        color: black;
        padding-left: 2%
    }

    a:hover {
        background-color: blue;
        color: black;
    }

    video {
        height: 300;
    }

`;

export const Projects = () => {
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(!showResults)
    return (
    <Container>
        <Styles>
            <div>
                <div className="PI">
                    <a name="projects"></a>
                    <header><h3>Projects :</h3></header>
                </div>

                <a className="PIx" onClick={onClick}>
                    <div className="pleft">
                        <Image src={Offchance} style={{ width: '100%' }} /> 
                    </div>
                    <div className="pright">
                        <h4>OffChance Mobile App</h4>
                        <p>Full Stack mobile app for Summer 2020 internship. 
                            Designed and developed React Native app with Javascript frontend 
                            and Node.JS RESTful API.</p>
                        <p>App is currently undergoing beta testing on TestFlight.</p>
                        <p>Click here to watch a demo video!</p>
                    </div>
                </a>
                {showResults && <div className="PIx">
                    <video src={OffchanceVid} width="100%" height="100%" controls="controls" autoPlay="true" />
                </div>}
                <a href="https://zhangtia.github.io/Spotify-Netease-Importer/#" className="PIx">
                    <div className="pleft">
                        <Image src={Netspot} style={{ width: '100%' }} /> 
                    </div>
                    <div className="pright">
                        <h4>Spotify-Netease Music Importer</h4>
                        <p>React app to import music from Netease Music to Spotify. Utilizes Spotify Web API to search and create an imported playlist</p>
                        <p>Developed this app as I wanted to transfer my own music over from Netease and no music transfer app supported Netease.</p>
                        <p>Click here to try it out!</p>
                    </div>
                </a>

                <a href="https://medium.com/voice-tech-podcast/alexa-when-is-the-next-bus-620e1aba9474" className="PIx">
                    <div className="pleft">
                        <Image src={Alexa} style={{ width: '100%' }} /> 
                    </div>
                    <div className="pright">
                        <h4>BlueBus Alexa Skill</h4>
                        <p>Echo Dot Alexa skill to plan commute for University of Michigan, Ann Arbor students. Written in Python with AWS Lambda and won first place in 2019 U-M Makeathon: Amazon Voice Tech Competition.</p>
                        <p>Click to check out a Medium article about it!</p>
                    </div>
                </a>

                
                
            </div>
            <hr/>
        </Styles>
    </Container>
    )
}