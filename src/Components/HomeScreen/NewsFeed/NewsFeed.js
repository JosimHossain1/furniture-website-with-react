import React from 'react';
import NewsLetter from '../Newsletter/NewsLetter';

const NewsFeed = () => {
    return (
        <div className='py-28 text-center'>
            <h1 className=' text-4xl font-semibold'>Join our newsletter for $10 off</h1>
            <p className='text-[19px] text-gray-500 mt-5' >We' ll email you a voucher worth $10 off your fast order over $50.</p>
            <p className='text-[19px] text-gray-500'>By subscribing you agree to our terms and conditions and privecy and Cookies Policy.</p>
            <NewsLetter />
        </div>
    );
};

export default NewsFeed;