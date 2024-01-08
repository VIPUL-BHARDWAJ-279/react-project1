import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className=" h-screen w-screen bg-slate-500 flex justify-center items-center">
      <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30  relative">
        <h1 className="font-bold">Signup</h1>
        <br />
        <br />
        <br />
        <div className="">
          <input
            type="text"
            name=""
            id=""
            className=" border-slate-200 rounded-t-md border-2 w-64 "
          />
          <hr />
          <label htmlFor="" className="">
            Name
          </label>
        </div>
        <br />
        <br />
        <div className="">
          <input
            type="email"
            name=""
            id=""
            className=" border-slate-200 rounded-t-md border-2 w-64 "
          />
          <hr />
          <label htmlFor="" className="">
            Email
          </label>
        </div>
        <br />
        <br />
        <div className="">
          <input
            type="password"
            name=""
            id=""
            className=" border-slate-200 rounded-t-md border-2 w-64 "
          />
          <hr />
          <label htmlFor="" className="">
            Password
          </label>
        </div>
        <br />
        <br />
        <div className="">
          <input
            type="password"
            name=""
            id=""
            className=" border-slate-200 rounded-t-md border-2 w-64 "
          />
          <hr />
          <label htmlFor="" className="">
            Confirm Password
          </label>
        </div>
        <br />
        <br />
        <button
          type="submit"
          className="bg-slate-800 text-white rounded-md p-1"
        >
          Signup
        </button>
        <br />
        <br />
        <div>
          <span>
            Existing User? <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
