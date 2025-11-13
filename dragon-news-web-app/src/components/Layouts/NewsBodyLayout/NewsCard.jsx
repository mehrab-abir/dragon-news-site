import React from "react";
import { IoMdBookmark } from "react-icons/io";
import { CiShare2 } from "react-icons/ci";

const NewsCard = ({ article }) => {
  const { title, details, thumbnail_url, total_view, rating, author, tags } =
    article;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-GB",
    { year: "numeric", month: "short", day: "2-digit" }
  );

  const shortDetails =
    details.length > 180 ? details.slice(0, 180).trim() + "..." : details;

  return (
    <div className="card bg-base-100 shadow-xl rounded-2xl max-w-xl">
      {/* top header */}
      <div className="px-6 pt-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 h-10 rounded-full ring ring-base-200 ring-offset-2">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-400">
          {/* simple “share / bookmark” icons using text so no extra libs */}
          <span>
            <IoMdBookmark className="text-2xl text-gray-600 cursor-pointer" />
          </span>
          <span>
            <CiShare2 className="text-2xl text-gray-600 cursor-pointer" />
          </span>
        </div>
      </div>

      {/* body */}
      <div className="card-body pt-4 pb-3 gap-3">
        <h3 className="card-title text-base md:text-lg leading-snug">
          {title}
        </h3>

        {/* image */}
        <figure className="pt-1">
          <img
            src={thumbnail_url}
            alt={title}
            className="w-full rounded-xl object-cover max-h-56"
          />
        </figure>

        <p className="text-sm text-gray-600">
          {shortDetails}
          <span className="text-blue-800 font-bold underline cursor-pointer hover:text-blue-600">
            Read More
          </span>
        </p>

        {/* tags */}
        <div className="flex flex-wrap gap-2 mt-1">
          {tags.map((tag) => (
            <span key={tag} className="badge badge-ghost text-xs">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* footer */}
      <div className="px-6 pb-4 pt-3 border-t border-gray-300 flex items-center justify-between">
        {/* rating */}
        <div className="flex items-center gap-2">
          <div className="rating rating-sm">
            {[1, 2, 3, 4, 5].map((star) => (
              <input
                key={star}
                type="radio"
                className="mask mask-star-2 bg-orange-400"
                checked={star === rating.number}
                readOnly
              />
            ))}
          </div>
          <span className="text-sm font-semibold">{rating.number}.0</span>
          <span className="badge badge-outline badge-sm capitalize">
            {rating.badge}
          </span>
        </div>

        {/* views */}
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <span className="text-lg leading-none">👁</span>
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
