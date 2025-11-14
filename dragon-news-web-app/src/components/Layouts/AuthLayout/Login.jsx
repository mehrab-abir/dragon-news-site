import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="w-11/12 mx-auto pt-42 flex items-center justify-center mb-16">
      <div className="w-full md:w-1/2 shadow-xl pt-8 px-5">
        <form action="" className="">
          <h1 className="text-3xl font-bold text-center mb-4">
            Login your account
          </h1>
          <fieldset className="fieldset w-3/4 mx-auto mt-10 border-t border-gray-300 py-10">
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full outline-none"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full outline-none"
              placeholder="Password"
            />
            <div className="mt-2">
              <a className="link link-hover text-lg hover:text-red-500">
                Forgot password?
              </a>
            </div>
            <button className="btn bg-gray-800 hover:bg-gray-600 text-white mt-4">
              Login
            </button>
            <p className="text-center text-lg pt-6">
              Don't have an account?{" "}
              <Link
                to="/auth/register"
                className="text-red-500 underline hover:text-red-300"
              >
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
