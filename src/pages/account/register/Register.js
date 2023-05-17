import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Register.css';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const Register = () => {
    const { createUser, addData, emailVerification } = useContext(AuthContext);
    const navigate = useNavigate();

    const [errorText, setErrortext] = useState('');
    const [accept, setAccept] = useState(false);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoUrl.value;
        const userObj = { displayName: name, photoURL: photoURL };
        setErrortext('');
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                manageUser(userObj);
                verifyEmail();
                navigate('/login');
            })
            .catch(error => {
                setErrortext(error.message);
            });

    }
    const manageUser = userObj => {
        addData(userObj)
            .then(() => { })
            .catch(error => {
                setErrortext(error.message);
            });
    }
    const verifyEmail = ()=>{
        emailVerification()
        .then(result=>{
            toast.success('Please check your email to verify account!');
        })
    }

    const handleCheck = event =>{
        setAccept(event.target.checked);
    }
    return (
        <Form onSubmit={handleRegister} className='w-50 mx-auto mt-5 p-4 register-container'>
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
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group  className="mb-3 d-flex" controlId="formBasicCheckbox">
                <Form.Check onClick={handleCheck} type="checkbox" label="Accept all" /> 
                <Link className='ms-1' to='/conditions'>terms & conditions</Link>
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!accept}>
                Register
            </Button><br />
            <Form.Text className="text-danger">
                {errorText}
            </Form.Text>
            <p>If you already have an account.. <Link to='/login'>click here</Link></p>
        </Form>
    );
};

export default Register;