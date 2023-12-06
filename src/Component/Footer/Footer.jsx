import React from 'react';
import logo from "../../assets/images/logo.png"
import { Col, Nav, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <div className='text-center border-top pt-2'>
                <img src={logo} className='pt-4' alt="" />
                <p className='mt-3'>প্রধান সম্পাদক ও প্রকাশক: তৌফিক ইমরোজ খালিদী</p>
            </div>
            <div className='py-5 border-top'>
                <Row>
                    <Col>
                        <div>
                            <h2 className='fs-5 text-left bg-primary text-center rounded-5 text-white py-2'>খবর</h2>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link href="/home">হোম</Nav.Link>
                                <Nav.Link eventKey="link-1">সমগ্র বাংলাদেশ</Nav.Link>
                                <Nav.Link eventKey="link-2">ক্রিকেট</Nav.Link>
                                <Nav.Link eventKey="link-2">বাণিজ্য</Nav.Link>
                                <Nav.Link eventKey="link-4">বিশ্ব</Nav.Link>
                                <Nav.Link eventKey="link-5">নাগরিক কর্ণার</Nav.Link>
                            </Nav>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h2 className='fs-5 text-left bg-primary text-center rounded-5 text-white py-2'>ফিচারস</h2>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link href="/home">টেক</Nav.Link>
                                <Nav.Link eventKey="link-1">লাইফ স্টাইল </Nav.Link>
                                <Nav.Link eventKey="link-2">কিউজ</Nav.Link>
                                <Nav.Link eventKey="link-2">গ্লিটজ</Nav.Link>
                            </Nav>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h2 className='fs-5 text-left bg-primary text-center rounded-5 text-white py-2'>মতামত</h2>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link href="/home">মতামত</Nav.Link>
                            </Nav>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h2 className='fs-5 text-left bg-primary text-center rounded-5 text-white py-2'>নাগরিক সাংবাদিকতা</h2>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link href="/home">নাগরিক সাংবাদিকতা</Nav.Link>
                            </Nav>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h2 className='fs-5 text-left bg-primary text-center rounded-5 text-white py-2'>অন্যান্য</h2>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link href="/home">হ্যালো</Nav.Link>
                                <Nav.Link href="/home">টিউব</Nav.Link>
                                <Nav.Link href="/home">মোবাইল</Nav.Link>
                                <Nav.Link href="/home">ছবি</Nav.Link>
                            </Nav>
                        </div>
                    </Col>
                </Row>

            </div>
        </div>
    );
};

export default Footer;