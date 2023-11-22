import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTitle } from "../hook/useTitle";
import { register } from "../services/";

export const Register = () => {
  useTitle("Register")
  const [verPassword, setVerPassword] = useState(true)
  const [password, setPassword] = useState("")
  const [confirm_password, setConfirm_password] = useState("")
  const [checkbox, setCheckbox] = useState(false);
  const [type, setType] = useState("password");
  const navigate = useNavigate()

  const username = useRef()
  const email = useRef()
  const fullName = useRef()
  useEffect(() => {
    if (checkbox) {
      setType("text")
    } else {
      setType('password')
    }
  }, [checkbox])

  useEffect(() => {

    if (password === confirm_password) {
      setVerPassword(true)
    } else {
      setVerPassword(true)
    }

  }, [confirm_password, password])

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const authDetail = {
        name: fullName.current.value,
        username: username.current.value,
        email: email.current.value,
        password: password,
      }
      const data = await register(authDetail)
      data.accessToken ? navigate('/products') : toast.error(data)
    }
    catch (error) {
      toast.error(error.message, { closeButton: true, position: "bottom-center" });
    }
  }






  useTitle("Register for Codebook");

  return (
    <div className="flex  justify-center h-screen">
      <div className="w-full max-w-lg max-h-[45rem] h880:mt-20 h880:max-h-[60rem] my-6 p-4 bg-white border  border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6 h880:space-y-10 " onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Register for CodeBook
          </h5>
          {/* full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Name:
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <i className=" dark:text-slate-400 bi bi-person-fill"></i>
              </div>
              <input
                ref={fullName}
                type="text"
                id="fullName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="First,  middle,  surname"
                name="fullName"
              />
            </div>
          </div>
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Create Username:
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <i className=" dark:text-slate-400 bi bi-person-circle"></i>
              </div>
              <input
                ref={username}
                type="text"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="janedoe123"
                name="username"
              />
            </div>
          </div>
          {/* EMail */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter email:
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <i className=" dark:text-slate-400 bi bi-envelope-fill"></i>
              </div>
              <input
                ref={email}
                type="text"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="jane_doe@exmaple.com"
              />
            </div>
          </div>
          {/* {create password} */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm mb-2 font-medium text-gray-900 dark:text-white"
            >
              Create Password:{verPassword ? '' : <span className=" ml-2 text-sm text-red-500">password not match</span>}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <FaLock className=" dark:text-slate-400 text-xl " />
              </div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={type}
                name="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="••••••••"
              />
            </div>
            <div className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              <label className="mr-2 ">Show Password</label>
              <input
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                type="checkbox" id="checkbox" onChange={() => setCheckbox(!checkbox)} checked={checkbox} />
            </div>
          </div>
          
          <div>
            <label
              htmlFor="confirm_password"
              className="block text-sm mb-2 font-medium text-gray-900 dark:text-white"
            >
              Confirm Password:
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <FaLock className=" dark:text-slate-400 text-xl " />
              </div>
              <input
                onChange={(e) => setConfirm_password(e.target.value)}
                value={confirm_password}
                type={type}
                name="confirm_password"
                id="confirm_password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={''}
            className="w-full text-white disabled:bg-blue-800 dark:disabled:bg-blue-700 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </button>

          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Registered?{" "}
            <Link
              to="/login"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
