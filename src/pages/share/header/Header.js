import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './Header.css';

const Header = () => {
    return (
        <Navbar className='nav-container' bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" className='me-5'>
                    Easy Learning
                    <Image
                        src={'https://www.nicepng.com/png/detail/119-1192701_it-technology-technology-icon-png.png'}
                        roundedCircle
                        width="50"
                        className="d-inline-block align-top ms-3"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 d-flex align-items-center"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className='me-4'>Courses</Link>
                        <Link className='me-4'>FAQ</Link>
                        <Link className='me-4'>About Us</Link>

                        <>
                            <Button className='me-3' variant="outline-info">Log In</Button>
                            <Button variant="outline-info">Register</Button>
                        </>

                    </Nav>
                    <Form className="d-flex" >

                        <ButtonGroup aria-label="Basic example" size="sm">
                            <Button variant="light">Light</Button>
                            <Button variant="dark">Dark</Button>
                        </ButtonGroup>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;