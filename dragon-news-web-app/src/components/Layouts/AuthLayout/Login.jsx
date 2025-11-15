import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../../Authentication/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signInUser, googleLogIn, resetPassword, setLoading } =
    use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const emailRef = useRef();

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false)

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
        setLoading(false);
      });
  };

  const forgotPassword = () => {
    const email = emailRef.current.value;
    if (email === "") {
      alert("Please enter the email that is associated with this account");
    }
    // console.log(email);

    resetPassword(email)
      .then(() => {
        alert(
          "Password reset link sent. Please check your inbox including spam folder."
        );
      })
      .catch((error) => alert(error.message));
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
    <div className="w-11/12 mx-auto pt-12 flex items-center justify-center mb-16">
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
                  className="text-xl absolute right-3 bottom-2 cursor-pointer z-10"
                />
              ) : (
                <FaEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-xl absolute right-3 bottom-2 cursor-pointer z-50"
                />
              )}
            </div>

            <div className="mt-2">
              <a
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
                className="link link-hover text-lg hover:text-red-500"
              >
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

        {/* password reset modal  */}
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <p className="text-lg">
              Please enter the email that is associated with your account
            </p>
            <input
              type="email"
              name=""
              className="input w-full outline-none mt-2"
              ref={emailRef}
            />
            <button
              onClick={forgotPassword}
              className="btn bg-green-600 text-white cursor-pointer mt-3"
            >
              Send Password Reset Link
            </button>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default Login;
