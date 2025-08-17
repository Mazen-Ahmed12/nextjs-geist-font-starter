"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Spa & Wellness",
      description: "Rejuvenate your body and mind with our world-class spa treatments and wellness programs.",
      image: "https://placehold.co/300x200?text=Luxury+Spa+Treatment+Room+with+Relaxing+Ambiance"
    },
    {
      id: 2,
      title: "Fine Dining",
      description: "Experience culinary excellence with our award-winning restaurants and expert chefs.",
      image: "https://placehold.co/300x200?text=Elegant+Fine+Dining+Restaurant+with+Gourmet+Cuisine"
    },
    {
      id: 3,
      title: "Concierge Service",
      description: "Our dedicated concierge team is available 24/7 to assist with all your needs.",
      image: "https://placehold.co/300x200?text=Professional+Concierge+Service+Desk+with+Friendly+Staff"
    },
    {
      id: 4,
      title: "Business Center",
      description: "State-of-the-art facilities for all your business and conference needs.",
      image: "https://placehold.co/300x200?text=Modern+Business+Center+with+Meeting+Rooms+and+Technology"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get The Best Hotel
              <br />
              Fixyland Services
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Discover our comprehensive range of premium services designed to make 
              your stay exceptional. From world-class dining to rejuvenating spa treatments, 
              we ensure every moment of your visit is memorable.
            </p>

            {/* Service Features */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">24/7 Room Service</h3>
                  <p className="text-gray-600">Premium room service available around the clock for your convenience.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Airport Transfers</h3>
                  <p className="text-gray-600">Complimentary luxury transportation to and from the airport.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Event Planning</h3>
                  <p className="text-gray-600">Professional event planning services for weddings and corporate events.</p>
                </div>
              </div>
            </div>

            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              View All Services
            </Button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-32 object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
