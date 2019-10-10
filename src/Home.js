import React from 'react';
import { Image } from 'react-bootstrap';
import Headshot from './assets/hs.png';
import './Home.css';


export const Home = () => (
    <div>
        


        <div class="parent">
            <div class="column left"><Image src={Headshot} roundedCircle style={{ height: '100%', width: '100%' }} /></div>
            <div class="column right">
                <h2>Hi! My name is Tianqi Zhang, Matthew.</h2>
                <h5>..and welcome to my webpage!</h5>
                <p>I am a junior studying Computer Science and Materials Science at the University of Michigan, Ann Arbor. <i>GO BLUE!</i></p>
                <p>I love learning about new things! Currently, I am looking for an internship during Summer 2020 and this website will help you get to know me!</p>
                <p>I am learning about operating systems and database management and have interned as a data engineer during the summer of 2019. I am interested in full-stack/back-end programming.</p>
                <p><b>[website still in development!]</b></p>
                <p><b>:D</b></p>
            </div>
        </div>
        <p>.</p>
    </div>
)


/*


import Card from 'react-bootstrap/Card';
import { ListGroup, ListGroupItem } from 'react-bootstrap';



        <Card style={{ width: '20%', position: 'relative', left: '5%' }}>
            <Image src={Headshot} roundedCircle style={{ height: '50%', width: '50%' }} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                </ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>

        </Card>

*/