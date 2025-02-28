"use client"; // ✅ Ensure this is at the top for client-side interactivity

import Image from "next/image";
import bgImage from "@/assets/flamingo-pattern.jpg"; // Ensure this exists
import boxBg from "@/assets/background.png"; // New background for the box
import logo from "@/assets/logo-placeholder.jpg";
import { FaPaperclip, FaSearch } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-auto bg-"
    style={{ backgroundImage: `url(${bgImage.src})` }}
    > 
      {/* Centered Box */}
      <div className="w-[90%] max-w-3xl bg-cover bg-center rounded-xl p-6 shadow-lg flex flex-col items-center space-y-4"
        style={{ backgroundImage: `url(${boxBg.src})` }}>
        
        {/* Logo Image */}

        <p className="text-center text-lg sm:text-xl text-gray-200 font-semibold">
          Create Magic
        </p>
        
        {/* Input Section */}
        <div className="w-full bg-white rounded-lg p-3 flex items-center shadow-md">
          {/* Attachment Button */}
          <button className="p-2 text-gray-600 hover:text-gray-800">
            <FaPaperclip size={20} />
          </button>

          {/* Input Field */}
          <input 
            type="text" 
            placeholder="Enter your prompt here..." 
            className="flex-1 px-4 py-2 text-gray-800 bg-transparent outline-none"
          />

          {/* Search Button */}
          <button className="p-2 text-blue-600 hover:text-blue-800">
            <FaSearch size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
