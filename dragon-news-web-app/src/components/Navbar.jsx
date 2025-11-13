import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-between my-4'>
            <div></div>
            <div className='flex gap-4'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex gap-3'>
                <img src={user} alt="" />
                <button className='btn bg-gray-800 text-white px-8'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;