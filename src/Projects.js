import React from 'react';
import './Projects.css';
import Button from 'react-bootstrap/Button';

export const Project = () => (
    <div>
        <div class="titlep">
            <h2>Welcome to my Project Page!</h2>
        </div>
        <div class="leftp">
            <h4>Capture the Breaker! Tournament Generator</h4>
        </div>
        <div class="rightp">
            <ul>
                <li>Created a webapp for annual "Capture the Breaker!" breakdance competition by our dance group, Element 1</li>
                <li>Utilized Spring Boot to create a back-end microservice, front-end implemented by React and deployed to Heroku</li>
                <li>Webapp handles logistics fo the tournament: sign-up, preliminary and knockout stages</li>
                <li>Will implement other battle formats as we organise more competitions (e.g. 7 to smoke)</li>
            </ul>
        </div>
        <div class="whyall">
            <div class="whyp">
                Why?
            </div>
            <div class="whyansp">
                Capture the Breaker has a unique format: The winning team will 'capture' a member from the losing team and progress.
                To ensure the finals consisted of the best (top 10) breakers, a crewmate wrote his own algorithm based on the preliminary seeding.
                I decided to write a webapp to integrate the algorithm and automate the tournament process. This project combines two of my interests: Coding and Breaking
            </div>
        </div>
        <div class="whereall">
            <div class="wherep">
                Where?
            </div>
            <div class="whereansp">
                Check out the project! First deployment after 30 mins of inactivity might take a while, be patient!
            </div>
            <div class="wherebtn">
                <Button href="https://morning-depths-35258.herokuapp.com/" target="_blank">Capture the Breaker!</Button>
            </div>
        </div>
    </div>
)