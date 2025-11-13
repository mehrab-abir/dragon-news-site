import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const {id} = useParams();
    const news_id = Number(id);
    // console.log(news_id);
    const allNews = useLoaderData();
    // console.log(allNews);

    const categoryNews = allNews.filter(news => news.category_id === news_id);
    console.log(categoryNews);
    return (
        <div className='space-y-2'>
            {
                categoryNews.map(newsArtical => {
                    return <NewsCard key={newsArtical.id} article={newsArtical}></NewsCard>
                })
            }
        </div>
    );
};

export default CategoryNews;