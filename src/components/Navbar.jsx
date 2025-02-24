import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isJobOpen, setIsJobOpen] = useState(false);
  const [isIITOpen, setIsIITOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Left Section: Logo + Menu Items */}
      <div className="flex items-center gap-4">
        {/* Logo with Text (ml-48 only on large screens) */}
       
<div className="flex items-center gap-2 md:ml-52">
<img src={logo} alt="Coding Ninjas Logo" className="max-h-5 md:max-h-7 w-auto" />


  
  
</div>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-6">
          {/* Job Bootcamp Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 ml-5 font-medium text-gray-700 hover:text-orange-500"
              onClick={() => setIsJobOpen(!isJobOpen)}
            >
              Job Bootcamp <FaChevronDown />
            </button>
            {isJobOpen && (
              <div className="absolute  left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Full Stack</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Data Science</a>
              </div>
            )}
          </div>

          {/* IIT Certification Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 font-medium text-gray-700 hover:text-orange-500"
              onClick={() => setIsIITOpen(!isIITOpen)}
            >
              IIT Certification <FaChevronDown />
            </button>
            {isIITOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">AI & ML</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Blockchain</a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Login Button (mr-48 only on large screens) */}
      <button className="hidden md:block px-4 py-2 md:mr-48 text-white bg-orange-500 rounded-md hover:bg-orange-600">
        Login
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-800 text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 md:hidden">
          <div className="flex flex-col gap-4">
            {/* Job Bootcamp Dropdown in Mobile */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-gray-800 w-full text-left hover:text-orange-500"
                onClick={() => setIsJobOpen(!isJobOpen)}
              >
                Job Bootcamp <FaChevronDown />
              </button>
              {isJobOpen && (
                <div className="mt-2 bg-white shadow-lg rounded-md p-2">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Full Stack</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Data Science</a>
                </div>
              )}
            </div>

            {/* IIT Certification Dropdown in Mobile */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-gray-800 w-full text-left hover:text-orange-500"
                onClick={() => setIsIITOpen(!isIITOpen)}
              >
                IIT Certification <FaChevronDown />
              </button>
              {isIITOpen && (
                <div className="mt-2 bg-white shadow-lg rounded-md p-2">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">AI & ML</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Blockchain</a>
                </div>
              )}
            </div>

            {/* Mobile Login Button */}
            <button className="px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 