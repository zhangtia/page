import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

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
                    <Nav.Link href="/page/#/projects">Projects</Nav.Link>
                    <Nav.Link href="https://zhangtia.github.io/static/media/MatthewTQZhang.pdf" target="_blank">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)


export const FooterPage = () => {
    return (
        <MDBFooter color="elegant-color" className="font-small darken-3 pt-0" style={{marginTop: '10%'}}>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12" className="py-5">
                        <div className="mb-5 flex-center">
                            <a className="github-ic justify-content-center" href="https://github.com/zhangtia">
                                <i className="fab fa-github white-text mr-md-5 mr-3 fa-2x">
                                </i>
                            </a>
                            <a className="email-ic justify-content-center" href="mailto: zhangtia@umich.edu">
                                <i className="far fa-envelope white-text mr-md-5 mr-3 fa-2x">
                                </i>
                            </a>
                            <a className="li-ic justify-content-center" href="https://www.linkedin.com/in/tqzmatt/">
                                <i className="fab fa-linkedin-in white-text mr-md-5 mr-3 fa-2x">
                                </i>
                            </a>
                            <a className="inst-ic justify-content-center" href="https://www.instagram.com/m4ttq/">
                                <i className="fab fa-instagram white-text mr-md-5 mr-3 fa-2x">
                                </i>
                            </a>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Made with MDBootstrap and React
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export const Footer = () => (
    <footer style={{ marginTop: "auto" }}>
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

            <Navbar.Collapse id="basic-navbar-nav">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs lg="2"><Nav.Link href="https://github.com/zhangtia">GITHUB</Nav.Link></Col>
                        <Col xs lg="2"><Nav.Link href="mailto: zhangtia@umich.edu">EMAIL</Nav.Link></Col>
                        <Col xs lg="2"><Nav.Link href="/page/#/contact">Contact</Nav.Link></Col>
                    </Row>
                </Container>

            </Navbar.Collapse>
        </Navbar>
    </Styles>


)