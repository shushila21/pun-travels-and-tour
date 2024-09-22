"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", path: "#home" },
  { label: "About Us", path: "#about" },
  { label: "Services", path: "#services" },
  { label: "Contact Us", path: "#contact" },
];

export default function Navbar() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const { hash } = window.location;
    if (!hash) {
      setActiveTab("/");
      return;
    }
    setActiveTab(hash);
  }, [params]);

  // useEffect(() => {
  //   if (isMenuOpen) {
  //     document.body.style.paddingTop = `${navItems.length * 40 + 64}px`;
  //   } else {
  //     document.body.style.paddingTop = "64px";
  //   }
  // }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="py-3 w-full fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out bg-white">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <img src="/full-logo.png" alt="puntravel Logo" width={150} />
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
          className={`md:hidden overflow-hidden bg-red-100 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[160px] opacity-100" : "max-h-0 opacity-0"
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
    </>
  );
}
