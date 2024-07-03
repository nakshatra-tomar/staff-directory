import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Staff Directory</div>
        <div className="flex space-x-4">
          <a href="/" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="/employees" className="text-white hover:text-gray-300">
            Employees
          </a>
          <a href="/add" className="text-white hover:text-gray-300">
            Add Employee
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
