import React from 'react';
import { Image } from 'react-bootstrap';
import './About.css';
import scr from './assets/scr.jpg';
import e1 from './assets/e1.jpg'

export const About = () => (
    <div>
        <h2>NEXT PAGE TO SHOW PROJECTS/PERSONAL INTERESTS</h2>
        <p>
            This webpage is an example of my project!
        </p>
        <div class="flex-container">
            <div class="box-soccer"> i like soccer hehe </div>
            <img src={scr} class="soccer-pic" width="30%" />
        </div>
        <div class="flex-container">
            <img src={e1} class="bboy-pic" width="30%" />
            <div class="box-bboy"> i like breakdancing hehe </div>
        </div>
    </div>
)