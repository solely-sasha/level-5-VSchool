import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleSignUpClick = () => {
    // Toggle dropdown on click for mobile devices
    if (window.innerWidth <= 768) {
      toggleDropdown();
    }
  };

  return (
    <header className="bg-slate-900 py-5 text-center">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center">
          <Link to="/">
            <h1 className="text-green-300/75 text-5xl text-center font-quicksand font-bold tracking-wider">
              GRACE
            </h1>
          </Link>
          <h4 className="acronym text-green-300/75">
            Grocery Resources And Community Exchange
          </h4>
        </div>
        <nav className="navbar flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
          <Link
            to="/"
            className="navbar-link text-slate-600 hover:text-green-300"
          >
            Home
          </Link>
          <Link
            to="/search"
            className="navbar-link text-slate-600 hover:text-green-300 ml-4"
          >
            Search
          </Link>
          <Link
            to="/pantries"
            className="navbar-link text-slate-600 hover:text-green-300 ml-4"
          >
            Pantries
          </Link>
          <div
            className="signup-wrapper relative lg:ml-4"
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="signup-button text-green-300/75 hover:text-slate-600 text-sm"
              onMouseEnter={toggleDropdown}
              onClick={handleSignUpClick} 
            >
              Sign Up
            </div>
            {dropdownOpen && (
              <div className="signup-dropdown text-white bg-slate-100 bg-opacity-25 absolute top-full left-0 w-full lg:w-auto">
                <Link
                  to="/volunteer"
                  className="dropdown-link block py-2 px-4 hover:text-slate-900"
                >
                  Volunteer
                </Link>
                <Link
                  to="/request"
                  className="dropdown-link block py-2 px-4 hover:text-slate-900"
                >
                  Request Assistance
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
