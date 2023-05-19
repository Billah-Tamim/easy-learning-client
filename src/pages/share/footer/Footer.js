import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaMailBulk } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return (
        <Row className='footer-container bg-dark p-5 justify-content-center'>
            <Col md={3}>
                <h4>Our Services</h4>
                <li>Get job related courses</li>
                <li>Cost is too low</li>
                <li>Get a community</li>
                <li>Reputed tutor</li>
                <li>Premium courses</li>
            </Col>
            <Col md={3}>
                <h4 >Latest News</h4>
                <div className="news-container">
                    <div className="news d-flex mb-3">
                        <img className='me-2' src={'https://www.ortussolutions.com/__media/reward.png'} alt="" />
                        <span>Latest achievement of your organization!!!</span>
                    </div>
                    <div className="news d-flex">
                        <img className='me-2' src={'https://wallpapercave.com/wp/Lp5mtcZ.jpg'} alt="" />
                        <span>Our students get job offer from google!!!</span>
                    </div>
                </div>
            </Col>
            <Col md={3}>
                <h4 >Contact With Us</h4>
                <div className="social">
                    <FaFacebook className='me-3 fi'></FaFacebook>
                    <span>Facebook</span>
                </div>
                <div className="social">
                    <FaInstagram  className='me-3 fi'></FaInstagram>
                    <span>Instagram</span>
                </div>
                <div className="social">
                    <FaTwitter className='me-3 fi'></FaTwitter>
                    <span>Twitter</span>
                </div>
                <div className="social">
                    <FaLinkedin className='me-3 fi'></FaLinkedin>
                    <span>LinkedIn</span>
                </div>
                <div className="social">
                    <FaMailBulk className='me-3 fi'></FaMailBulk>
                    <span>Email Us</span>
                </div>
            </Col>

        </Row>
    );
};

export default Footer;