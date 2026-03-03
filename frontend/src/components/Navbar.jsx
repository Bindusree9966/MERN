import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-900 font-bold px-6 py-6">
      <ul className="flex justify-around text-white">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;