import React from 'react';
import TopNav from '../TopNav/TopNav';
import { Container } from 'react-bootstrap';
import NavBar from '../NavBar/Navbar';
import logo from "../../assets/images/logo.png"
import Marquee from 'react-fast-marquee';
import { GoChecklist } from "react-icons/go";


const Header = () => {
    return (
        <Container>
            <TopNav></TopNav>
            <div className='text-center py-4'>
                <img src={logo} alt="" />
            </div>
            <NavBar></NavBar>
            <div className='d-flex align-items-center justify-content-center gap-2 my-4'>
                <p className='mb-0 bg-dark px-4 py-2 text-white'>সর্বশেষ</p>
                <div className='d-flex align-self-center  align-items-center justify-content-center gap-2'>
                    <Marquee>
                        <p className='me-4 mb-0'>  <GoChecklist />বাছাই শেষে বাতিল ৭৩১টি</p>
                        <p className='me-4 mb-0'> <GoChecklist /> নির্বাচনে ১৪ দলের শরিকদের আসন জানা যাবে মঙ্গলবার</p>
                        <p className='me-4 mb-0'> <GoChecklist />  ঢাকা-১৭ আসনে জাতীয় পার্টির জিএম কাদের, সালমা দুজনই থাকছেন লড়াইয়ে</p>
                        <p className='me-4 mb-0'> <GoChecklist />  ভোটের আগে প্রথম ধাপে ৪৭ ইউএনও রদবদল</p>
                        <p className='me-4 mb-0'> <GoChecklist /> নোয়াখালীর পর লক্ষ্মীপুরেও মনোনয়নপত্র বাতিল বিকল্পধারার মান্নানের</p>
                    </Marquee>
                </div>
            </div>
        </Container>
    );
};

export default Header;