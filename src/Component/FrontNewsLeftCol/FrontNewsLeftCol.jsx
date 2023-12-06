import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FrontNewsLeftCol = ({ businessNews }) => {
    const { title, details } = businessNews

    return (
        <Container>
            <Row>
                <Col>
                    {
                        businessNews.map(news => <div className="card mb-2">
                            <div className="card-body me-2">
                                <h5 className="card-title border-bottom pb-2">{news.title}</h5>
                                <p className="card-text">
                                    {
                                        news?.details < 200 ? <>{news.details}</>
                                            :
                                            <>
                                                <div>
                                                    <div>
                                                        {news.details.slice(0, 200)}...
                                                    </div>
                                                </div>
                                                <div className='text-end'>
                                                    <Link to="/" className='bg-primary rounded-1  px-2 text-white text-decoration-none pb-1'>Read More</Link>
                                                </div>
                                            </>


                                    }

                                </p>
                            </div>
                        </div>
                        )
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default FrontNewsLeftCol;