import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center items-center mt-20  mx-auto md:p-2'>
            <form className='max-w-11/12 mx-auto'>
            <fieldset className="fieldset bg-white  border-base-300 rounded-box  md:w-xl border p-4 md:p-16 ">
                <legend className="fieldset-legend">Login</legend>
                <p className='text-[#403F3F] text-3xl flex justify-center mb-6 font-semibold text-center'>Login your account</p>

                <label className="label font-bold text-[#403F3F] text-[16px]">Email</label>
                <input type="email" className="input  md:w-full bg-[#F3F3F3] py-6 md:px-4" placeholder="Email" />

                <label className="label mt-3 font-bold text-[#403F3F] text-[16px]">Password</label>
                <input type="password" className="input w-full bg-[#F3F3F3] md:px-4 py-6" placeholder="Password" />

                <button className="btn btn-neutral mt-5 bg-[#403F3F] text-white">Login</button>
                <p className='text-[#706F6F] mt-5'>Didn't have an account ? <Link to={'/auth/register'} className='font-bold text-red-500'>Register</Link> </p>
            </fieldset>
            </form>
        </div>
    );
};

export default Login;