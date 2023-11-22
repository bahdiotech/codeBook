import React, { useEffect, useRef, useState } from "react";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTitle } from "../hook/useTitle";
import { login } from "../services";

export const Login = () => {
  const [toggleEmail, setToggleEmail] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [type, setType] = useState("password");


  useEffect(() => {
   if( checkbox ) {
    setType("text")
   } else {
    setType('password')
   }
  }, [checkbox])
  

  const email = useRef();
  const password = useRef();
  const username = useRef();

  const navigate = useNavigate();

  useTitle("Log In ");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const authDetail = {
        email: email.current.value,
        password: password.current.value,
        username: "null" || username.current.value,
      };
      const data = await login(authDetail);

      data.accessToken && navigate("/products");
      !data.accessToken && toast.error(data);
      data.accessToken &&
        toast.success("Login Success", {
          closeButton: false,
          position: "top-center",
        });
      !data.accessToken && setError(true);
      !data.accessToken && setMessage(data);
    }
    catch (error) {
      toast.error((error.message === "Bad Request" && 'User Not Found'), { closeButton: true, position: "bottom-center" });
    }
  }


  return (
    <div className="flex  justify-center h-screen">
      <div className="w-full  h880:mt-20 h880:min-h-[40rem] max-w-lg max-h-[30rem] my-4 p-3 bg-white border  border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6 h880:space-y-10 " onSubmit={handleLogin}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Log In to CodeBook
          </h5>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            {toggleEmail && (
              <button
                type="button"
                onClick={() => setToggleEmail(!toggleEmail)}
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Login with email
              </button>
            )}
            {!toggleEmail && (
              <button
                type="button"
                onClick={() => setToggleEmail(!toggleEmail)}
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Login with username
              </button>
            )}
            {error && (
              <h6 className=" mt-4 mb--5 text-red-700 text-sm">
                {/* email or password is incorrect ! */} {message}
              </h6>
            )}
          </div>
          <div>
            {!toggleEmail ? (
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email:
                </label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <MdEmail className=" dark:text-slate-400" />
                  </div>
                  <input
                    ref={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    // value={email}
                    type="text"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="jane_doe@exmaple.com"
                  />
                </div>
              </div>
            ) : (
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username:
                </label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <i className=" dark:text-slate-400 bi bi-envelope-fill"></i>
                  </div>
                  <input
                    ref={username}
                    // onChange={(e) => setUsername(e.target.value)}
                    // value={username}
                    type="text"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="janedoe123"
                  />
                </div>
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password:
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <FaLock className=" dark:text-slate-400 text-xl " />
              </div>
              <input
                ref={password}
                // onChange={(e) => setPassword(e.target.value)}
                // value={password}
                type={type}
                name="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="••••••••"
              />
              
            </div>
            <div className='mt-[-1rem]'>
              <label className="mr-2 ">Show Password</label>
              <input type="checkbox" id="checkbox" onChange={() => setCheckbox(!checkbox)} checked={checkbox} />
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <Link
              to="#"
              className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link
              to="/register"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
