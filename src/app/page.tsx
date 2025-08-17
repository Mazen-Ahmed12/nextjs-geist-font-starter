"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HotelShowcase from "@/components/HotelShowcase";
import RoomsSection from "@/components/RoomsSection";
import ServicesSection from "@/components/ServicesSection";
import DiningSection from "@/components/DiningSection";
import DiscountsSection from "@/components/DiscountsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StaffSection from "@/components/StaffSection";
import UpdatesSection from "@/components/UpdatesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HotelShowcase />
      <RoomsSection />
      <ServicesSection />
      <DiningSection />
      <DiscountsSection />
      <TestimonialsSection />
      <StaffSection />
      <UpdatesSection />
      <Footer />
    </main>
  );
}
