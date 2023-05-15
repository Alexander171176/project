import React from "react";
import { Link } from "react-router-dom";
import { NavigationLinks } from "../NavigationLinks/NavigationLinks";
import { BtnDarkMode } from "../BtnDarkMode/BtnDarkMode";

const Header = () => {
  return (
    <header className="z-10 py-1 bg-white shadow-md dark:bg-gray-800 fixed top-0 left-0 right-0">
      <nav className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        <div className="w-full container mx-auto flex flex-wrap items-center mt-0 pb-3 md:pb-0">

          <Link to="/" className="mr-4">
            <img
              src={process.env.PUBLIC_URL + "logo.png"}
              width="48"
              height="48"
              alt="logo"
            />
          </Link>

          <NavigationLinks />

          <BtnDarkMode />

          <div className="block lg:hidden pr-4">

            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-teal-500 appearance-none focus:outline-none"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>

          </div>

        </div>
      </nav>
    </header>
  );
};

export { Header };
