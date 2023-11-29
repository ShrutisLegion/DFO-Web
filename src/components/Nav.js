import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="mx-auto">
        <nav className="bg-gray-400 border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/DFO-Bot" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-DewT2kX0DFJhWYhvneOECuXXp351LZrLaA&usqp=CAU"
                className="h-8"
                alt="DFO Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                DFO Farmers Data - Prayagraj
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
