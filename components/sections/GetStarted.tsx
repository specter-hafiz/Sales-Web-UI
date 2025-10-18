import React from "react";
import Link from "next/link";

const GetStarted = () => {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url(/images/started.png)] bg-cover bg-center" />

      {/* Content */}
      <div className="relative padding flex flex-col items-center justify-center h-full text-center z-10">
        {/* Badge */}
        <div className="tag">GET STARTED TODAY</div>

        {/* Heading */}
        <h1 className="text-m max-w-3xl leading-tight">
          Own the Customer Experience. Own the Growth.
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-dark-gray max-w-2xl leading-relaxed mb-8">
          Get started today and empower your sales team to succeed.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-started">
            <button className="bg-black hover:bg-black-600 text-white rounded-full py-3 px-8 font-semibold text-sm sm:text-base transition-all hover:scale-105 shadow-lg w-full sm:w-auto">
              Start Free Trial
            </button>
          </Link>
          <Link href="/demo">
            <button className="bg-white/10 backdrop-blur-md border-1 border-dark-gray hover:bg-light-green hover:text-black rounded-full py-3 px-8 font-semibold text-sm sm:text-base transition-all hover:scale-105 w-full sm:w-auto">
              Request Demo
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
