import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800">
          Gurkhas <span className="text-blue-600">Construction</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600">
            Services
          </Link>
          <Link to="/projects" className="text-gray-700 hover:text-blue-600">
            Projects
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>

          <Link
            to="/quote"
            className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Get Quote
          </Link>
        </div>

        {/* Hamburger (Mobile Only) */}
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile Menu with Slide-in Animation */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col p-6 space-y-6">
          <button
            className="self-end text-gray-600 text-2xl"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-blue-600"
          >
            Services
          </Link>
          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-blue-600"
          >
            Projects
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-blue-600"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-blue-600"
          >
            Contact
          </Link>

          <Link
            to="/quote"
            onClick={() => setIsOpen(false)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
