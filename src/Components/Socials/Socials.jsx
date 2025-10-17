import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Socials = () => {
    return (
        <div className=''>
            <p className='font-bold text-[#403F3F] text-xl mt-4 mb-3'>Find Us On</p>
            <div className='flex items-center gap-3 border border-[#E7E7E7] p-4 '>
                <div className='rounded-full text-2xl bg-[#F3F3F3] p-2 text-blue-800'><FaFacebook></FaFacebook></div>
                <div className='font-medium text-[#706F6F]'>Facebook</div>
            </div>
            <div className='flex items-center gap-3 border border-[#E7E7E7] p-4 '>
                <div className='rounded-full text-2xl bg-[#F3F3F3] p-2 text-[#58A7DE]'><FaTwitter></FaTwitter></div>
                <div className='font-medium text-[#706F6F]'>Twitter</div>
            </div>
            <div className='flex items-center gap-3 border border-[#E7E7E7] p-4 '>
                <div className='rounded-full text-2xl bg-[#F3F3F3] p-2 bg-gradient-to-b from-[#D82D7E] to-[#FBA756] text-white'><FaInstagram></FaInstagram></div>
                <div className='font-medium text-[#706F6F]'>Instagram</div>
            </div>
            

        </div>
    );
};

export default Socials;