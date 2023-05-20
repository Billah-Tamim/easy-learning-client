import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {
    const {logIn, user} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const [errorText, setErrorText] = useState('');

    
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setErrorText('');

        logIn(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
            if(user?.emailVerified)
            {
                navigate(from, {replace: true});
            }
            else{
                toast.error('please verify your email first.');
            }
        })
        .catch(error=> {
            setErrorText(error.message);
        });

    }
    return (
        <Form onSubmit={handleLogin} className='w-50 mx-auto mt-5 p-4 form-container'>
            <h3 className='text-center text-success'>Log In</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="success" type="submit">
                Log in
            </Button><br />
            <Form.Text className="text-danger">
                {errorText}
            </Form.Text>
            <p>If you don't have an account.. <Link to='/register'>click here</Link></p>
        </Form>
    );
};

export default Login;