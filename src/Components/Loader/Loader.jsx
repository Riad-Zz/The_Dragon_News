import React from 'react';
import { HashLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <HashLoader color="#4acbe1" />
        </div>
    );
};

export default Loader;