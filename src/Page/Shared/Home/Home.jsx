import React from 'react';
import FrontNews from '../../../Component/FrontNews/FrontNews';
import Cricket from '../../../Component/Cricket/Cricket';
import Sliders from '../../../Component/Sliders/Sliders';


const Home = () => {
    return (
        <div className='border-bottom mb-4'>
            <FrontNews></FrontNews>
            <Cricket></Cricket>
            <Sliders></Sliders>
        </div>
    );
};

export default Home;