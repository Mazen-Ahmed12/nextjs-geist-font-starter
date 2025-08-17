"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function StaffSection() {
  const staff = [
    {
      id: 1,
      name: "Michael Davis",
      role: "General Manager",
      image: "https://placehold.co/300x300?text=Professional+Hotel+Manager+in+Business+Suit+Smiling",
      experience: "15+ Years"
    },
    {
      id: 2,
      name: "Amanda Taylor",
      role: "Head Chef",
      image: "https://placehold.co/300x300?text=Professional+Female+Chef+in+White+Uniform+Kitchen",
      experience: "12+ Years"
    },
    {
      id: 3,
      name: "James Wilson",
      role: "Concierge Manager",
      image: "https://placehold.co/300x300?text=Professional+Concierge+Manager+in+Hotel+Uniform",
      experience: "10+ Years"
    },
    {
      id: 4,
      name: "Lisa Anderson",
      role: "Spa Director",
      image: "https://placehold.co/300x300?text=Professional+Spa+Director+in+Elegant+Wellness+Attire",
      experience: "8+ Years"
    }
  ];

  return (
    <section className="py-20 bg-emerald-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Expert Staff Persons
          </h2>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
            Meet our dedicated team of hospitality professionals who are committed 
            to making your stay exceptional with their expertise and warm service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {staff.map((member) => (
            <Card key={member.id} className="bg-white hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="text-white">
                      <div className="text-sm opacity-90">{member.experience}</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-medium">
                    {member.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Team is Here to Serve You
            </h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              With decades of combined experience in luxury hospitality, 
              our staff ensures every detail of your stay exceeds expectations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-emerald-100">Available Service</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
                <div className="text-emerald-100">Expert Staff</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
                <div className="text-emerald-100">Languages Spoken</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
