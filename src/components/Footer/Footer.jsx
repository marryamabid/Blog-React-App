import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-teal-700 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand & Copyright */}
        <div>
          <Logo width="120px" />
          <p className="mt-4 text-sm text-gray-300">
            &copy; {new Date().getFullYear()} PicPost. All Rights Reserved.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link className="text-gray-300 hover:text-white" to="/">Features</Link></li>
            <li><Link className="text-gray-300 hover:text-white" to="/">Pricing</Link></li>
            <li><Link className="text-gray-300 hover:text-white" to="/">Affiliate Program</Link></li>
            <li><Link className="text-gray-300 hover:text-white" to="/">Press Kit</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><Link className="text-gray-300 hover:text-white" to="/">Account</Link></li>
            <li><Link className="text-gray-300 hover:text-white" to="/">Help</Link></li>
            <li><Link className="text-gray-300 hover:text-white" to="/">Contact Us</Link></li>
            <li><Link className="text-gray-300 hover:text-white" to="/">Customer Support</Link></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-500 mt-8 pt-4 text-center text-sm text-gray-300">
        Developed with ❤️ by Marryam Abid
      </div>
    </footer>
  );
}

export default Footer
