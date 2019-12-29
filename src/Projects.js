import React from 'react';
import './Projects.css';
import { Image } from 'react-bootstrap';
import Bracket from './assets/ctb.png';

export const Project = () => (
    <div>
        <div class="titlep">
            <h2>Welcome to my Project Page!</h2>
        </div>


        <div class="wrapper">
            <div class="leftp">
                <h4>Capture the Breaker! Tournament Generator</h4>
            </div>
            <div class="rightp">
                <ul>
                    <li>Created a webapp for annual "Capture the Breaker!" breakdance competition by our dance group, Element 1</li>
                    <li>Utilized <b>Spring Boot to create a back-end microservice</b>, front-end implemented by <b>React</b> and deployed to <b>Heroku</b></li>
                    <li>Webapp handles logistics fo the tournament: sign-up, preliminary and knockout stages</li>
                    <li>Will implement other battle formats as we organise more competitions (e.g. 7 to smoke)</li>
                </ul>
            </div>
            <div class="bktp">
                <a href="https://morning-depths-35258.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Image src={Bracket} rounded style={{ width: '100%' }} /></a>
            </div>
            <div class="whyp">
                Why?
            </div>
            <div class="whyansp">
                Capture the Breaker has a unique format: The winning team will 'capture' a member from the losing team and progress.
                To ensure the finals consisted of the best (top 10) breakers, a crewmate wrote his own algorithm based on the preliminary seeding.
                I decided to write a webapp to integrate the algorithm and automate the tournament process. This project combines two of my interests: Coding and Breaking
            </div>
            <div class="wherep">
                Where?
            </div>
            <div class="whereansp">
                <p>Check out <a href="https://morning-depths-35258.herokuapp.com/" target="_blank" rel="noopener noreferrer">Tournament Generator</a> with <u>USER: admin</u> and <u>PASS: admin123</u>! Initial deployment will take a while, please be patient!</p>
                <p>Check out our 2019 Capture the Breaker <a href="https://www.facebook.com/events/807989939615445/" target="_blank" rel="noopener noreferrer">Facebook Page</a> and the <a href="https://youtu.be/nXCfDSTv3BY" target="_blank" rel="noopener noreferrer">Final Battle!</a></p>
            </div>
        </div>

    </div>
)