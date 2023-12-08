import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Cricket = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/news`)
            .then(res => res.json())
            .then(data => setNews(data))
            .catch(err => {
                console.error(err)
            })
    }, [])

    const cricNews = news.filter(n => n.category === "খেলা" && n.sub_category === "ক্রিকেট")

    return (
        <div className='bg-primary rounded-2 py-4 px-4'>
            <Container>
                <h2>ক্রিকেট</h2>
                {cricNews.map(cricket => (
                    <Row key={cricket.id}>
                        <Col lg={8}>
                            <img className='w-100' src={cricket.image_url} alt="" />
                            <p className='fs-3'>{cricket.title}</p>
                        </Col>
                        <Col lg={4}>
                            <h3 className='text-center bg-primary rounded-1'>ফুটবলের সর্বশেষ খবর</h3>
                            <Row>
                                {news
                                    .filter(n => n.sub_category === "ফুটবল" && n.category === 'খেলা' && n._id !== cricket.id)
                                    .map(footballNews => (
                                        <Col key={footballNews.id} md={6}>
                                            <div className="custom-box">
                                                <img className='w-100 rounded-1' src={footballNews.thumbnail_url} alt="" />
                                                <p>{footballNews.subHeading.slice(0, 60)}</p>
                                            </div>
                                        </Col>
                                    ))}
                            </Row>
                        </Col>
                    </Row>
                ))}
            </Container>
        </div >
    );
};

export default Cricket;