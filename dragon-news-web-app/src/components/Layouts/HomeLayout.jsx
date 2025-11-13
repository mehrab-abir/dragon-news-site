import React from 'react';
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
        <main>
            <section className="categoryList">

            </section>
            <section className="news">
                <Outlet></Outlet>
            </section>
            <section className="right-side-bar">

            </section>
        </main>
      </div>
    );
};

export default HomeLayout;