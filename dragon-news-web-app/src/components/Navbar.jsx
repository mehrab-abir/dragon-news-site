import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Authentication/AuthContext";
import { Loader } from "./Loader";
import { auth } from "../Authentication/firebase.config";
import { RxCross2 } from "react-icons/rx";
import { closeMenu, openMenu } from "./ResponsiveNav";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Navbar = () => {
  const categories = use(categoryPromise);

  const { signOutUser, user, loading } = use(AuthContext);
  const navigate = useNavigate();

  if (loading) {
    return <Loader></Loader>;
  }

  //sign out user
  const signOut = () => {
    signOutUser()
      .then(() => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const currentUser = auth.currentUser;
  console.log(currentUser)

  return (
    <div className="w-11/12 mx-auto flex justify-between items-center my-4">
      {/* mobile menu toggler - for category list in mobile devices */}
      <div
        onClick={openMenu}
        className="flex md:hidden flex-col items-center justify-center space-y-1 cursor-pointer"
        id="switch"
      >
        <span className="w-[30px] h-1 bg-black"></span>
        <span className="w-[30px] h-1 bg-black"></span>
        <span className="w-[30px] h-1 bg-black"></span>
      </div>

      <div className="font-semibold text-blue-600">
        <p className="text-blue-600">
          {currentUser ? `Hi ${currentUser.displayName} 👋` : ""}
        </p>
      </div>
      <div className="hidden md:flex gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-3">
        {currentUser?.providerData[0]?.photoURL ? (
          <img
            src={currentUser.providerData[0].photoURL}
            className="w-10 rounded-full"
          />
        ) : (
          <img
            src={userIcon}
            className="rounded-full"
          />
        )}
        {/* <img
          src={
            currentUser?.providerData[0]?.photoURL
              ? currentUser.providerData[0].photoURL
              : userIcon
          }
          alt=""
          className="rounded-full"
        /> */}
        {user ? (
          <button
            onClick={signOut}
            className="btn bg-gray-800 text-white px-8 hover:bg-gray-600"
          >
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

      {/* category list in mobile devices  */}
      <div
        className="fixed top-0 left-0 h-screen w-full p-4 bg-white z-50 transition-all duration-300 -translate-x-full"
        id="mobileNav"
      >
        <div className="flex flex-col mt-8">
          <RxCross2
            className="text-black text-4xl font-bold cursor-pointer absolute right-6 top-5"
            id="closeNav"
            onClick={closeMenu}
          />
          {categories.map((category) => {
            return (
              <NavLink
                to={`/categorynews/${category.id}`}
                key={category.id}
                onClick={closeMenu}
                className="py-2 text-gray-500 hover:bg-gray-300 cursor-pointer border-b border-gray-400"
              >
                {category.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
