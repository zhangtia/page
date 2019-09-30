import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: white;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: black;
        &:hover {
            color: grey;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/page/#/">Tianqi Zhang</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m1-auto">
                    <Nav.Item><Nav.Link href="/page/#/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/page/#/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/page/#/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)