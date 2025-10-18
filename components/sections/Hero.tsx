"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Badge */}
          <div className="bg-white rounded-full text-gray-600 px-4 py-2 text-xs sm:text-sm font-light shadow-md mb-6 border border-gray-200">
            10,000+ TEAMS POWERED WORLDWIDE
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-6 leading-tight max-w-5xl">
            Super{" "}
            <span className="bg-light-green px-3 py-1 rounded-lg inline-block">
              Charge Sales
            </span>{" "}
            with Smart Automation AI
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mb-8 leading-relaxed px-4">
            Speed up deal closures with AI-powered insights, predictive
            forecasts and seamless workflows—all on a trusted platform
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => (window.location.href = "/signup")}
              className="w-full sm:w-auto bg-light-green hover:bg-green-300 text-black px-8 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </button>
            <button
              onClick={() => (window.location.href = "/demo")}
              className="w-full sm:w-auto border-2 border-black hover:bg-black hover:text-white text-black px-8 py-3 rounded-full font-medium transition-all"
            >
              Request Demo
            </button>
          </div>
        </div>

        {/* Feature Images - Desktop Only */}
        <div className="hidden lg:flex items-end justify-center gap-4">
          <div className="group hover:scale-105 transition-transform">
            <div className="h-[280px] w-[200px]  bg-white rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/box1.png"
                alt="AI-powered analytics dashboard"
                width={200}
                height={280}
                className="object-contain rounded-xl w-full h-full"
              />
            </div>
          </div>

          <div className="group hover:scale-105 transition-transform">
            <div className="h-[200px] w-[200px] bg-white rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/box2.png"
                alt="Sales pipeline visualization"
                width={200}
                height={200}
                className="object-contain rounded-xl w-full h-full"
              />
            </div>
          </div>

          <div className="group hover:scale-105 transition-transform">
            <div className="h-[200px] w-[280px]  bg-white rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/box3.png"
                alt="Team collaboration features"
                width={280}
                height={200}
                className="object-contain rounded-xl w-full h-full"
              />
            </div>
          </div>

          <div className="group hover:scale-105 transition-transform">
            <div className="h-[200px] w-[200px]  bg-white rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/box4.png"
                alt="Performance metrics"
                width={200}
                height={200}
                className="object-contain rounded-xl w-full h-full"
              />
            </div>
          </div>

          <div className="group hover:scale-105 transition-transform">
            <div className="h-[260px] w-[200px]  bg-white rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/box5.png"
                alt="AI automation workflow"
                width={200}
                height={260}
                className="object-contain rounded-xl w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Image Grid - 2 Columns */}
        <div className="grid grid-cols-2 gap-4 lg:hidden mt-12">
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg aspect-[3/4]">
            <Image
              src="/images/box1.png"
              alt="AI-powered analytics dashboard"
              width={200}
              height={280}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg aspect-square">
            <Image
              src="/images/box2.png"
              alt="Sales pipeline visualization"
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-span-2 bg-gray-100 rounded-xl overflow-hidden shadow-lg aspect-video">
            <Image
              src="/images/box3.png"
              alt="Team collaboration features"
              width={280}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg aspect-square">
            <Image
              src="/images/box4.png"
              alt="Performance metrics"
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg aspect-[3/4]">
            <Image
              src="/images/box5.png"
              alt="AI automation workflow"
              width={200}
              height={260}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
