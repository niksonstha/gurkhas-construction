import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f1a2c] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Gurkhas Construction
          </h2>
          <p className="mt-3 text-sm leading-6">
            Professional construction services across the UK. <br />
            Building quality, creating comfort.
          </p>
          {/* Socials */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram size={18} />
            </a>
            <a href="#" className="hover:text-white">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/services" className="hover:text-white">
                House Extensions
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                Loft Conversions
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                Refurbishments
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                Interior Design
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/quote" className="hover:text-white">
                Get Quote
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Info</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <Phone size={16} /> <span>+44 20 1234 5678</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={16} /> <span>info@gurkhasconstruction.co.uk</span>
            </li>
            <li className="flex items-start space-x-2">
              <MapPin size={16} />
              <span>
                123 Construction Street <br />
                London, UK SW1A 1AA
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © 2024 Gurkhas Construction. All rights reserved. | Website Builder
      </div>
    </footer>
  );
}
