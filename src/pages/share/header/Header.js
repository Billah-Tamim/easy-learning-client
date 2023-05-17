import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './Header.css';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);


    return (
        <Navbar className='nav-container px-5' bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <div className='me-5'>
                    <Link className='fs-4' to='/'>Easy Learning</Link>
                    <Image
                        src={'https://www.nicepng.com/png/detail/119-1192701_it-technology-technology-icon-png.png'}
                        roundedCircle
                        width="50"
                        className="d-inline-block align-top ms-3"
                    />
                </div>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <div
                        className="me-auto my-2 my-lg-0 d-flex align-items-center"
                        style={{ maxHeight: '100px' }}

                    >
                        <Link to='/courses' className='me-4'>Courses</Link>
                        <Link to='/faq' className='me-4'>FAQ</Link>
                        <Link to='/about' className='me-4'>About Us</Link>

                        {
                            user?.email ?
                                <Button onClick={logOut} className='me-3' variant="outline-info">Log Out</Button>
                                :
                                <>
                                    <Link to='/login'><Button className='me-3' variant="outline-info">Log In</Button></Link>
                                    <Link to='/register'><Button variant="outline-info">Register</Button></Link>
                                </>
                        }


                    </div>
                    <Form className="d-flex align-items-center" >
                        {
                            user?.email &&
                            <>
                                {
                                    user?.photoURL ?
                                        <Image
                                            roundedCircle
                                            src={user?.photoURL}
                                            alt=""
                                            style={{ height: '50px', width: '50px' }}
                                            className='me-2'
                                        ></Image>
                                        :
                                        <FaUser className='text-white me-2' title={user?.email}></FaUser>
                            }
                            </>

                        }
                        <span className='text-white me-5'>{user?.displayName}</span>

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