import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../NewsCard/NewsCard';

const CategoryNews = () => {
    const id_obj = useParams();
    const allNews = useLoaderData();
    const [filteredData, setFilteredData] = useState([]);
    // console.log(allNews) ;
    // console.log(id) ;
    const currentId = parseInt(id_obj.id);
    // console.log( typeof currentId)
    useEffect(() => {
        if (currentId === 0) {
            setFilteredData(allNews);
            return;
        } else if (currentId === 1) {
            const breakingNews = allNews.filter(news => news.others.is_today_pick === true);
            setFilteredData(breakingNews);
            return;
        }
        const fdatas = allNews.filter(news => news.category_id === currentId);
        //    console.log(fdatas) ;
        setFilteredData(fdatas);
    }, [allNews, currentId])


    return (
        <div>
            <p className='text-xl font-bold text-[#403F3F] mb-3'>Total News({filteredData.length})</p>
            <div className='grid grid-cols-1 gap-3'>
                {
                    filteredData.map(data => <NewsCard data={data} key={data.id}></NewsCard>)
                }
            </div>
            
            {/* <NewsCard></NewsCard> */}
        </div>
    );
};

export default CategoryNews;