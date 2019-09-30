import React from 'react';
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