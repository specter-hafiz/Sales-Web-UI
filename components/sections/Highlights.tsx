import React from "react";
import HighlightCard from "../ui/HighlightCard";
import { Lock, TrendingUp, Shield, Zap } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Lock,
    title: "Guided Selling",
    description: "Step-by-step guidance to close deals faster.",
    gradient: "from-blue-50 to-blue-100",
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "AI Analytics",
    description: "Data-driven insights to boost your sales performance.",
    gradient: "from-purple-50 to-purple-100",
  },
  {
    id: 3,
    icon: Shield,
    title: "Secure Platform",
    description: "Enterprise-grade security for your customer data.",
    gradient: "from-green-50 to-green-100",
  },
  {
    id: 4,
    icon: Zap,
    title: "Automation",
    description: "Automate workflows and save valuable time.",
    gradient: "from-orange-50 to-orange-100",
  },
];

const Highlights = () => {
  return (
    <section className="min-h-screen padding py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="px-4 py-1 w-fit rounded-full text-xs sm:text-sm font-light shadow-sm mb-6 border border-gray-200 bg-white">
          FEATURE OVERVIEW
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Feature Highlights
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-md leading-relaxed">
            Boost efficiency and win rates with advanced CRM tools, data-driven
            intelligence, and trusted security.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <HighlightCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
