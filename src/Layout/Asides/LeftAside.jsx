import React, { Suspense,} from 'react';
import Category from '../../Components/Category/Category';
import { HashLoader } from 'react-spinners';


const LeftAside = () => {
    
    return (
        <div>
            <p className='font-bold text-primary text-xl'>All Category</p>
            <Suspense fallback ={<div className='min-h-screen flex justify-center items-center'><HashLoader color="#4acbe1" /></div> }>
                <Category></Category>
            </Suspense>
        </div>
    );
};

export default LeftAside;