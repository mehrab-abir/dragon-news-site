import React from 'react';
import logo from '../assets/logo.png'
import {format} from 'date-fns'

const Header = () => {
    return (
      <div className='flex flex-col items-center justify-center py-5 fixed w-full z-50 bg-white'>
        <img src={logo} alt="" />
        <p className='py-2'>Journalism Without Fear or Favour</p>
        <p className='font-bold'>{format(new Date(),"EEEE, MMMM MM, yyyy")}</p>
      </div>
    );
};

export default Header;