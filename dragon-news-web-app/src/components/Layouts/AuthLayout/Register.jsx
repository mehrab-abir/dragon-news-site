import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../../Authentication/AuthContext";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, updateName, setUser} = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const registerUser = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.checked;

    if (!terms) {
      setError("Please accept terms and condtions");
      return;
    }

    setError("");
    createUser(email, password)
      .then((result) => {
        // 1) update profile on Firebase
        return updateName({ displayName: name }).then(() => {
          // 2) manually patch AuthContext so Navbar sees it right away
          setUser({
            ...result.user,
            displayName: name,
          });

          // 3) clean up + redirect
          form.reset();
          navigate(location.state || "/");
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="w-11/12 mx-auto pt-12 flex items-center justify-center mb-16">
      <div className="w-full md:w-1/2 shadow-xl pt-8 px-5">
        <form onSubmit={(e) => registerUser(e)} className="">
          <h1 className="text-3xl font-bold text-center mb-4">
            Create an account
          </h1>
          <fieldset className="fieldset w-3/4 mx-auto mt-10 border-t border-gray-300 py-10">
            {/* Name  */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full outline-none"
              placeholder="Your Name"
              name="name"
              required
            />
            {/* Email  */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full outline-none"
              placeholder="Email"
              name="email"
              required
            />

            {/* Password  */}
            <div className="relative">
              <label className="label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="input w-full outline-none"
                placeholder="Password"
                name="password"
                required
              />
              {showPassword ? (
                <FaEyeSlash
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-xl absolute right-3 bottom-2 cursor-pointer z-50"
                />
              ) : (
                <FaEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-xl absolute right-3 bottom-2 cursor-pointer z-10"
                />
              )}
            </div>

            <div className="mt-2 text-lg">
              <label className="label">
                <input type="checkbox" name="terms" className="checkbox" />
                Accept <span className="text-red-500">Terms & Conditions</span>
              </label>
            </div>
            <div>{error && <p className="text-red-500">{error}</p>}</div>
            <button
              type="submit"
              className="btn bg-gray-800 hover:bg-gray-600 text-white mt-4"
            >
              Register
            </button>
            <p className="text-center text-lg pt-6">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="text-red-500 underline hover:text-red-300"
              >
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
