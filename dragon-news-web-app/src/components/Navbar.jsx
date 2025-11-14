import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import userIcon from '../assets/user.png'
import { AuthContext } from '../Authentication/AuthContext';
import { Loader } from './Loader';
import { auth } from '../Authentication/firebase.config';

const Navbar = () => {
  const {signOutUser,user,loading} = use(AuthContext);
  const navigate = useNavigate();

  if(loading){
    return <Loader></Loader>;
  }

  //sign out user
  const signOut = () =>{
    signOutUser()
    .then(()=>{
      navigate('/');
    })
    .catch(error =>alert(error.message))
  }

  const currentUser = auth.currentUser;

    return (
      <div className="w-11/12 mx-auto flex justify-between items-center my-4">
        <div className='font-semibold text-red-400'>Logged in as '{currentUser ? currentUser.displayName: ''}'</div>
        <div className="flex gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>
        <div className="flex gap-3">
          <img src={userIcon} alt="" className="rounded-full" />
          {user ? (
            <button onClick={signOut} className="btn bg-gray-800 text-white px-8 hover:bg-gray-600">
              Log Out
            </button>
          ) : (
            <Link
              to="/auth"
              className="btn bg-gray-800 text-white px-8 hover:bg-gray-600"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    );
};

export default Navbar;