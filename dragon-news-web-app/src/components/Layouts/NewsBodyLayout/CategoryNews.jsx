import React from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "./NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const news_id = Number(id);

  const allNews = useLoaderData();
  // console.log(allNews);

  let categoryNews = allNews || [];

  if (news_id === 1) {
    categoryNews = categoryNews.filter((news) => news.others.is_today_pick);
  } else if (news_id !== 0) {
    categoryNews = categoryNews.filter((news) => news.category_id === news_id);
  }

  return (
    <>
      {categoryNews.length > 0 ? (
        <div className="space-y-2">
          {categoryNews.map((newsArtical) => {
            return (
              <NewsCard key={newsArtical.id} article={newsArtical}></NewsCard>
            );
          })}
        </div>
      ) : (
        <h2 className="text-lg font-bold text-gray-600 mt-8 text-center bg-gray-200 p-3">
          -No News in this category right now. Check back later.-
        </h2>
      )}
    </>
  );
};

export default CategoryNews;
