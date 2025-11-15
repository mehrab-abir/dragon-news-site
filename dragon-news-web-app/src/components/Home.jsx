import React from 'react';
import { useLoaderData } from 'react-router';
import NewsCard from './Layouts/NewsBodyLayout/NewsCard';

const Home = () => {
    const news = useLoaderData();

    news.splice(0,6);
    return (
      <div className="space-y-2">
        {news.map((newsArtical) => {
          return (
            <NewsCard key={newsArtical.id} article={newsArtical}></NewsCard>
          );
        })}
      </div>
    );
};

export default Home;