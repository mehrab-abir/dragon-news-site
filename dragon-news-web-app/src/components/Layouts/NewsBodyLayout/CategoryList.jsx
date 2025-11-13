import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then(res=>res.json());

const CategoryList = () => {
    const categories = use(categoryPromise) //now its an array of object
    console.log("in categoryList comp: ",categories);
    return (
        <div className='flex flex-col space-y-1 justify-center mt-4'>
            {
                categories.map(category =>{
                    return (
                      <NavLink
                        to={`categorynews/${category.id}`}
                        key={category.id}
                        className="py-2 pl-8 text-gray-400 hover:bg-gray-300 cursor-pointer"
                      >
                        {category.name}
                      </NavLink>
                    );
                })
            }
        </div>
    );
};

export default CategoryList;