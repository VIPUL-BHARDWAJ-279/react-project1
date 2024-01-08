import React from 'react'
import CenterNavLinks from './CenterNavLinks'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
      <>
          <nav className="flex relative justify-center items-center p-4 m-0 w-screen h-18 bg-red-600 text-white font-mono font-semibold border-b-2 border-slate-200">
              <div className="rounded-full bg-slate-800 absolute start-4 p-2">Logo</div>
              <CenterNavLinks/>
              <Link to="login">
              <button className="bg-slate-800 absolute rounded-md end-4  p-2" >Login/Signup</button></Link>
          </nav>
      </>
  )
}

export default Navbar

