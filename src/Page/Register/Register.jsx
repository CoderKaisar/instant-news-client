import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    const { register } = useContext(AuthContext)
    const [error, setError] = useState([])
    const [registeredUser, setregisteredUser] = useState([])


    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        register(email, password)
            .then(res => {
                const regUser = res.user;
                setregisteredUser(regUser)
                form.reset()
                toast.success(`${registeredUser.email} is created successfully`);

            })
            .catch(err => {
                const errMsg = err.message;
                console.log(errMsg)
            })
    }
    return (
        <Container>
            <Row className='justify-content-center align-items-center rounded-4 ' style={{ minHeight: '100vh' }}>
                <Col lg={4} md={6} xs={8}>
                    <Form onSubmit={handleRegister} className='bg-secondary p-4 rounded-1 border border-warning-subtle'>
                        <h2 className='text-center py-2'>নিবন্ধন ফরম</h2>
                        <Form.Group className="mb-3">
                            <Form.Label> নাম</Form.Label>
                            <Form.Control type="text" name="name" placeholder="এখানে আপনার নাম লিখুন" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label> ইমেইল</Form.Label>
                            <Form.Control type="email" name="email" placeholder="এখানে আপনার ইমেইল এড্রেসটি লিখুন" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label> পাসওয়ার্ড</Form.Label>
                            <Form.Control type="password" name="password" placeholder="আপনার পাসওয়ার্ডটি লিখুন" />
                        </Form.Group>
                        <input type="checkbox" /><span className='ms-2'>আমি টার্মস এন্ড কন্ডিশন মেনে নিয়েছি </span>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Button type='btn' className='text-center'>নিবন্ধন</Button>
                        </div>

                        <div className='text-end mt-4'>
                            <span className='fs-6 text-light'>একাউন্ট আছে ? <Link to="/login" className='text-warning text-decoration-none'>লগইন করুন</Link></span>
                        </div>
                    </Form>
                </Col>
            </Row>

        </Container >
    );
};

export default Register;