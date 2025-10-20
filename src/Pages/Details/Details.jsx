import React from 'react';
import RightAside from '../../Layout/Asides/RightAside';
import Header from '../../Components/Header/Header';
import { Link, useLoaderData, useParams } from 'react-router';

const Details = () => {
    const id = useParams() ;
    const allData = useLoaderData() ;
    // console.log(data) ;
    // console.log(typeof id.id) ;
    const data = allData.find(da => da.id == id.id) ;
    // console.log(data) ;
    return (
        <div className=''>
            <div className='mb-10'>
            <Header></Header>
            </div>
            <p className='text-xl text-[#403F3F] font-semibold max-w-11/12 mx-auto'>Dragon News</p>
            <div className='grid grid-cols-12 max-w-11/12 mx-auto gap-5'>
                <div className='col-span-9'>
                    
                    <div className='border border-[#E7E7E7] p-7 mt-4 rounded-md'>
                        <img src={data.image_url} alt="" className='w-full object-cover rounded-md mb-5'/>
                        <p className='font-bold text-2xl'>{data.title}</p>
                        <p className='my-5 text-[#706F6F] text-xl'>{data.details}</p>
                        <Link to={`/category/${data.category_id}`} className='btn btn-secondary my-3'>All news in this category</Link>
                    </div>
                </div>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </div>

        </div>
    );
};

export default Details;