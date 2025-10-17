import React from 'react';
import { useLoaderData } from 'react-router';
import NewsCard from '../../Components/NewsCard/NewsCard';

const HomeNews = () => {
    const allNews = useLoaderData() ;
    console.log(allNews) ;
    return (
        <div className='grid grid-cols-1 gap-3'>
            {
                allNews.map(data => <NewsCard key={data.id} data={data}></NewsCard>)
            }
        </div>
    );
};

export default HomeNews;