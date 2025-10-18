import { ArrowRight, LucideIcon, Tag } from "lucide-react";
import React from "react";

interface ProductCardProps {
  category: string;
  title: string;
  highlight: string;
  description: string;
  gradient?: string;
  icon: LucideIcon;
}

const ProductCard = ({
  category,
  title,
  highlight,
  description,
  gradient = "from-blue-50 to-blue-100",
  icon: Icon,
}: ProductCardProps) => {
  return (
    <div
      className={`bg-gradient-to-br ${gradient} p-6 rounded-xl shadow-md hover:shadow-md transition-all hover:scale-105 group flex flex-col justify-between h-full`}
    >
      {/* Icon */}
      <div className="bg-white shadow-sm rounded-full w-fit p-2 mb-12">
        <Icon size={24} className="text-gray-700" />
      </div>

      {/* Category */}
      <h3 className="text-xs sm:text-sm text-gray-600 font-medium mb-2 tracking-wide">
        {category}
      </h3>

      {/* Title with Highlight */}
      <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-6 leading-tight">
        {title} <span className="text-gray-400">{highlight}</span> {description}
      </h2>

      {/* CTA Button */}
      <button className="flex items-center w-fit gap-2 px-4 py-2 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-sm font-medium text-sm group-hover:gap-3 group-hover:transition-all">
        See More
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>
    </div>
  );
};

export default ProductCard;
