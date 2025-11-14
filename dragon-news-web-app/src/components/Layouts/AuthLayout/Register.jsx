import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../../Authentication/AuthContext';

const Register = () => {
    const {createUser} = use(AuthContext)
    const [error,setError] = useState('');

    // const location = useLocation();
    const navigate = useNavigate();

    const registerUser = (e) =>{
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const terms = form.terms.checked;

        if(!terms){
            setError("Please accept terms and condtions");
            return;
        }

        setError('');
        createUser(email,password)
        .then((result)=>{
            console.log(result.user);
            form.reset();
            navigate('/');
        })
        .catch((error)=>{
            alert(error);
        })
    }
    return (
      <div className="w-11/12 mx-auto pt-42 flex items-center justify-center mb-16">
        <div className="w-full md:w-1/2 shadow-xl pt-8 px-5">
          <form onSubmit={(e)=>registerUser(e)} className="">
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
                name='name'
                required
              />
              {/* Email  */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full outline-none"
                placeholder="Email"
                name='email'
                required
              />

              {/* Password  */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input w-full outline-none"
                placeholder="Password"
                name='password'
                required
              />
              <div className="mt-2 text-lg">
                <label className="label">
                  <input type="checkbox" name='terms' className="checkbox" />
                  Accept{" "}
                  <span className="text-red-500">Terms & Conditions</span>
                </label>
              </div>
              <div>
                {
                    error && <p className='text-red-500'>{error}</p>
                }
              </div>
              <button type='submit' className="btn bg-gray-800 hover:bg-gray-600 text-white mt-4">
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