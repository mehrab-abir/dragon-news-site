import React from "react";
import { Link } from "react-router";
import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-5 bg-black py-6">
      <div className="w-11/12 mx-auto text-white flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold mb-4">Dragon News</h1>
          <p>&copy;Copyrights Reserved - 2025</p>
          <Link
            to="https://github.com/mehrab-abir"
            target="blank"
            className="text-red-600 text-lg font-semibold mt-1 hover:text-red-300"
          >
            {" "}
            Mehrab Jalil Abir
          </Link>
        </div>

        <div className="social-links flex gap-8">
          <Link to="https://github.com/mehrab-abir" target="blank">
            <BsGithub className="text-2xl text-white hover:text-purple-500" />
          </Link>
          <Link to="https://github.com/mehrab-abir" target="blank">
            <FaFacebook className="text-2xl text-white hover:text-blue-500" />
          </Link>
          <Link to="https://www.instagram.com/mehrab.abir_/" target="blank">
            <FaInstagram className="text-2xl text-white hover:text-red-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
