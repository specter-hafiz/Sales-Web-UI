import React from "react";
import { Check } from "lucide-react";

interface PricingCardProps {
  price: number;
  name: string;
  description: string;
  features: string[];
  isMiddle: boolean;
}

const PricingCard = ({
  price,
  name,
  description,
  features,
  isMiddle,
}: PricingCardProps) => {
  return (
    <div
      className={`relative flex flex-col items-start p-8 rounded-2xl hover:shadow-xl transition-all hover:scale-105 h-full ${
        isMiddle
          ? "bg-light-blue text-white shadow-md md:-mt-12 md:mb-8 scale-105 md:scale-110"
          : "md:mt-12"
      }`}
    >
      {/* Popular Badge (Middle Card Only) */}

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-center space-between justify-between w-full">
          {/* Left side: Price + /month */}
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold">${price}</span>
            <span
              className={`text-lg ${
                isMiddle ? "text-blue-100" : "text-gray-500"
              }`}
            >
              /month
            </span>
          </div>

          {/* Right side: Most Popular badge */}
          {isMiddle && (
            <div className="ml-10 px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700 shadow-sm">
              Most Popular
            </div>
          )}
        </div>
      </div>

      {/* Plan Name & Description */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-3 text-left">{name}</h2>
        <p
          className={`text-left text-sm leading-relaxed ${
            isMiddle ? "text-blue-50" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      </div>

      {/* Features List */}
      <ul className="flex flex-col gap-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check
              size={20}
              className={`flex-shrink-0 mt-0.5 ${
                isMiddle ? "text-green-300" : "text-green-500"
              }`}
            />
            <span
              className={`text-sm ${
                isMiddle ? "text-blue-50" : "text-gray-700"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        className={`w-full py-3 px-6 rounded-full font-semibold transition-all hover:scale-105 shadow-md ${
          isMiddle
            ? "bg-white text-blue-600 hover:bg-gray-50"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;
