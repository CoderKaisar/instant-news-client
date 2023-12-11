import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
const Sliders = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/news/")
            .then(res => res.json())
            .then(data => setNews(data))
            .catch(err => {
                const errMsg = err.message
                console.log(errMsg)
            })
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div>
            <h2 className='fs-2 text-left py-4 px-4  my-4 border-bottom border-warning border-4 w-25'>Top News</h2>
            <div>
                {
                    <Row xs={1} md={2} lg={1} className='g-4 px-4 '>
                        <Slider {...settings} >
                            {news.map(newsCard =>
                                <Col key={newsCard._id}>
                                    <Card className='mx-2 h-100'>
                                        <Card.Img variant="top" src={newsCard.image_url} />
                                        <Card.Body>
                                            <Card.Title>{newsCard.title}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                            }
                        </Slider>
                    </Row>

                }
            </div>
        </div >
    );
};

export default Sliders;