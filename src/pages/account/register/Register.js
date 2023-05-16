import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Register.css';

const Register = () => {
    return (
        <Form className='w-50 mx-auto mt-5 p-4 register-container'>
            <h3 className='text-center text-primary'>Registration</h3>

            <Row className="g-2 mb-3">
                <Col lg md={12}>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="your name" />
                </Col>
                <Col lg md={12}>
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoUrl' type="text" placeholder="photo url" />
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Register
            </Button><br />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form>
    );
};

export default Register;