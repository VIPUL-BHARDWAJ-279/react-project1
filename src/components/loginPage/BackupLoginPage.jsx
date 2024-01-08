import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      className="text-black h-[100vh] flex justify-center items-center bg-cover"
      style={{
        backgroundImage:
          "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallpaperflare.com%2Fsearch%3Fwallpaper%3Dminimal%2Blandscape&psig=AOvVaw0IjqdzP9BuCGZr_o3pPiza&ust=1704550171527000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJDwx7O2xoMDFQAAAAAdAAAAABAD')",
      }}
    >
      <div>
        <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30  relative">
          <h1>Login</h1>
          <form action="">
            <div className="relative my-4">
              <input
                type="email"
                className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:ring-0 focus:text-white focus:border-blue-600 peer"
              />
              <label
                htmlFor=""
                className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder"
              >
                Your email
              </label>
            </div>
            <div>
              <input
                type="password"
                className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:ring-0 focus:text-white focus:border-blue-600 peer"
              />
              <label
                htmlFor=""
                className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder"
              >
                Your Password
              </label>
            </div>
            <div>
              <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="Remember Me"></label>
              </div>
              <span>Forgot Password?</span>
            </div>
            <button type="submit">Login</button>
            <div>
              <span>
                New Here? <Link to="/signup">Create an account</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
