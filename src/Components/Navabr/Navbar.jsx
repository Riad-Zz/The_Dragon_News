import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import profileIcon from '../../assets/user.png'
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const {user,logout} = use(AuthContext) ;
    // console.log(user) ;

    const handleLogOut = (e) =>{
        e.preventDefault() ;
        // console.log("CLickkeddd")
        logout().then(()=>{

        }).catch((error)=>{
            console.log(error)
        })
    }

    
    return (
        <div className='max-w-11/12 mx-auto pt-5 flex flex-col md:flex-row gap-4 justify-between items-center'>
            
            <div>{user ?user.email :""}</div>
            <div className='flex gap-3'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/About'}>About</NavLink>
                <NavLink to={'/About'}>Career</NavLink>
            </div>
            <div className='flex gap-5 items-center'>
                <img src={profileIcon} alt="Demon user logo" />
                {
                    user ? <button className='btn btn-primary' onClick={handleLogOut}>LogOut</button> : <Link to={'/auth/login'} className='btn btn-primary px-8'>Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;