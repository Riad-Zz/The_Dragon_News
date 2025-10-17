import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='max-w-11/12 mx-auto flex gap-4 items-center bg-base-200 py-4 px-3 mt-5'>
            <p className='bg-secondary py-3 text-base-100 font-bold px-5'>Latest</p>
            <Marquee className='' pauseOnHover={true} speed={70}>
            <div className='flex gap-7'>
            <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened!</p>
            <p className='font-semibold'>Match Highlights: Argentina vs Colombia — as it happened!</p>
            <p className='font-semibold'>Match Highlights: Bangladesh vs India — as it happened!</p>
            </div>
            {/* <p>Match Highlights: Germany vs Spain — as it happened!</p> */}
            </Marquee>
            
        </div>
    );
};

export default LatestNews;