import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const features = [
  "Automate workflows & tasks",
  "Scalable for small teams to enterprises",
  "Boost sales productivity by 30%",
];

const ChooseUs = () => {
  return (
    <section className="min-h-screen padding py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12 sm:mb-16">
          <div className="flex-1">
            <div className="rounded-full text-gray-600 px-4 py-1 text-xs sm:text-sm font-light shadow-sm mb-6 border border-gray-200 bg-white w-fit">
              WHY CHOOSE US
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium max-w-lg leading-tight">
              Boost Revenue with Smarter Sales CRM
            </h1>
          </div>
          <p className="flex-1 lg:max-w-md text-gray-600 text-base sm:text-lg leading-relaxed">
            Drive revenue growth with AI-driven insights, pipeline visibility,
            and seamless team collaboration. Empower your sales team to sell
            smarter.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-regular leading-tight mb-8">
              <span className="bg-light-green px-3 py-1 rounded-lg inline-block">
                Accelerate Growth
              </span>{" "}
              with Salesforce Sales Cloud
            </h2>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-base sm:text-lg text-gray-700"
                >
                  <Check
                    size={24}
                    className="flex-shrink-0 text-green-500 mt-0.5"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="bg-black hover:bg-gray-800 rounded-full text-white px-8 py-3 font-medium transition-all hover:scale-105 shadow-lg">
              Learn More
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full">
            <div className="bg-blue-50 rounded-2xl p-6 sm:p-8 lg:p-12">
              <div className="relative w-full aspect-[3/3]">
                <Image
                  src="/images/chooseus.png"
                  alt="Sales CRM dashboard illustration showing analytics and insights"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
