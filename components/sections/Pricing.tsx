import { Check, ChevronDown } from "lucide-react";
import React from "react";
import PricingCard from "../ui/PricingCard";

const plans = [
  {
    id: 1,
    price: 25,
    name: "Starter",
    description:
      "Simple, affordable plan to organize leads, manage contacts, and close your first deals.",
    features: [
      "Core CRM features",
      "Pipeline tracking",
      "Up to 10 users",
      "Email integration",
      "Basic reporting",
    ],
  },
  {
    id: 2,
    price: 75,
    name: "Professional",
    description:
      "Advanced features for growing teams that need automation and deeper insights.",
    features: [
      "Everything in Starter",
      "Advanced automation",
      "Custom dashboards",
      "Unlimited users",
      "Priority support",
    ],
    featured: true,
  },
  {
    id: 3,
    price: 150,
    name: "Enterprise",
    description:
      "Full-featured platform for large organizations with advanced security needs.",
    features: [
      "Everything in Professional",
      "AI-powered insights",
      "Custom integrations",
      "Dedicated account manager",
      "99.9% uptime SLA",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="padding min-h-screen py-16 sm:py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 items-center text-center">
        {/* Badge */}
        <div className="px-4 py-1 w-fit rounded-full text-xs sm:text-sm font-light shadow-sm mb-4 border border-gray-200 bg-white">
          PRICING
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium max-w-4xl">
          Choose the Right Plan for Your Team
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
          Find the right Sales Cloud edition for your business needs.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 my-4">
          <button className="bg-green-400 hover:bg-green-500 px-8 py-3 text-black rounded-full font-medium transition-all hover:scale-105 shadow-lg">
            View Plans
          </button>
          <button className="border-2 border-black hover:bg-black hover:text-white px-6 py-3 text-black rounded-full font-medium transition-all flex items-center justify-center gap-2">
            US Dollar (USD)
            <ChevronDown size={18} />
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 w-full items-start">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              price={plan.price}
              name={plan.name}
              description={plan.description}
              features={plan.features}
              isMiddle={index === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
