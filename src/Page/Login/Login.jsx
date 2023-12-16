import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { CiFacebook } from "react-icons/ci";
import { RiGoogleLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { AuthContext } from '../../Provider/AuthProvider';
const Login = () => {
    const { login } = useContext(AuthContext)
    const [loggedUser, setLoggedUser] = useState([])
    const navigate = useNavigate()
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        login(email, password)
            .then(res => {
                const loggedUser = res.user;
                form.reset()
                console.log(loggedUser);
                navigate("/")
            })
            .catch(err => {
                const errMsg = err.message;
                console.log(errMsg)
            })
    }
    return (
        <Container>
            <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <Col lg={4} md={4} xs={12} className='bg-secondary p-4 rounded-1 border border-warning-subtle' >
                    <Form onSubmit={handleLogin} >
                        <h2 className='text-center py-2'>লগইন করুন</h2>
                        <Form.Group className="mb-3" >
                            <Form.Label>ইমেইল</Form.Label>
                            <Form.Control type="email" name="email" placeholder="এখানে আপনার ইমেইল এড্রেসটি লিখুন" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>আপনার পাসওয়ার্ড</Form.Label>
                            <Form.Control type="password" name="password" placeholder="আপনার পাসওয়ার্ডটি লিখুন" />
                        </Form.Group>
                        <div className='d-flex justify-content-end mb-4'>
                            <span className='fs-6 text-decoration-none'>পাসওয়ার্ড ভুলে গেছেন</span>
                        </div>

                        <div className='d-flex justify-content-center align-items-center'>
                            <Button type='btn'>লগইন</Button>
                        </div>
                        <div className='text-end mt-4'>
                            <span className='fs-6 text-light'>একাউন্ট নেই <Link to="/register" className='text-warning text-decoration-none'>নিবন্ধন করুন</Link></span>
                        </div>
                    </Form>
                    <div className='mt-4 d-flex flex-column align-items-center justify-content-center'>
                        <p className='pb-0'>Or Login with</p>
                        <div className='d-flex gap-4 '>
                            <span className='hover:text-primary'>  <CiFacebook className='fs-3 text-primary-emphasis ' /></span>
                            <RiGoogleLine className='fs-3 text-warning text-primary-hover' />
                            <CiTwitter className='fs-3 text-warning' />
                        </div>
                    </div>
                </Col>
            </Row >
        </Container >
    );
};

export default Login;