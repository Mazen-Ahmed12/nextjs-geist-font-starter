"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-emerald-600">
              Fixyland
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Rooms
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Rooms
              </a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Services
              </a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Contact
              </a>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold w-full">
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
