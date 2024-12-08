"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 w-full z-50">
      <div className="flex justify-between items-center px-12">
       
        <Link href={"/"} className="flex items-center">
          <img
            src="/logo.png"
            alt="logo"
            className="w-[200px] object-contain" 
          />
        </Link>
        {/* Burger Menu Icon */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <IconX className="h-6 w-6 text-white" />
          ) : (
            <IconMenu2 className="h-6 w-6 text-white" />
          )}
        </button>
        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          <Link href={"/"} className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link href={"#about"} className="hover:text-gray-300 transition">
            About
          </Link>
          <Link href={"#projects"} className="hover:text-gray-300 transition">
            Projects
          </Link>
          <Link href={"#contact"} className="hover:text-gray-300 transition">
            Contact
          </Link>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-80 backdrop-blur-lg transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="p-6 flex flex-col space-y-6">
          <Link
            href={"/"}
            onClick={() => setIsMenuOpen(false)}
            className="text-xl hover:text-gray-300 transition"
          >
            Home
          </Link>
          <Link
            href={"#about"}
            onClick={() => setIsMenuOpen(false)}
            className="text-xl hover:text-gray-300 transition"
          >
            About
          </Link>
          <Link
            href={"#projects"}
            onClick={() => setIsMenuOpen(false)}
            className="text-xl hover:text-gray-300 transition"
          >
            Projects
          </Link>
          <Link
            href={"#contact"}
            onClick={() => setIsMenuOpen(false)}
            className="text-xl hover:text-gray-300 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
