import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FrontNewsRightCol = ({ localNews }) => {

    return (
        <Container>
            <Row>
                <Col>
                    {
                        localNews.map(news => <div className="card mb-2">
                            <div className="card-body me-2">
                                <h5 className="card-title border-bottom pb-2">{news.title}</h5>
                                <p className="card-text">
                                    {
                                        news?.details < 100 ? <>{news.details}</> : <> {news.details.slice(0, 150)}...<Link to="/">Read More</Link></>

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

export default FrontNewsRightCol;