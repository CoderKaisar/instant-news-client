import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <div className='container-fluid '>
            <div className='d-flex flex-column flex-direction-row justify-content-center align-items-center align-self-center'>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" />
                    </Form.Group>
                    <Button>Login</Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;