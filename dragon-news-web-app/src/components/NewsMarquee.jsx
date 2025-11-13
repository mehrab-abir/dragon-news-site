import React from 'react';
import Marquee from "react-fast-marquee";

const NewsMarquee = () => {
    return (
      <div className='w-11/12 mx-auto flex gap-4 bg-gray-200 p-3'>
        <button className='btn bg-red-600 text-white'>Latest</button>
        <Marquee>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim laborum quam sequi aut et animi minima unde laudantium aliquam distinctio!
        </Marquee>
      </div>
    );
};

export default NewsMarquee;