"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", path: "#home" },
  { label: "About Us", path: "#about" },
  { label: "Services", path: "#services" },
  { label: "Contact Us", path: "#contact" },
  { label: "Book Now", path: "#booking" },
];

export default function Navbar() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const { hash } = window.location;
    if (!hash || hash === "#home") {
      setActiveTab("#home");
    } else {
      setActiveTab(hash);
    }
  }, [params]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 mx-auto bg-white z-50 shadow-lg">
      <div className="px-5 xl:px-10 py-3 flex justify-between items-center w-full">
        <Link href="#home">
          <Image
            src="/full-logo.png"
            alt="puntravel Logo"
            width={140}
            height={140}
          />
        </Link>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              href={item.path}
              key={item.label}
              className={`text-gray-600 hover:text-gray-800 ${
                item.path === activeTab ? "bg-primary-200 text-white" : ""
              } hover:bg-primary-200 duration-200 font-bold hover:text-white px-3 py-2 rounded`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          <span className="material-icons text-gray-600">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all ease-in-out ${
          isMenuOpen
            ? "max-h-[250px] border-t-2 duration-700"
            : "max-h-0 opacity-0 duration-500"
        }`}
      >
        {navItems.map((item) => (
          <Link
            href={item.path}
            key={item.label}
            className={`block text-gray-600 hover:text-gray-800 ${
              item.path === activeTab ? "bg-primary-200 text-white" : ""
            } hover:bg-primary-200 duration-200 font-bold hover:text-white px-4 py-2`}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
