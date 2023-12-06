import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FrontNewsLeftCol from '../FrontNewsLeftCol/FrontNewsLeftCol';
import FrontNewsRightCol from '../FrontNewsRightCol/FrontNewsRightCol';

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
                    <h2>Total news in heading {businessNews.length}</h2>



                </Col>
                <Col lg={3}>
                    <FrontNewsRightCol localNews={localNews}></FrontNewsRightCol>
                </Col>
            </Row>
        </Container>
    );
};

export default FrontNews;