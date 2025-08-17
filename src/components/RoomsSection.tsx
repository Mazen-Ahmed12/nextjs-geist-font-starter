"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function RoomsSection() {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Ocean View",
      price: "$299",
      image: "https://placehold.co/400x300?text=Luxurious+Ocean+View+Room+with+Modern+Amenities+and+Elegant+Decor",
      features: ["Ocean View", "King Bed", "Balcony", "Mini Bar"]
    },
    {
      id: 2,
      name: "Executive Suite",
      price: "$499",
      image: "https://placehold.co/400x300?text=Spacious+Executive+Suite+with+Living+Area+and+Premium+Furnishings",
      features: ["City View", "Separate Living", "Work Desk", "Premium Bath"]
    },
    {
      id: 3,
      name: "Presidential Villa",
      price: "$899",
      image: "https://placehold.co/400x300?text=Presidential+Villa+with+Private+Pool+and+Luxury+Interior+Design",
      features: ["Private Pool", "Butler Service", "Spa Bath", "Terrace"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Best Luxury Rooms And
            <br />
            Suites
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience ultimate comfort in our carefully designed rooms and suites, 
            each offering breathtaking views and world-class amenities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {room.price}/night
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {room.name}
                </h3>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {room.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
                    ))}
                    <span className="text-sm text-gray-600 ml-2">5.0</span>
                  </div>
                  
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
            View All Rooms
          </Button>
        </div>
      </div>
    </section>
  );
}
