import CoverImage from "@/components/common/CoverImage";
import aboutUs from "@/constants/aboutUs";
import { Metadata } from "next";

export default function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-2 px-40 gap-10 py-40 bg-white w-full"
    >
      {/* Left Image Section */}
      <div
        style={{
          border: "50px solid",
          borderColor: "transparent #13357B transparent #13357B",
        }}
        className="col-span-1 w-full max-w-[700px] max-h-[700px] "
      >
        <img src="travel-img-1.jpg" className="h-full w-full" alt="" />
      </div>

      {/* Right Content Section */}
      <div
        className="p-10"
        style={{
          background:
            "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/about-img-1.png')",
        }}
      >
        <h3 className="text-lg font-bold uppercase tracking-wide text-primary-100">
          About Us
        </h3>
        <h2 className="text-4xl font-bold mb-4">
          Welcome to <span className="text-blue-600">Pun Tours & Travel</span>
        </h2>
        <p className="text-gray-600 mb-4">
          We Provide Best Tour Packages In Your Budget
        </p>
        <p className="text-gray-600 mb-6">
          Pun Travel & Tours Pvt. Ltd. is here to try to provide the one-stop
          solution for all travel and tours related services not only focusing
          on foreign tourists but also the internal ones at affordable prices
          because we have felt the need.
        </p>

        <p className="text-gray-600 mb-6">
          Pun Travels & Tours has been providing unparalleled travel experiences
          to its customers for over a decade. Whether you're exploring domestic
          destinations or flying internationally, we offer seamless ticket
          booking services, customized tours, and unforgettable experiences.
        </p>
        <p className="text-gray-600 mb-6">
          Our dedicated team is committed to making your travel dreams a
          reality, offering personalized travel services, hotel accommodations,
          and comprehensive tour packages for all kinds of travelers.
        </p>

        {/* List of Services */}
        <ul className="gap-4 mb-6 grid grid-grid-cols-2">
          {aboutUs.map((item, index) => (
            <li key={index} className="flex text-gray-600">
              <span className="mr-2">{item.emoji}</span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
