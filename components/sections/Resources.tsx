import React from "react";
import Image from "next/image";
import ResourceCard from "../ui/ResourceCard";

const resources = [
  {
    id: 1,
    title: "Take the Sales Cloud guided tour.",
    description:
      "Explore Sales Cloud in action with an interactive walkthrough. See how powerful tools simplify selling and help your team close deals faster.",
    image: "/images/resource2.png",
    buttonText: "Take the tour",
    buttonLink: "/tour",
  },
  {
    id: 2,
    title: "Download the Sales Playbook 2025",
    description:
      "Get proven strategies, templates, and tactics to boost your team's performance and close more deals this year.",
    image: "/images/resource3.png",
    buttonText: "Download Now",
    buttonLink: "/playbook",
  },
  {
    id: 3,
    title: "Watch the Product Demo",
    description:
      "See Sales Cloud in action with a 15-minute video walkthrough covering all the key features and capabilities.",
    image: "/images/resource4.png",
    buttonText: "Watch Demo",
    buttonLink: "/demo",
  },
];

const Resources = () => {
  return (
    <section className="padding min-h-screen py-16 sm:py-20" id="resources">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="px-4 py-1 w-fit rounded-full text-xs sm:text-sm font-light shadow-sm mb-6 border border-gray-200 bg-white">
          RESOURCES
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
          <h1 className="text-m">Resources to Help You Succeed</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-md leading-relaxed">
            Empower your team to focus on selling with streamlined workflows,
            automated updates, and actionable insights.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Featured Resource (Left) */}
          <div className="flex-1 border border-light-gray rounded-2xl p-6 sm:p-8 flex flex-col hover:border-light-gray-200 hover:shadow-md transition-all bg-white group">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 group-hover:scale-[1.02] transition-transform">
              <Image
                src="/images/resource1.png"
                alt="2025 Gartner Magic Quadrant Report"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 leading-tight">
              2025 Gartner Magic Quadrant for Sales Force Automation Platforms
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed flex-grow">
              Salesforce is recognized as a Leader once again, showcasing our
              innovation, reliability, and proven impact in transforming sales
              performance worldwide.
            </p>
            <button className="bg-black text-white rounded-full py-3 px-6 font-medium hover:bg-gray-800 transition-all hover:scale-105 shadow-lg w-fit">
              Get The Report
            </button>
          </div>

          {/* Smaller Resources (Right) */}
          <div className="flex-1 flex flex-col gap-6">
            {resources.map((resource) => (
              <ResourceCard
                key={resource.id}
                title={resource.title}
                description={resource.description}
                image={resource.image}
                buttonText={resource.buttonText}
                buttonLink={resource.buttonLink}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
