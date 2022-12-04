import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../../assets/web logo/logo.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
            <Container>
                <Navbar.Brand>
                    <img
                        alt="The School Web Logo"
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top me-2"
                    />
                    The School Web
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Courses</Nav.Link>
                        <Nav.Link href="#pricing">FAQ</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Toogle</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Login/userProfile
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;