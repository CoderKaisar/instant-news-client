import React from 'react';
import FrontNews from '../../../Component/FrontNews/FrontNews';
import Cricket from '../../../Component/Cricket/Cricket';

const Home = () => {
    return (
        <div className='border-bottom mb-4'>
            <FrontNews></FrontNews>
            <Cricket></Cricket>
        </div>
    );
};

export default Home;