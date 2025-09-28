import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800">
          Gurkhas <span className="text-blue-600">Construction</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
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
        </div>

        {/* CTA Button */}
        <Link
          to="/quote"
          className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Get Quote
        </Link>
      </div>
    </nav>
  );
}
