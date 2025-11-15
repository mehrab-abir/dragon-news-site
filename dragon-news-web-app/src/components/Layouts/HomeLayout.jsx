import React, { Suspense } from 'react';
import Header from '../Header';
import Navbar from '../Navbar';
import CategoryList from './NewsBodyLayout/CategoryList';
import CategoryNews from './NewsBodyLayout/CategoryNews';
import RightSideBar from './NewsBodyLayout/RightSideBar';
import { Outlet } from 'react-router';
import NewsMarquee from '../NewsMarquee';
import Footer from '../Footer';

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
          <aside className="categoryList col-span-3 sticky top-0 h-fit hidden md:block">
            <h2 className="text-lg font-bold">All Category</h2>
            <Suspense
              fallback={
                <span className="loading loading-dots loading-xl"></span>
              }
            >
              <CategoryList></CategoryList>
            </Suspense>
          </aside>
          <section className="news col-span-12 md:col-span-6">
            <h2 className="text-lg font-bold">News</h2>
            <Outlet></Outlet>
          </section>
          <section className="right-side-bar col-span-3 hidden md:block sticky h-fit top-0">
            <RightSideBar className="sticky top-0 h-fit"></RightSideBar>
          </section>
        </main>
        <Footer></Footer>
      </div>
    );
};

export default HomeLayout;