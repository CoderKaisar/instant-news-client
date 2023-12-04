import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { FaFacebookSquare } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";


const TopNav = () => {
    return (
        <div className='d-flex justify-content-between align-items-center py-2'>
            <div>
                <h2 className='fs-6'>০৪ ডিসেম্বর ২০২৩</h2>
            </div>
            <div>
                <Nav className="">
                    <Nav.Link href="#home">খেলা</Nav.Link>
                    <Nav.Link href="#features">মতামত</Nav.Link>
                    <Nav.Link href="#pricing">আর্টস</Nav.Link>
                    <Nav.Link href="#pricing">লাইফস্টাইল</Nav.Link>
                    <Nav.Link href="#pricing">টেক</Nav.Link>
                </Nav>
            </div>
            <div className='d-flex gap-2'>
                <FaFacebookSquare />
                <CiTwitter />
                <CiYoutube />
                <CiInstagram />
                <FaWhatsapp />
            </div>

        </div>
    );
};

export default TopNav;