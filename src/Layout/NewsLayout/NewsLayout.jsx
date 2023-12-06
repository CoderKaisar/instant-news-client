import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import FrontNewsRightCol from '../../Component/FrontNewsRightCol/FrontNewsRightCol';
import { useLoaderData } from 'react-router-dom';

const NewsLayout = () => {
    const particularNews = useLoaderData()
    console.log(particularNews)
    const { title, image_url, details } = particularNews
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}>
                        <Card>
                            <Card.Img variant="top" src={particularNews.image_url} />
                            <Card.Body className='px-4'>
                                <Card.Title>{particularNews.title}</Card.Title>
                                <Card.Text>
                                    {particularNews.details}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <FrontNewsRightCol></FrontNewsRightCol>
                    </Col>
                </Row>
                <Footer></Footer>
            </Container>
        </div>
    );
};

export default NewsLayout;