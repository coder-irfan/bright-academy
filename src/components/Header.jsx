import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

function Header({ scrolled, handleNotAvailable }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="relative font-jost">
        <div
          className={`2xl:max-w-[100rem] mx-auto px-4 sm:px-6 md:px-8 py-3 md:py-4 lg:px-16 fixed top-0 right-0 left-0 z-[60]
          transition-color duration-300 ${
            scrolled
              ? "bg-colors-white/90 shadow-sm shadow-colors-white/80"
              : "bg-transparent"
          }`}
        >
          <div
            className={`md:hidden fixed w-screen h-screen opacity-80 inset-0 bg-black transition-all duration-700 z-20
            ${
              isOpen
                ? "translate-x-0 delay-100 pointer-events-auto"
                : "translate-x-full delay-200 pointer-events-none"
            }`}
          ></div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="images/logo.webp"
                alt="logo"
                className="w-9 h-9 lg:w-10 lg:h-10"
              />
              <p className="lg:text-lg font-medium">Bright Academy</p>
            </div>

            <div className="z-50">
              <nav
                className={`md:relative flex flex-col md:flex-row md:items-center gap-4 md:gap-10 fixed top-0 right-0 h-full w-4/5 md:left-0 sm:w-2/3 transition-all duration-700 pt-24 pr-6 md:pr-0 md:pt-0
                  md:h-auto md:w-auto md:translate-x-0 bg-colors-white/90 md:bg-transparent space-y-4 md:space-y-0 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                  }`}
              >
                <ul className="flex flex-col md:flex-row items-end md:items-center gap-4 lg:gap-6 text-base lg:text-lg font-medium">
                  <li className="hover-link">
                    <a href="#home" className="">
                      Home
                    </a>
                  </li>
                  <li className="h-[0.06rem] w-full bg-colors-darkGray md:hidden"></li>
                  <li className="hover-link">
                    <a href="#courses" className="">
                      Courses
                    </a>
                  </li>
                  <li className="h-[0.05rem] w-full bg-colors-darkGray md:hidden"></li>
                  <li className="hover-link">
                    <a href="#benefits" className="">
                      Benefits
                    </a>
                  </li>
                  <li className="h-[0.05rem] w-full bg-colors-darkGray md:hidden"></li>
                  <li className="hover-link">
                    <a href="#teachers" className="">
                      Teachers
                    </a>
                  </li>
                  <li className="h-[0.05rem] w-full bg-colors-darkGray md:hidden"></li>
                  <li className="hover-link">
                    <a href="#contact" className="">
                      Contact
                    </a>
                  </li>
                  <li className="h-[0.06rem] w-full bg-colors-darkGray md:hidden"></li>
                </ul>

                {isOpen && (
                  <div
                    className="absolute top-0 right-5 sm:right-6 text-[1.4rem] md:hidden border border-colors-purple rounded-md p-1"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaTimes
                      aria-label="Close Menu"
                      className="cursor-pointer text-colors-purple"
                    />
                  </div>
                )}

                <button
                  onClick={handleNotAvailable}
                  className="button self-end"
                >
                  Sign In
                </button>
              </nav>
            </div>
          </div>
          {!isOpen && (
            <div
              className="absolute top-3.5 right-5 sm:right-6 text-[1.4rem] md:hidden border border-colors-purple rounded-md p-1"
              onClick={() => setIsOpen(true)}
            >
              <FaBars
                aria-label="Open Menu"
                className="cursor-pointer text-colors-purple"
              />
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
