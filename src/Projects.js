import React from 'react';
import './Projects.css';

export const Project = () => (
    <div>
        <div class="titlep">
            <h2>Welcome to my Project Page!</h2>
        </div>
        <div class="leftp">
            <h4>Capture the Breaker! Tournament Generator</h4>
            <h5>Personal Project</h5>
        </div>
        <div class="rightp">
            <ul>
                <li>Created a webapp for annual "Capture the Breaker!" breakdance competition by our dance group, Element 1</li>
                <li>Utilized Spring Boot to create a back-end microservice, front-end implemented by React and deployed to Heroku</li>
                <li>Webapp handles logistics fo the tournament: sign-up, preliminary and knockout stages</li>
            </ul>
            <div class="whyp">
                Why?
            </div>
            <div class="whyansp">
                Created a simple app using Spring Boot and React.
                Noticed tournament format could not be found online, and a crewmate wrote his own algorithm for seeding and used paper for recording
            </div>
        </div>
    </div>
)