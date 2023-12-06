import React from 'react';
import logo from "../../assets/images/logo.png"

const Footer = () => {
    return (
        <div>
            <div className='text-center border-top pt-2'>
                <img src={logo} className='pt-4' alt="" />
            </div>
            <h2 className='text-center'>This is Footer </h2>
        </div>
    );
};

export default Footer;