import React from "react";
import { Link } from "react-router-dom";

function CenterNavLinks() {
  return (
    <>
      <ul className="flex space-x-8 text-2xl">
        <Link to="">Home</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/kids">Kids</Link>
      </ul>
    </>
  );
}

export default CenterNavLinks;
