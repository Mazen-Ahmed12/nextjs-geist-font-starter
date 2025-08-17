"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-black/60 to-black/40">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://placehold.co/1920x1080?text=Luxury+Hotel+Pool+Area+with+Elegant+Lounge+Chairs+and+Modern+Architecture')`
        }}
      />
      
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 container mx-auto px-4 flex items-center min-h-screen">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Book With Best
            <br />
            <span className="text-yellow-500">Luxury Hotel</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Experience unparalleled luxury and comfort at our world-class hotel. 
            Create unforgettable memories with our exceptional service and amenities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="container mx-auto px-4 pb-8">
          <div className="bg-emerald-600 rounded-t-lg p-6 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Check In
                </label>
                <Input 
                  type="date" 
                  className="bg-white border-0 h-12"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Check Out
                </label>
                <Input 
                  type="date" 
                  className="bg-white border-0 h-12"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Guests
                </label>
                <Select>
                  <SelectTrigger className="bg-white border-0 h-12">
                    <SelectValue placeholder="2 Adults" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Adult</SelectItem>
                    <SelectItem value="2">2 Adults</SelectItem>
                    <SelectItem value="3">3 Adults</SelectItem>
                    <SelectItem value="4">4 Adults</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Rooms
                </label>
                <Select>
                  <SelectTrigger className="bg-white border-0 h-12">
                    <SelectValue placeholder="1 Room" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Room</SelectItem>
                    <SelectItem value="2">2 Rooms</SelectItem>
                    <SelectItem value="3">3 Rooms</SelectItem>
                    <SelectItem value="4">4 Rooms</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold h-12">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
