import React from "react";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const Footeer = () => {
  return (
    <Footer container className="bg-blue-100">
      <div className="w-full">
        <div className="grid w-full other:justify-between res880:grid-cols-1 other:grid-cols-1 sm:justify-between md:flex md:grid-cols-1">
          <Link to="/" className="flex mb-5 items-center " >
            <img className="w-10 mr-3" src={Logo} alt="codebook" />
            <span className="text-2xl font-bold text-black dark:text-white ">
              CodeBook
            </span>
          </Link>
          <div className=" other:flex other:justify-between other:w-full sm:mt-0 sm:grid-cols-3 sm:gap-0">
            
            <Link className="font-bold mr-10   dark:text-white list-none" href="#">
                About
              </Link>
            
              <Link className="font-bold mr-10 dark:text-white list-none" href="#">
                Privacy
              </Link>
            
              <Link className="font-bold dark:text-white list-none" href="#">
                Terms &amp; Conditions
              </Link>
            
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="CodeBook™" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};
