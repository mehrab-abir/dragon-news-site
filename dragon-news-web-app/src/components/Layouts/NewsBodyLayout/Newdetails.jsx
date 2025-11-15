import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import Header from '../../Header';
import RightSideBar from './RightSideBar';
import Footer from '../../Footer';
import { auth } from '../../../Authentication/firebase.config';

const Newdetails = () => {
    const allNews = useLoaderData();

    const {id} = useParams();

    const news = allNews?.find((item) => item.id === id) || null;

    const currentUser = auth.currentUser;

    return (
      <div>
        <header>
          <Header></Header>
        </header>

        <div className="w-11/12 mx-auto mb-2">
          <p className="text-blue-600">
            {currentUser ? `Hi ${currentUser.displayName} 👋` : ""}
          </p>
        </div>

        <main className="w-11/12 mx-auto grid grid-cols-12 gap-4">
          <section className="col-span-12 md:col-span-9 p-3 border border-gray-300">
            <img
              src={news.image_url}
              alt=""
              className="w-full h-96 object-cover"
            />
            <h1 className="text-2xl font-bold mt-2">{news.title}</h1>
            <p className="mt-4">{news.details}</p>
            <Link
              to={`/categorynews/${news.category_id}`}
              className="btn bg-black text-white mt-6"
            >
              All news this category →
            </Link>
          </section>

          <section className="hidden md:block col-span-3">
            <h1 className="text-lg font-bold">Login With</h1>
            <RightSideBar></RightSideBar>
          </section>
        </main>
        <Footer></Footer>
      </div>
    );
};

export default Newdetails;