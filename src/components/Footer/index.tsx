import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary-100 text-white px-5 py-12 xl:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Get In Touch Section */}
        <div>
          <h3 className="font-bold text-xl mb-4">Get In Touch</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2">🏠</span>
              Balaju-16, Kathmandu, Nepal
            </li>
            <li className="flex items-center">
              <span className="mr-2">✉️</span>
              <a href="mailto:info@example.com">puntravel01@gmail.com</a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📞</span>
              01-5908982/01-4951960
            </li>
            <li className="flex items-center">
              <span className="mr-2">📠</span>
              9851131849/981362912
              <br />
              951362812/9866557399
            </li>
          </ul>
          {/* Social Icons */}
          {/* <div className="flex space-x-4 mt-6">
            <Link href="#">
              <FaFacebookF
                className="text-white bg-blue-600 p-2 rounded-full hover:bg-blue-800"
                size={30}
              />
            </Link>
            <Link href="#">
              <FaTwitter
                className="text-white bg-blue-400 p-2 rounded-full hover:bg-blue-600"
                size={30}
              />
            </Link>
            <Link href="#">
              <FaInstagram
                className="text-white bg-pink-500 p-2 rounded-full hover:bg-pink-700"
                size={30}
              />
            </Link>
            <Link href="#">
              <FaLinkedinIn
                className="text-white bg-blue-700 p-2 rounded-full hover:bg-blue-900"
                size={30}
              />
            </Link>
          </div> */}
        </div>

        {/* Company Links Section */}
        <div>
          <h3 className="font-bold text-xl mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
          </ul>
        </div>

        {/* Support Links Section */}
        <div>
          <h3 className="font-bold text-xl mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Pun Tours & Travel, All rights
          reserved. Designed By{" "}
          <a
            href="https://www.linkedin.com/in/shushila-budhathoki-964506217/"
            className="text-blue-500"
          >
            Shushila Budhathoki
          </a>
        </p>
      </div>
    </footer>
  );
}
