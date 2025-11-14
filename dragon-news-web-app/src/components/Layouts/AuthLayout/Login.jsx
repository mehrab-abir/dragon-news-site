import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../../Authentication/AuthContext";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signInUser, googleLogIn } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState("");

  const logInUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(() => {
        form.reset();
        navigate(location.state || "/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //login with google
  const logInWithGoogle = () => {
    googleLogIn()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="w-11/12 mx-auto pt-42 flex items-center justify-center mb-16">
      <div className="w-full md:w-1/2 shadow-xl pt-8 px-5">
        <form onSubmit={(e) => logInUser(e)} className="">
          <h1 className="text-3xl font-bold text-center mb-4">
            Login to your account
          </h1>
          <fieldset className="fieldset w-3/4 mx-auto mt-10 border-t border-gray-300 py-10">
            {/* email  */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full outline-none"
              placeholder="Email"
              name="email"
              required
            />
            {/* password  */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full outline-none"
              placeholder="Password"
              name="password"
              required
            />
            <div className="mt-2">
              <a className="link link-hover text-lg hover:text-red-500">
                Forgot password?
              </a>
            </div>
            <div>{error ? <p className="text-red-500">{error}</p> : ""}</div>
            <button
              type="submit"
              className="btn bg-gray-800 hover:bg-gray-600 text-white mt-4"
            >
              Login
            </button>
            <button onClick={logInWithGoogle} className="btn w-full bg-white">
              <FcGoogle className="text-xl" />
              Login with Google
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
