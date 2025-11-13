import React, { Suspense } from 'react';
import Header from '../Header';
import Navbar from '../Navbar';
import CategoryList from './NewsBodyLayout/CategoryList';
import CategoryNews from './NewsBodyLayout/CategoryNews';
import RightSideBar from './NewsBodyLayout/RightSideBar';
import { Outlet } from 'react-router';
import NewsMarquee from '../NewsMarquee';

const HomeLayout = () => {
    return (
      <div>
        <header>
          <Header></Header>
          <NewsMarquee></NewsMarquee>
          <Navbar></Navbar>
        </header>

        {/* newsbody section  */}
        <main className="w-11/12 mx-auto grid grid-cols-12 gap-4">
          <section className="categoryList col-span-3">
            <h2 className="text-lg font-bold">All Category</h2>
            <Suspense
              fallback={
                <span className="loading loading-dots loading-xl"></span>
              }
            >
              <CategoryList></CategoryList>
            </Suspense>
          </section>
          <section className="news col-span-6">
            <h2 className="text-lg font-bold">News</h2>
            <Outlet></Outlet>
          </section>
          <section className="right-side-bar col-span-3">
            <h2 className="text-lg font-bold">Login In With</h2>
          </section>
        </main>
      </div>
    );
};

export default HomeLayout;