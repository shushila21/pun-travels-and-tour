"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import ServiceCard from "../common/ServiceCard";
import ContactUs from "../ContactUs";
import services from "@/constants/services";
import aboutUs from "@/constants/aboutUs";
import CoverImage from "../common/CoverImage";
import Services from "@/app/services/page";
import About from "@/app/about/page";

export default function LandingPage() {
  const router = useRouter();

  const handleContactRedirect = () => {
    // Navigate to the contact page
    router.push("/#contact");
  };

  return (
    <section id="#" className="relative">
      <div className="relative mt-24">
        <img
          src="/carousel-3.jpg"
          alt="Hero background"
          className="w-full object-cover h-[calc(100vh-92px)]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-2xl mb-4 font-bold">EXPLORE THE WORLD</h2>
            <h1 className="text-6xl font-bold mb-6">Find Your Perfect Tour</h1>
            <p className="mb-8 max-w-2xl mx-auto font-bold">
              At Pun Travels & Tours, We specialize in crafting unforgettable,
              tailor-made travel experiences. Let us guide you on an adventure
              of a lifetime, with personalized service and attention to every
              detail.
            </p>
            <button
              className="bg-primary-200 text-white px-8 py-3 rounded-full text-lg font-semibold"
              onClick={handleContactRedirect}
            >
              ContactUs Us
            </button>
          </div>
        </div>
      </div>

      {/* about section */}
      <About />

      {/* services section */}
      <Services />

      {/* contact section */}
      <ContactUs />
    </section>
  );
}
