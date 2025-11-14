import React from 'react';
import Navbar from '../../Navbar';
import { Link, Outlet } from 'react-router';
import Footer from '../../Footer';

const Authentication = () => {
    return (
        <div>
            <header className='bg-gray-200 fixed w-full py-4 z-50'>
                <Navbar></Navbar>
            </header>

            <div className=''>
                <Outlet></Outlet>
            </div> 

            <Footer></Footer>
        </div>
    );
};

export default Authentication;