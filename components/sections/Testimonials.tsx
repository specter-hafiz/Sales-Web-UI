"use client";
import React, { useState } from "react";
import TestimonialCard from "../ui/TestimonialCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Highly Reliable",
    text: "Professional, responsive, and always on time. The collaboration made our project launch effortless and successful.",
    name: "Sophia Martinez",
    role: "Marketing Director",
    company: "BrightEdge",
    image: "/images/profile1.png",
  },
  {
    id: 2,
    quote: "Game Changer",
    text: "Sales Cloud transformed how we manage our pipeline. Our close rate increased by 40% in just three months.",
    name: "Michael Chen",
    role: "VP of Sales",
    company: "TechFlow",
    image: "/images/profile2.png",
  },
  {
    id: 3,
    quote: "Exceptional Support",
    text: "The customer support team is incredible. They helped us customize everything to fit our unique workflow perfectly.",
    name: "Emily Rodriguez",
    role: "CEO",
    company: "StartupHub",
    image: "/images/profile3.png",
  },
  {
    id: 4,
    quote: "Best Investment",
    text: "Switching to Sales Cloud was the best decision we made this year. ROI was visible within the first month.",
    name: "David Thompson",
    role: "Sales Manager",
    company: "GrowthCo",
    image: "/images/profile4.png",
  },
  {
    id: 5,
    quote: "Intuitive & Powerful",
    text: "Easy to use yet incredibly powerful. Our team was up and running in less than a week with minimal training.",
    name: "Lisa Anderson",
    role: "Operations Lead",
    company: "ScaleUp",
    image: "/images/profile5.png",
  },
  {
    id: 6,
    quote: "Worth Every Penny",
    text: "The automation features alone saved us 20 hours per week. Can't imagine going back to our old system.",
    name: "James Wilson",
    role: "Business Owner",
    company: "Wilson & Co",
    image: "/images/profile6.png",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3; // Number of cards to show at once

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, testimonials.length - cardsPerView) : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= testimonials.length - cardsPerView ? 0 : prev + 1
    );
  };

  // Get visible testimonials
  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  return (
    <section className="padding min-h-screen py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="px-4 py-1 w-fit rounded-full text-xs sm:text-sm font-light shadow-sm mb-6 border border-gray-200 bg-white">
          TESTIMONIALS
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
          <h1 className="text-m">See What Our Customers Say</h1>
          <p className="small-p">
            Discover how businesses boost sales, streamline workflows, and
            achieve real results with Sales Cloud.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mb-12">
          {/* Desktop View - 3 cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                text={testimonial.text}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                image={testimonial.image}
              />
            ))}
          </div>

          {/* Mobile/Tablet View - 1 card */}
          <div className="md:hidden">
            <TestimonialCard
              quote={testimonials[currentIndex].quote}
              text={testimonials[currentIndex].text}
              name={testimonials[currentIndex].name}
              role={testimonials[currentIndex].role}
              company={testimonials[currentIndex].company}
              image={testimonials[currentIndex].image}
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="border-2 border-black hover:bg-black hover:text-white disabled:opacity-30 disabled:cursor-not-allowed p-3 rounded-full transition-all hover:scale-110"
            aria-label="Previous testimonials"
          >
            <ArrowLeft size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {Array.from({
              length: Math.ceil(testimonials.length / cardsPerView),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * cardsPerView)}
                className={`h-2 rounded-full transition-all ${
                  Math.floor(currentIndex / cardsPerView) === index
                    ? "w-8 bg-black"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex >= testimonials.length - cardsPerView}
            className="border-2 border-black bg-black text-white hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed p-3 rounded-full transition-all hover:scale-110"
            aria-label="Next testimonials"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
