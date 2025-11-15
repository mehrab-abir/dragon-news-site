import React from 'react';
import Navbar from '../../Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Footer';

const Authentication = () => {
    return (
        <div>
            <div className=''>
                <Outlet></Outlet>
            </div> 

            <Footer></Footer>
        </div>
    );
};

export default Authentication;