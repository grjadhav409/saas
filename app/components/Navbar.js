import React from "react";
import ButtonLogin from "./ButtonLogin";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-grey shadow-md">
      <div className="text-xl font-bold">ProfileAI</div>
      <ul className="flex space-x-6">
        <li>
          <a href="/" className="text-gray-700 hover:text-blue-500 ">
            Home
          </a>
        </li>
        <li>
          <a href="#pricing" className="text-gray-700 hover:text-blue-500">
            Pricing
          </a>
        </li>
        <li>
          <a href="#faq" className="text-gray-700 hover:text-blue-500">
            FAQ
          </a>
        </li>
        <li>
          <ButtonLogin isNav={true}></ButtonLogin>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
