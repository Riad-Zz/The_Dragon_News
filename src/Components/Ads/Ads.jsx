import React from 'react';
import image1 from '../../assets/swimming.png'
import image2 from '../../assets/class.png'
import image3 from '../../assets/playground.png'

const Ads = () => {
    return (
        <div className='mt-6 bg-[#F3F3F3] p-4 rounded-sm'>
            <p className='font-bold text-[#403F3F] text-xl'>QZONE</p>
            <div className='flex flex-col justify-center items-center gap-4'>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
            </div>

        </div>
    );
};

export default Ads;