"use client";
import { useState } from "react";
import Image from "next/image";
import { FaMagic, FaEdit, FaChartBar, FaGraduationCap, FaLandmark, FaHandshake, FaDollarSign } from "react-icons/fa";
import logo from "@/assets/logo-placeholder.jpg";
import { BiBold, BiFontSize } from "react-icons/bi";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState("");

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[85%] z-50 bg-opacity-50 backdrop-blur-md rounded-2xl px-6 py-3 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        {/* <a href="/" className="flex items-center space-x-2">
          <Image src={logo} alt="Logo" width={40} height={40} />
        </a> */}
        <h1>T³</h1>

        {/* Navigation Links */}
        <div className="flex space-x-6 text- text-lg font-medium">
          
          {/* Product Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setOpenDropdown("product")}
            onMouseLeave={() => setOpenDropdown("")}
          >
            <button className="px-4 py-2 rounded-md hover:bg-gray-700 transition">
              Our Domain ▾
            </button>
            {openDropdown === "product" && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 bg-opacity-90 backdrop-blur-md border border-gray-600 rounded-lg shadow-lg p-3">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition cursor-pointer">
                    <FaMagic className="text-purple-400" />
                    <span>Create</span>
                  </li>
                  <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition cursor-pointer">
                    <FaEdit className="text-indigo-400" />
                    <span>Edit</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Use Case Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setOpenDropdown("usecase")}
            onMouseLeave={() => setOpenDropdown("")}
          >
            <button className="px-4 py-2 rounded-md hover:bg-gray-700 transition">
              Use Cases ▾
            </button>
            {openDropdown === "usecase" && (
              <div className="absolute left-0 mt-2 w-56 bg-gray-800 bg-opacity-90 backdrop-blur-md border border-gray-600 rounded-lg shadow-lg p-3">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition cursor-pointer">
                    <FaChartBar className="text-blue-400" />
                    <span>Marketing</span>
                  </li>
                  <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition cursor-pointer">
                    <FaGraduationCap className="text-yellow-400" />
                    <span>Training</span>
                  </li>
                  <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition cursor-pointer">
                    <FaLandmark className="text-green-400" />
                    <span>Government Scheme</span>
                  </li>
                  <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition cursor-pointer">
                    <FaHandshake className="text-pink-400" />
                    <span>Sales</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Pricing */}
          <a href="/pricing" className="px-4 py-2 rounded-md hover:bg-gray-700 transition">
            Open Source Code
          </a>
        </div>

        {/* Right Side Buttons */}
        <div className="space-x-4">
          
          <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">
            Wanna Contribute?
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
