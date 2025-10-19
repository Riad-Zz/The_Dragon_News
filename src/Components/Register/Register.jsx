import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center items-center mt-20  mx-auto md:p-2'>
            <form className='max-w-11/12 mx-auto'>
                <fieldset className="fieldset bg-white  border-base-300 rounded-box  md:w-xl border p-4 md:p-16 ">
                    <legend className="fieldset-legend">Register</legend>
                    <p className='text-[#403F3F] text-3xl flex justify-center mb-6 font-semibold text-center'>Register your account</p>

                    <label className="label font-bold text-[#403F3F] text-[16px]">Name</label>
                    <input type="text" className="input w-[260px] md:w-full bg-[#F3F3F3] py-6 md:px-4" placeholder="Enter your Name" />

                    <label className="label mt-3 font-bold text-[#403F3F] text-[16px]">Photo URL</label>
                    <input type="text" className="input w-[260px] md:w-full bg-[#F3F3F3] py-6 md:px-4" placeholder="Enter your Name" />

                    <label className="label mt-3 font-bold text-[#403F3F] text-[16px]">Email</label>
                    <input type="email" className="input w-[260px] md:w-full bg-[#F3F3F3] py-6 md:px-4" placeholder="Email" />

                    <label className="label mt-3 font-bold text-[#403F3F] text-[16px]">Password</label>
                    <input type="password" className="input w-full bg-[#F3F3F3] md:px-4 py-6" placeholder="Password" />

                    <div className='flex gap-2 items-center mt-3'>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-neutral" /> 
                    <p className='text-[#706F6F]'>Accept <span className='font-bold'>Term & Conditions</span> </p>
                    </div>
                    

                    <button className="btn btn-neutral mt-5 bg-[#403F3F] text-white">Register</button>
                    <p className='text-[#706F6F] mt-5'>Didn't have an account ? <Link to={'/auth/login'} className='font-bold text-green-500'>Login</Link> </p>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;