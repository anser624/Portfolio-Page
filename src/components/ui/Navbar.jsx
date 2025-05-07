import React from "react";
import { useState } from "react";
import { createContext } from "react";


export const themecontext = createContext();

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
  };

  return (
    <themecontext.Provider value={{theme,toggleTheme} }>
      <nav
        className={`transition-colors py-3 duration-1200 ease-in-out sticky top-0 z-50
        ${theme === "dark" ? "bg-gradient-to-br from-gray-900 to-blue-900" : "bg-gradient-to-br from-gray-100 to-blue-100"}
        text-${theme === "light" ? "black" : "white"} border-gray-200 `}
      >
        <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4">
            <span className="self-center text-4xl font-bold whitespace-nowrap dark:text-white">
              Portfolio
            </span>
          <div className="flex items-center flex-col md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
            onClick={toggleMenu}
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  // stroke-Linecap="round"
                  // stroke-Linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center  duration-300 ease-in-out justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
            id="navbar-user"
          >
            <ul
              className={`flex transition-colors duration-300 ease-in-out flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg 
            md:space-x-8
             rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   
             dark:border-gray-700 text-${theme === "light" ? "black" : "white"}`}
            >
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 text-${theme==="light" ?"black" : "white"} rounded-sm hover:bg-gray-100 md:hover:bg-transparent
                   md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
                   dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 text-${theme==="light" ?"black" : "white"} rounded-sm hover:bg-gray-100 md:hover:bg-transparent
                   md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
                   dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 text-${theme==="light" ?"black" : "white"} rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 
                  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
                  md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  Project
                </a>
              </li>
              <li
                onClick={toggleTheme}
                className="cursor-pointer flex gap-1 items-center"
              >
                <p className="capitalize 
                hover:bg-gray-100 md:hover:bg-transparent 
                  md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                   dark:hover:text-white md:dark:hover:bg-transparent  dark:border-gray-700">
                    {theme === "dark" ? "light" : "dark"}</p>
                    {theme === "dark" ? "☀️" : "🌙"}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </themecontext.Provider>
  );
};

export default Navbar;
