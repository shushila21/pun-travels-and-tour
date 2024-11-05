"use client";

import React, { useEffect, useState } from "react";

const initialFormData = {
  name: "",
  phoneNumber: "",
  departureCity: "",
  destinationCity: "",
  flightClass: "Economy",
  passengers: 1,
  departureDate: "",
  returnDate: "",
  specialRequests: "",
};

export default function Booking() {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("https://formspree.io/f/xyzywgaj", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      console.log("response", response);

      if (response.ok) {
        setStatus("Message sent! Will get back soon");
        setFormData(initialFormData);
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus("");
    }, 8000);

    return () => clearTimeout(timer);
  }, [status]);

  const isFormEmpty =
    !formData.name ||
    !formData.phoneNumber ||
    !formData.departureCity ||
    !formData.flightClass ||
    !formData.passengers ||
    !formData.departureDate;

  return (
    <div
      id="booking"
      className="text-white py-24 px-32"
      style={{
        background:
          "linear-gradient(rgba(19, 53, 123, .8), rgba(19, 53, 123, .8)), url('/tour-booking-bg.jpg')",
      }}
    >
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-5 gap-20 items-center">
        {/* Left Section - Booking Info */}
        <div className="col-span-2">
          <h3 className="text-lg font-semibold">BOOKING</h3>
          <h1 className="text-4xl font-bold mb-4">Online Booking</h1>
          <p className="mb-4">
            Discover the world effortlessly with Pun Travels & Tour. Whether
            you&apos;re planning a solo adventure, a family vacation, or a group
            excursion, our hassle-free travel booking services ensure that every
            detail is taken care of. Book your next journey with us and travel
            with confidence.
          </p>
          <p className="mb-4">
            Our team is here to provide personalized booking services, helping
            you find the best travel options tailored to your needs. From
            flights to accommodations, we handle everything so you can focus on
            the experience ahead.
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white text-gray-900 px-8 py-8 rounded-lg shadow-lg col-span-3">
          <h2 className="text-3xl font-bold mb-5">Book Flights</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-2 border rounded"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
              <div>
                <label className="block mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="phoneNumber"
                  placeholder="Your Phone Number"
                  className="w-full p-2 border rounded"
                  onChange={handleChange}
                  value={formData.phoneNumber}
                />
              </div>
              <div>
                <label className="block mb-1">
                  Departure City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="departureCity"
                  placeholder="Enter your leaving destination"
                  className="w-full p-2 border rounded"
                  onChange={handleChange}
                  value={formData.departureCity}
                />
              </div>
              <div>
                <label className="block mb-1">Destination City</label>
                <input
                  type="text"
                  name="destinationCity"
                  placeholder="Enter your final destination"
                  className="w-full p-2 border rounded"
                  onChange={handleChange}
                  value={formData.destinationCity}
                />
              </div>
              <div>
                <label className="block mb-1">
                  Select Class <span className="text-red-500">*</span>
                </label>
                <select
                  name="flightClass"
                  value={formData.flightClass}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option value="Economy">Economy</option>
                  <option value="Business">Business</option>
                  <option value="First Class">First Class</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">
                  Number of Travellers <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="passengers"
                  placeholder="Your Phone Number"
                  className="w-full p-2 border rounded"
                  onChange={handleChange}
                  value={formData.passengers}
                />
              </div>
              <div>
                <label className="block mb-1">
                  Departure Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="datetime-local"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">
                  Return Date (if round trip)
                </label>
                <input
                  type="datetime-local"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  placeholder="Return Date (if round trip)"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <textarea
              placeholder="Special Request"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              rows={4}
            />
            <button
              type="submit"
              className={`w-full bg-primary-200 text-white py-2 rounded hover:bg-primary-100 transition ${
                isFormEmpty || !!status ? "cursor-not-allowed" : ""
              }`}
              disabled={isFormEmpty || !!status}
            >
              Book Now
            </button>
            {status && <p className="text-center">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
