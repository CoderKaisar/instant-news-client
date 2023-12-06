import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import FrontNewsLeftCol from '../FrontNewsLeftCol/FrontNewsLeftCol';
import FrontNewsRightCol from '../FrontNewsRightCol/FrontNewsRightCol';
import { Link } from 'react-router-dom';

const FrontNews = () => {
    const [allNews, setAllNews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/news`)
            .then(res => res.json())
            .then(data => setAllNews(data))
            .catch(err => {
                console.log(err.message)
            })
    }, [])



    const businessNews = allNews.filter(bNews => bNews.category === "বাণিজ্য")

    const localNews = allNews.filter(lNews => lNews.category === "সমগ্র বাংলাদেশ")


    return (
        <Container>
            <Row>
                <Col lg={3}>
                    <FrontNewsLeftCol businessNews={businessNews}></FrontNewsLeftCol>
                </Col>
                <Col lg={6}>
                    {
                        allNews.map(news => <>
                            <Link className='text-decoration-none' to="/news/:id">
                                <Card className='mb-4'>
                                    <Card.Img variant="top" src={news.image_url} />
                                    <Card.Body>
                                        <Card.Text className='text-center fw-bold '>
                                            {news.title}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </>).slice(0, 2)
                    }



                </Col>
                <Col lg={3}>
                    <FrontNewsRightCol localNews={localNews}></FrontNewsRightCol>
                </Col>
            </Row>
        </Container>
    );
};

export default FrontNews;