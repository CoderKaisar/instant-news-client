import React from 'react';
import Header from '../../Component/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../Component/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <Container>
            <Row>
                <Header></Header>
            </Row>
            <Row>
                <Col sz={12}>
                    <Outlet></Outlet>
                </Col>
            </Row>
            <Row>

                <Footer></Footer>
            </Row>

        </Container>
    );
};

export default Main;