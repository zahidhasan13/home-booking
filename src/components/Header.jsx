import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  IoCloseSharp,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="bg-sky-600 hidden md:block">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Left Section: Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-white text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-white text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-white text-2xl">
              <FaTwitter />
            </a>
          </div>

          {/* Right Section: Address, Location, Phone */}
          <div className="flex space-x-4">
            <p className="text-lg flex items-center gap-2 font-semibold text-white">
              <span>
                <IoLocationOutline className="text-2xl" />
              </span>
              New York City, USA
            </p>
            <p className="text-lg flex items-center gap-2 font-semibold text-white">
              <span>
                <IoMailOutline className="text-2xl" />
              </span>
              admin@homerental.com
            </p>
            <p className="text-lg flex items-center gap-2 font-semibold text-white">
              <span>
                <MdOutlinePhoneInTalk className="text-2xl" />
              </span>
              123-456-7890
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left Section: Logo */}
        <Link to="/">
          <span className="text-2xl font-bold uppercase">
            home <span className="text-sky-500">booking</span>
          </span>
        </Link>

        {/* Right Section: Navigation Menu */}
        <div className="hidden md:flex md:items-center space-x-6">
          {["home", "property", "about", "faq", "contact"].map((link) => (
            <NavLink
              to={link === "home" ? "/" : `/${link}`}
              className={({ isActive }) =>
                !isActive ? "navActive" : "navInActive"
              }
            >
              {link}
            </NavLink>
          ))}
          <Link to="/login">
            <button className="btn-primary">Login</button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button className="md:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Link to="/login">
            <button className="btn-primary md:hidden">Login</button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`md:hidden fixed top-0 right-0 w-[80%] h-screen bg-white overflow-y-auto z-50 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-8">
          <button className="mb-4 text-3xl" onClick={toggleMenu}>
            <IoCloseSharp />
          </button>
          <ul className="space-y-4">
            {["home", "property", "about", "faq", "contact"].map((link) => (
              <li key={link}>
                <NavLink
                  to={link === "home" ? "/" : `/${link}`}
                  className={({ isActive }) =>
                    !isActive ? "navActive block" : "navInActive block"
                  }
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`md:hidden fixed top-0 left-0 bottom-0 right-0 bg-black/50 backdrop-blur-sm z-10 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      ></div>
    </header>
  );
};

export default Header;
