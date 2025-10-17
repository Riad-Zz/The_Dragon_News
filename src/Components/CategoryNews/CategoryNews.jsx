import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const id_obj  = useParams() ;
    // console.log(id) ;
    const currentId = id_obj.id ;
    return (
        <div>
            <p>This is Category news {currentId?currentId:"nothing"}</p>
        </div>
    );
};

export default CategoryNews;