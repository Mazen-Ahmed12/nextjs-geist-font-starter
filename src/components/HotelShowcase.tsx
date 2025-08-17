"use client";

import { Button } from "@/components/ui/button";

export default function HotelShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://placehold.co/600x500?text=Elegant+Hotel+Lobby+Interior+with+Modern+Luxury+Design+and+Comfortable+Seating"
              alt="Elegant Hotel Lobby Interior with Modern Luxury Design and Comfortable Seating"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute top-4 left-4 bg-emerald-600 text-white px-4 py-2 rounded-full">
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                Live View
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                World Class Luxury Hotel
                <br />
                and Resort Near City
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Discover the perfect blend of luxury and comfort at our world-class hotel. 
                Located in the heart of the city, we offer unparalleled service, 
                exquisite dining, and premium amenities that will make your stay unforgettable.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">24/7 Premium Room Service</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">World-Class Spa & Wellness Center</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">Fine Dining Restaurant & Bar</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">Infinity Pool & Fitness Center</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">150+</div>
                <div className="text-gray-600">Luxury Rooms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">25+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">98%</div>
                <div className="text-gray-600">Happy Guests</div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Explore Rooms
              </Button>
              <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                View Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
