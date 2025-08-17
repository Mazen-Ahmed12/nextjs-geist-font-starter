"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function DiscountsSection() {
  const offers = [
    {
      id: 1,
      title: "Get 30% Off on Hotel Booking",
      description: "Book your luxury stay now and save 30% on all room categories. Limited time offer for new guests.",
      image: "https://placehold.co/600x400?text=Luxury+Hotel+Room+with+Ocean+View+and+Modern+Amenities",
      discount: "30% OFF",
      validUntil: "Valid until Dec 31, 2024"
    },
    {
      id: 2,
      title: "Get 25% Off on Resort Booking",
      description: "Experience our premium resort facilities with 25% discount. Includes spa access and complimentary breakfast.",
      image: "https://placehold.co/600x400?text=Resort+Pool+Area+with+Tropical+Landscape+and+Luxury+Cabanas",
      discount: "25% OFF",
      validUntil: "Valid until Jan 15, 2025"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Special Discount For Hotel &
            <br />
            Resort Booking
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Take advantage of our exclusive offers and save on your next luxury getaway. 
            Limited time deals for the most discerning travelers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg">
                  {offer.discount}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-sm opacity-90">{offer.validUntil}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {offer.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {offer.validUntil}
                  </div>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Don't Miss Out on These Amazing Deals!
            </h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about exclusive offers, 
              special packages, and seasonal discounts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-yellow-400"
              />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
