import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FcSearch } from "react-icons/fc";
import { BsFillCartFill } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Search } from "../sections/Search";
import { DropdownLoggedIn, DropdownLoggedOut } from "../index";
import { useCart } from "../../context";

export const Header = () => {
  const { cartList } = useCart();
  // const [bigToggle, setBigToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const token = JSON.parse(sessionStorage.getItem("token"));

  const [sideNav, setSideNav] = useState(false);
  function handleSideBar() {
    setSideNav(!sideNav);
    setDropDown(!dropDown);
    setToggle(true);
  }

  function handleDropdown() {
    setDropDown(!dropDown);
    // setBigToggle(!bigToggle)
  }

  function handleSearch() {
    setDropDown(false);
    setToggle(!toggle);
  }

  const [toggle, setToggle] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header>
      <div
        onClick={handleDropdown}
        className={`${
          dropDown ? "" : "hidden"
        } other:hidden absolute z-20 min-h-screen w-full bg-transparent`}
      ></div>
      <div
        onClick={handleSideBar}
        className={`${
          sideNav ? "" : "hidden"
        } absolute z-20 min-h-screen w-full bg-transparent`}
      ></div>
      <nav className="bg-blue-100 border h-[4.5rem]  border-none dark:bg-gray-900 ">
        <div className="max-w-screen-xl h-[4.5rem] max320:h-max flex flex-wrap mx-auto items-center justify-between p-4">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              className="w-[3rem] max320:w-8 max320:h-6 h-10 mr-2 "
              alt="CodeBook Logo"
            />
            <span className="self-center max320:text-base text-2xl font-semibold whitespace-nowrap dark:text-white">
              CodeBook
            </span>
          </Link>

          <div className="flex justify-center items-center md:hidden">
            <span
              onClick={() => setDarkMode(!darkMode)}
              className=" text-2xl max320:text-base p-2 w-10 h-10 hover:text-slate-500 cursor-pointer  rounded md:text-black md:p-0 dark:text-white md:dark:text-white"
              aria-current="page"
            >
              {darkMode ? (
                <MdDarkMode className=" max320:text-base text-2xl hover:text-slate-300" />
              ) : (
                <MdLightMode />
              )}
            </span>
            <Link
              to="/cart"
              className=" block  max320:text-base p-2 w-10 h-10 relative  text-gray-900 rounded text-2xl  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent"
            >
              <BsFillCartFill />
              <span className=" px-1 w-4 max320:h-4 max320:text-[12px] h-5 flex justify-center items-center absolute  top-[-0rem] max320:right-2 right-[0rem] rounded-2xl bg-red-500 text-white text-[0.9rem]">
                {cartList.length}
              </span>
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex max320:text-base items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg   focus:outline-none res880:focus:ring-2 focus:ring-gray-200 dark:text-gray-400 res880:dark:hover:bg-gray-700 res880:dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={handleSideBar}
            >
              <span className="max320:text-xl bg-transparent sr-only">
                Open main menu
              </span>
              <i className="bi bi-list max320:text-base dark:white font-black flex justify-center items-center text-3xl  "></i>
            </button>
          </div>
          <div
            className={` ${
              sideNav ? "flex" : "hidden"
            } bg-transparent h-max max320:max-w-[320px] other:justify-end other:items-center w-full md:block md:w-auto `}
            id="navbar-default"
          >
            <div className="font-medium other:bg-gray-100 z-20  justify-center content-center max320:max-w-[320px] flex other:right-[-1rem] relative flex-col other:w-[20rem] other:ml-8 other:h-max  md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-4 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <span
                onClick={() => setDarkMode(!darkMode)}
                className=" text-2xl hover:text-slate-500 other:hidden  res880:block cursor-pointer rounded md:text-black md:p-0 dark:text-white md:dark:text-white"
                aria-current="page"
              >
                {darkMode ? (
                  <MdDarkMode className=" text-2xl hover:text-slate-300" />
                ) : (
                  <MdLightMode />
                )}
              </span>

              {toggle && (
                <Search
                  setToggle={setToggle}
                  setDropDown={setDropDown}
                  setSideNav={setSideNav}
                />
              )}

              <span className=" other:hidden text-gray-900 h-8 other:h-10 rounded hover:bg-gray-100 text-2xl md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <div
                  onClick={handleSearch}
                  className="flex  text-2xl items-center h-8 other:h-10 p-2 "
                >
                  <FcSearch />
                  <span className="text-base ml-3 res880:hidden ">Search</span>
                </div>
              </span>
              <Link
                onClick={() => setDropDown(false)}
                to="/cart"
                className=" other:hidden block h-8 relative text-gray-900 rounded hover:bg-gray-100 text-2xl md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <BsFillCartFill />
                <span className=" px-1 w-4 h-5 flex justify-center items-center absolute top-[-0.4rem] right-[-0.5rem] rounded-2xl bg-red-500 text-white text-[0.9rem]">
                  {cartList.length}
                </span>
              </Link>

              <span className=" other:h-10  other:mb-2 h-8 other:p-2 p-3 text-gray-900 rounded hover:bg-gray-100 text-2xl md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <div
                  // onClick={() => setDropDown(!dropDown)}
                  onClick={handleDropdown}
                  className="flex text-2xl other:h-10 other:pb-4 items-center  "
                >
                  <IoPersonCircleOutline />

                  <span className="text-base ml-3 res880:hidden ">Profile</span>
                  {dropDown &&
                    (token ? (
                      <DropdownLoggedIn
                        setSideNav={setSideNav}
                        sideNav={sideNav}
                        setDropDown={setDropDown}
                      />
                    ) : (
                      <DropdownLoggedOut setDropDown={setDropDown} />
                    ))}
                </div>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
