import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const User = () => {
  return (
    <div>
      {/* Login Form */}
      <div className="my-32 px-96">
        <div className="loginForm bg-gray-300 p-10">
          <form>
            <div className="email">
              <label>Name</label>
              <input
                className="block px-3 py-2 rounded w-full"
                type="Email"
                placeholder="Email"
              />
            </div>
            <div className="password my-3">
              <label>Password</label>
              <input
                className="block px-3 py-2 rounded w-full"
                type="Password"
                placeholder="Password"
              />
            </div>
            <div className="forgot mb-2 flex justify-between items-center">
              <Link to="/register" className="cursor-pointer hover:text-blue-400 hover:underline">Create new account?</Link>
              <span className="cursor-pointer hover:text-blue-400 hover:underline">Forgot Password?</span>
            </div>
            <div className="submit">
              <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Sign In
              </button>
            </div>

            <div className="loginBtn grid grid-cols-2 gap-x-4 mt-5">
              <div className="googleBtn border-2 cursor-pointer border-gray-600 py-1 rounded justify-center  flex items-center space-x-3">
                <FcGoogle />
                <span>Sign in with Google</span>
              </div>
              <div className="facebookBtn border-2 cursor-pointer border-gray-600 py-1 rounded justify-center  flex items-center space-x-3">
                <FaFacebook className="text-[#3469d2]" />
                <p>Sign in with Facebook</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
