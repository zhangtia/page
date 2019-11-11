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
                <Nav.Link href="/page/#/contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </Styles>
)


export const FooterPage = () => {
  return (
    <MDBFooter color="elegant-color" className="font-small darken-3 pt-0">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="py-5">
            <div className="mb-5 flex-center">
              <a className="github-ic">
                <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="pin-ic">
                <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

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