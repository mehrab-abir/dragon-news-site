import React from 'react';
import { Link, NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    return (
      <div className="w-11/12 mx-auto flex justify-between items-center my-4">
        <div></div>
        <div className="flex gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>
        <div className="flex gap-3">
          <img src={user} alt="" className='rounded-full' />
          <Link
            to="/auth"
            className="btn bg-gray-800 text-white px-8 hover:bg-gray-600"
          >
            Login
          </Link>
        </div>
      </div>
    );
};

export default Navbar;