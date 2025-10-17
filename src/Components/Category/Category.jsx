
import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch('/categories.json').then(res => res.json());

const Category = () => {
    const categoryData = use(categoryPromise);
    console.log(categoryData);
    return (
        <div>
            <div className='flex flex-col gap-5 mt-5 linkss'>
                {
                    categoryData.map(data => <NavLink to={`/category/${data.id}`} data={data} className={`font-medium text-xl text-[#9F9F9F]`} key={data.id}>{data.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Category;