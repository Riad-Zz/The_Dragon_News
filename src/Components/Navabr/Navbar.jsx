import React from 'react';
import { NavLink } from 'react-router';
import profileIcon from '../../assets/user.png'

const Navbar = () => {
    return (
        <div className='max-w-11/12 mx-auto mt-5 flex flex-col md:flex-row gap-4 justify-between items-center'>
            <div></div>
            <div className='flex gap-3'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/About'}>About</NavLink>
                <NavLink to={'/About'}>Career</NavLink>
            </div>
            <div className='flex gap-5 items-center'>
                <img src={profileIcon} alt="Demon user logo" />
                <button className='btn btn-primary px-8'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;