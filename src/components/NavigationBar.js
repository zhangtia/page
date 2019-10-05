import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: white;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: white;
        &:hover {
            color: grey;
        }
    }

    .ftr {
        margin-top: auto;
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/page/#/">Tianqi Zhang</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
                <Nav.Link href="/page/#">Home</Nav.Link>
                <Nav.Link href="/page/#/about">About</Nav.Link>
                <Nav.Link href="/page/#/contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </Styles>
)




export const Footer = () => (
<footer style={{marginTop:"auto"}}>
    <header class="page-header">This is the header</header>
    <article class="page-body">
        <p>Main page content here, add more if you want to see the footer push down.</p>
    </article>
    <footer class="page-footer">Sticky footer</footer>
</footer>

)

export const Test = () => (
    <Styles>
        <Navbar class="ftr" collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="bottom">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
                <Container>
                <Row className="justify-content-md-center">
                <Col xs lg="2"><Nav.Link href="https://github.com/zhangtia">GITHUB BABY</Nav.Link></Col>
                <Col xs lg="2"><Nav.Link href="mailto: zhangtia@umich.edu">EMAIL ME PLS</Nav.Link></Col>
                <Col xs lg="2"><Nav.Link href="/page/#/contact">Contact</Nav.Link></Col>
                </Row>
                </Container>
            
        </Navbar.Collapse>
        </Navbar>
    </Styles>

    
)