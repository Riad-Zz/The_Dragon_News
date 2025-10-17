import React, { Suspense,} from 'react';
import Category from '../../Components/Category/Category';


const LeftAside = () => {
    
    return (
        <div>
            <p className='font-bold text-primary text-xl'>All Category</p>
            <Suspense fallback ={<div className='flex justify-center'><span className="loading loading-spinner text-neutral"></span></div> }>
                <Category></Category>
            </Suspense>
        </div>
    );
};

export default LeftAside;