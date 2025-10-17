import Image from "next/image";
import React from "react";
import TestimonialCard from "../ui/TestimonialCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="padding min-h-screen my-16">
      <div>
        <div className="px-4 py-1 w-fit rounded-full text-xs sm:text-sm font-light shadow-sm mb-6 border border-gray-200 bg-white">
          TESTIMONIALS
        </div>
        <div className="flex justify-between items-center mb-12 flex-col md:flex-row gap-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-relaxed">
            See What Our Customers Say
          </h1>
          <p className="text-sm sm:text-lg text-dark-gray max-w-md leading-relaxed">
            Discover how businesses boost sales, streamline workflows, and
            achieve real results with Sales Cloud.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
        <div className="flex items-center justify-center gap-6">
          <button className="border border-black p-4 rounded-full">
            <ArrowLeft className="inline" size={24} />
          </button>
          <button className="border border-black p-4 rounded-full bg-black text-white">
            <ArrowRight className="inline" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
