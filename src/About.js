import React from 'react';
import './About.css';
import scr from './assets/scr.jpg';
import e1 from './assets/e1.jpg';
import Carousel from 'react-bootstrap/Carousel';

export const About = () => (
    <div>
        <h2>NEXT PAGE TO SHOW PROJECTS/PERSONAL INTERESTS</h2>
        <p>
            This webpage is an example of my project!
        </p>
        
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={scr}
      alt="First slide"
    />
    <Carousel.Caption>
    <div class="mybox">
        <h3>Huge soccer fan!</h3>
        <p>I on play left wing despite my dominant leg being my right leg :P</p>
        <p>My left arm is the dominant one so I tend to deviate to the left</p>
        <p>No. of injuries sustained : 6</p>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={e1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <div class="mybox">
        <h3>BBOY in training</h3>
        <p>Been breaking for 2 months and absolutely love it</p>
        <p>Favourite combo : 6-step -> 2-step -> baby-freeze -> chair-freeze</p>
        <p>I finished 4th in my first breeaking competition! (for beginners)</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
)