import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams();
    const news_id = Number(id);
    return (
        <div>
            Category News {news_id}
        </div>
    );
};

export default CategoryNews;