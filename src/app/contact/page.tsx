"use client";

import { useEffect, useState } from "react";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
  phone: "",
};

export default function Contact() {
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
      const response = await fetch("https://formspree.io/f/meojbzqw", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData(initialFormData); // Clear the form
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

  const isFormEmpty = !formData.name || !formData.email || !formData.subject;

  return (
    <section id="contact" className="bg-white flex flex-col p-20">
      <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
      <h2 className="text-4xl font-semibold text-center mb-8">
        Contact For Any Query
      </h2>

      <div className="w-full grid grid-cols-3">
        {/* Contact Info Section */}
        <div className="bg-gray-100 p-8 rounded-xl flex flex-col items-center space-y-4">
          <div className="text-blue-600 text-3xl">
            <span className="material-icons">place</span>
          </div>
          <p className="text-center text-gray-700">
            Balaju-16,
            <br /> Kathmandu, Nepal
          </p>
          <div className="text-blue-600 text-3xl">
            <span className="material-icons">phone</span>
          </div>
          <p className="text-center text-gray-700">
            01-5908982/01-4951960
            <br />
            9851131849/981362912
            <br />
            951362812/9866557399
          </p>
          <div className="text-blue-600 text-3xl">
            <span className="material-icons">email</span>
          </div>
          <p className="text-center text-gray-700">puntravel01@gmail.com</p>
        </div>

        {/* Form Section */}
        <div className="px-8 col-span-2">
          <h3 className="text-xl font-bold mb-4">Send us a message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <div className="relative w-1/2">
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
              <div className="relative w-1/2">
                <label className="block mb-1">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-2 border rounded"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
            </div>
            <div className="relative">
              <label className="block mb-1">Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Your Phone Number"
                className="w-full p-2 border rounded"
                onChange={handleChange}
                value={formData.phone}
              />
            </div>
            <div className="relative">
              <label className="block mb-1">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-2 border rounded"
                onChange={handleChange}
                value={formData.subject}
              />
            </div>
            <div className="relative">
              <label className="block mb-1">Message</label>
              <textarea
                name="message"
                placeholder="Message"
                className="w-full p-2 border rounded h-32"
                onChange={handleChange}
                value={formData.message}
              />
            </div>
            <button
              type="submit"
              className={`w-full bg-primary-200 text-white py-2 rounded hover:bg-primary-100 transition ${
                isFormEmpty || !!status ? "cursor-not-allowed" : ""
              }`}
              disabled={isFormEmpty || !!status}
            >
              Send Message
            </button>
            {status && <p className="text-center">{status}</p>}
          </form>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mt-10">
        <h3 className="text-3xl font-bold mb-4">Find Us Here</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28251.82713003318!2d85.29566093647105!3d27.733386924697257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d8293846af74f49%3A0x89f33983007ab4d!2sPun%20Travels%20%26%20Tours!5e0!3m2!1sen!2snp!4v1726944594805!5m2!1sen!2snp"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          className="rounded-lg shadow-lg"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
