import React from 'react';
import './About.css';
import scr from './assets/scr.jpg';
import e1 from './assets/e1.jpg';
import hi from './assets/hi.jpg';

export const About = () => (
    <div>
        <h2>NEXT PAGE TO SHOW PROJECTS/PERSONAL INTERESTS</h2>
        <p>
            This webpage is an example of my project!
        </p>
        <div class="grid-flex">
            <div class="col col-text">
                <div class="Aligner-item">
                    <p> i like soccer
                    </p>
                </div>
            </div>
            <div class="col col-image">
                <img src={scr} class="soccer-pic" />
            </div>
        </div>

        <div class="grid-flex">
            <div class="col col-text">
                <div class="Aligner-item">
                    <p> breakdancing lol
                    </p>
                </div>
            </div>
            <div class="col col-image">
                <img src={e1} class="bboy-pic" />
            </div>
        </div>
    </div>
)