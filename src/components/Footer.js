import React from 'react';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';





export const Footer = () => (
    <Navbar variant="pill" fixed="bottom" expand="lg" bg="dark">
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-center">
            <Nav.Item><Nav.Link href="/page/#">Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/page/#/about">About</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/page/#/contact">Contact</Nav.Link></Nav.Item>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
)