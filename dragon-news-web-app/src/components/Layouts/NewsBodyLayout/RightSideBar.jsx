import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import swimming from '../../../assets/swimming.png';
import classImg from '../../../assets/class.png';
import playground from '../../../assets/playground.png';
import bg from '../../../assets/bg.png'

const RightSideBar = () => {
    return (
      <div>
        <div className="space-y-2 mt-4">
          <button className="btn w-full bg-white">
            <FcGoogle className="text-xl" />
            Login with Google
          </button>
          <button className="btn w-full bg-white">
            <BsGithub className="text-xl" />
            Login with GitHub
          </button>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">Find Us On</h3>
          <div className="w-full p-4 border border-gray-400 cursor-pointer hover:bg-gray-100 flex items-center gap-2 text-lg">
            <FaFacebook className="text-blue-600 text-2xl" />
            Facebook
          </div>

          <div className="w-full p-4 border border-gray-400 cursor-pointer hover:bg-gray-100 flex items-center gap-2 text-lg font-semibold">
            <FaXTwitter className="text-black font-semibold text-2xl" />X
          </div>

          <div className="w-full p-4 border border-gray-400 cursor-pointer hover:bg-gray-100 flex items-center gap-2 text-lg">
            <FaInstagram className="text-red-500 text-2xl" />
            Instagram
          </div>
        </div>

        <div className='bg-gray-300 p-3 mt-4 flex flex-col space-y-3'>
            <h3 className="text-lg font-bold mb-2">Q-Zone</h3>
            <img src={swimming} alt="" />
            <img src={classImg} alt="" />
            <img src={playground} alt="" />
        </div>

        <div className='mt-4'>
            <img src={bg} alt="" className='w-full' />
        </div>
      </div>
    );
};

export default RightSideBar;