import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-sm">
                <img
                  src="/Logo.jpeg" 
                  alt="Hadi's Motors Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Hadi's Motors</h3>
                <p className="text-white text-sm">Canada to Ghana</p>
              </div>
            </div>

            <p className="text-white-400">
              Your trusted partner for importing quality vehicles from Canada to
              Ghana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-gray-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/cars"
                  className="text-white hover:text-gray-400 transition-colors"
                >
                  Available Cars
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-gray-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-white">
                <Phone className="w-5 h-5" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center space-x-3 text-white">
                <Mail className="w-5 h-5" />
                <span>info@hadismotors.com</span>
              </li>
              <li className="flex items-center space-x-3 text-white-400">
                <MapPin className="w-5 h-5" />
                <span>Toronto, Canada & Accra, Ghana</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-red-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-red-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-red-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-white">
          <p>
            © {new Date().getFullYear()} Hadi's Motors. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Importing quality vehicles from Canada to Ghana
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
