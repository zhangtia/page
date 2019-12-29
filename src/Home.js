import React from 'react';
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Headshot from './assets/hs.png';
import './Home.css';
import mk1 from './assets/mkthn1.jpeg';
import mk2 from './assets/mkthn2.jpeg';
import mk3 from './assets/mkthn3.jpeg';


export const Home = () => (
    <div>



        <div class="parent">
            <div class="PI">
                <div class="left"><Image src={Headshot} roundedCircle style={{ width: '100%' }} /></div>
                <div class="right">
                    <h2>Hi! My name is Tianqi Zhang, Matthew.</h2>
                    <h5>..and welcome to my webpage!</h5>
                    <p>I am a junior studying Computer Science and Materials Science at the University of Michigan, Ann Arbor. <i>GO BLUE!</i></p>
                    <p>I am learning about operating systems and database management and am interested in full-stack/back-end programming.</p>
                    <p>Currently, I am looking for an internship during Summer 2020 and this website will help you get to know me!</p>

                    <p><b>[website still in development!]</b></p>
                </div>
            </div>
            <div class="bkgrgrey">
                <h4>Data Engineer Intern, Summer 2019</h4>
                <p>Over the summer of 2019, I interned at <b>Star Charge of Wanbang New Energy Investment Group Co Ltd.</b> as a data engineer. Company manufactures charging ports for electric vehicles and provides SaaS software</p>
                <p>
                    Took part in the 828 Low Carbon Emission Campaign to promote environmentally-friendly commute and increase market share.
                    As competing comapnies realized the huge influx of new users as a result of the campaign,
                    many started to take action and created promotions of their own. My job as a data engineer was <b>to identify the charging stations from our competitors</b> which had seen substantial user growth.
                    </p>
                <p>
                    Most of the competiting companies were software comapnies that operated on our ports, as we were one of the few companies that had both hardware and software.
                     I used SQL programming to run queries to find the stations that had the greatest jump in new users, so our marketing and advertising teams knew the stations to focus on.
                     Our databases included <b>MySQL and MongoDB</b> and I had hands-on experience <b>working with JDBC, NoSQL and SQL databases</b>.
                    </p>
                <p> During my free time, I did research into CovanentSQL, a blockchain database and was successful in deploying a CovanentSQL database locally. I also scribed and translated video meetings between foreign companies.</p>
            </div>
            <div class="mkthon">
                <div class="column lefttwo">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={mk1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={mk2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={mk3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div class="column righttwo">
                    <h4>U-M Makeathon 2019 First Place</h4>
                    <p>During February of 2019, me and a group of friends signed up to participate in the annual Makeathon competition.
                        We took part in the Amazon Voice Tech competition where teams would design and implement a project related to Amazon's Alexa skill over a weekend.
                </p>
                    <p>
                        We realized that students commuting by the univeristy buses would wait for extended periods of time, and nobody wishes to do that in Michigan winter!
                    As such, our team decided to implement an app to plan the commute of students using U-M blue buses.</p>
                    <p>
                        Skill development was carried out using <b>AWS Lambda</b> and we used a "Trivia Game" template. We used Google Maps' API and U-M bus services website to calculate when the user to leave for the bus stop.
                </p>
                    <p>
                        Check out our <a href="https://github.com/kenzhang98/Blue_Bus_Checker_Frontend" target="_blank" rel="noopener noreferrer">GitHub repository</a> and this <a href="https://medium.com/voice-tech-podcast/alexa-when-is-the-next-bus-620e1aba9474" target="_blank" rel="noopener noreferrer">Medium article</a> about us!
                </p>
                </div>
            </div>
        </div>

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