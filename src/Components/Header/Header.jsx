import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    const currentDate = new Date() ;
    const dayName = format(currentDate,"EEEE") ;
    return (
        <div className='max-w-11/12 mx-auto flex justify-center flex-col items-center mt-7'>
            <img src={logo} alt="Website Logo" />
            <p className='text-accent mt-3'>Journalism Without Fear or Favour</p> 
            <p className='mt-2 text-accent'>
                <span className='font-bold text-primary'>{dayName}</span>
                {format(new Date (), " ,MMMM dd, yyyy")}
            </p>
        </div>
    );
};

export default Header;