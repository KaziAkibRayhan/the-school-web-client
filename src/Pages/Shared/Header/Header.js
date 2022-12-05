import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/web logo/logo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [theme, setTheme] = useState('Light');

    const toggleTheme = () => {
        if (theme === 'Light') {
            setTheme('Dark')
        }
        else {
            setTheme('Light')
        }
    }

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
            <Container>
                <>
                    <Link className='navbar-brand' to={'/'}>
                        <img
                            alt="The School Web Logo"
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top me-2"
                        />
                        <span>The School Web</span>
                    </Link>
                </>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <><Link className="nav-link" to={'/'}>Courses</Link></>
                        <> <Link className="nav-link" to={'/faq'}>FAQ</Link></>
                        <> <Link className="nav-link" to={'/blog'}>Blog</Link></>
                    </Nav>
                    <Nav>
                        <>
                            <Button className='text-light fw-bold me-2' variant="outline-primary" onClick={toggleTheme}>{theme}</Button>
                        </>
                        <>
                            {
                                user?.uid ? <>
                                    <Button onClick={handleLogOut} className='btn btn-warning my-2'>Log Out <BiLogOut /></Button>
                                    <img src={user?.photoURL} title={user?.displayName} width="45" height="45" alt="" className="d-inline-block align-top ms-2 rounded-5" />
                                </>
                                    : <Link to={'/login'}>
                                        <Button className='text-light fw-bold' variant="outline-warning">Login</Button>
                                    </Link>
                            }
                        </>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;