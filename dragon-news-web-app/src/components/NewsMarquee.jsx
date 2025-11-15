import React, { use } from 'react';
import Marquee from "react-fast-marquee";

const newsPromise = fetch('/news.json').then(res =>res.json());

const NewsMarquee = () => {
  const news = use(newsPromise);
  
  const breakingNews = news.filter((singleNews) => singleNews.others.is_today_pick===true);

    return (
      <div className=''>
        <div className='w-11/12 mx-auto flex gap-4 bg-gray-200 p-3'>
        <button className='btn bg-red-600 text-white'>Latest</button>
        <Marquee>
          {
            breakingNews.map((brNews)=> {
              return <p>{brNews.title}.&nbsp;</p>
            })
          }
        </Marquee>
      </div>
      </div>
      
    );
};

export default NewsMarquee;