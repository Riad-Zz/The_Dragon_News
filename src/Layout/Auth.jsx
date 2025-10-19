import React from 'react';
import Navbar from '../Components/Navabr/Navbar';
import { Outlet } from 'react-router';

const Auth = () => {
    return (
        <div className='min-h-screen bg-[#F3F3F3]'>
            <Navbar></Navbar>
            <div className=''>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Auth;