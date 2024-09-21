"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "#about" },
  { label: "Services", path: "#services" },
  { label: "Contact Us", path: "#contact" },
];

export default function Navbar() {
  const params = useParams();

  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const { hash } = window.location;
    if (!hash) {
      setActiveTab("/");
      return;
    }
    setActiveTab(hash);
  }, [params]);

  return (
    <nav className="py-3 w-full fixed bg-white z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <img src="/full-logo.png" alt="puntravel Logo" width={150} />
        </Link>
        <div className="flex space-x-4">
          {navItems.map((item) => {
            return (
              <Link
                href={item.path}
                key={item.label}
                className={`text-gray-600 hover:text-gray-800 ${
                  item.path === activeTab ? "bg-primary-200 text-white" : ""
                } hover:bg-primary-200 duration-200 font-bold hover:text-white px-3 py-2 rounded`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
