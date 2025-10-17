import React from 'react';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center mt-7'>
            <img src={logo} alt="Website Logo" />
            <p className='text-[#706F6F] mt-3'>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;