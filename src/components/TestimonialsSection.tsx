"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Business Executive",
      image: "https://placehold.co/80x80?text=Professional+Woman+Headshot+Smiling+Business+Executive",
      rating: 5,
      comment: "Absolutely amazing experience! The service was impeccable and the room was luxurious. Will definitely return for future stays."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Travel Blogger",
      image: "https://placehold.co/80x80?text=Professional+Man+Headshot+Travel+Blogger+Smiling",
      rating: 5,
      comment: "One of the best hotels I've ever stayed at. The attention to detail and customer service exceeded all my expectations."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Wedding Planner",
      image: "https://placehold.co/80x80?text=Professional+Woman+Headshot+Wedding+Planner+Elegant",
      rating: 5,
      comment: "Perfect venue for our wedding celebration. The staff went above and beyond to make our special day unforgettable."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Amazing Feedback Say
            <br />
            About Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued guests have to say 
            about their exceptional experiences at Fixyland.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-yellow-400 rounded-sm"></div>
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.comment}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-emerald-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-emerald-100">Happy Guests</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.9</div>
              <div className="text-emerald-100">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-emerald-100">Five Star Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-emerald-100">Return Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
