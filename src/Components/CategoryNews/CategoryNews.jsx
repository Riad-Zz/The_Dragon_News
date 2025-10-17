import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

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
            <p>Total data {filteredData.length}</p>
        </div>
    );
};

export default CategoryNews;