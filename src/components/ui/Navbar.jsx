import React from "react";
import { useState, useContext } from "react";
import { themecontext } from "../../App";
const Navbar = () => {
  const { theme, toggleTheme } = useContext(themecontext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`transition-all py-3 border-b-2 ${
          theme === "dark" ? "border-slate-700" : "border-slate-400"
        } ease-in-out sticky top-0 z-50 ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-900 to-blue-900"
            : "bg-gradient-to-br from-gray-50 to-blue-300"
        } text-${theme === "light" ? "black" : "white"} border-gray-200`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-4">
          <span
            className={`bg-gradient-to-r font-bold text-5xl animate-pulse ${
              theme === "dark"
                ? "from-cyan-400 to-blue-600"
                : "from-blue-400 to-cyan-600"
            } bg-clip-text text-transparent`}
          >
            Portfolio
          </span>
          <div className="flex items-center md:order-2">
            <button
              onClick={toggleMenu}
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-end w-full md:flex md:w-auto md:order-2 ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-user"
          >
            <ul
              className={`flex flex-col justify-end text-xl font-medium p-4 md:p-0 mt-4 border border-gray-100
                 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700 ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              <li>
                <button
                  onClick={() => scrollToSection("Hero")}
                  className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                    theme === "light" ? "text-black" : "text-white"
                  }`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("About")}
                  className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                    theme === "light" ? "text-black" : "text-white"
                  }`}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("Project")}
                  className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                    theme === "light" ? "text-black" : "text-white"
                  }`}
                >
                  Project
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("Contact")}
                  className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                    theme === "light" ? "text-black" : "text-white"
                  }`}
                >
                  Contact
                </button>
              </li>
              <li
                onClick={toggleTheme}
                className="cursor-pointer flex gap-1 items-center"
              >
                <p
                  className={`capitalize hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                    theme === "light" ? "text-black" : "text-white"
                  }`}
                >
                  {theme === "dark" ? "light" : "dark"}
                </p>
                {theme === "dark" ? "☀️" : "🌙"}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;