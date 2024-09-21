import React from "react";

interface ICoverImageProps {
  image?: string;
  className?: string;
}

export default function CoverImage({ image, className }: ICoverImageProps) {
  return (
    <div className="relative">
      <img
        src={image}
        alt="Hero background"
        className={`w-full object-cover h-[calc(100vh-400px)] ${className}`}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-6xl font-bold mb-6">About Us</h1>
        </div>
      </div>
    </div>
  );
}
