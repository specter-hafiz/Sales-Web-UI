import { ArrowRight, LucideIcon } from "lucide-react";
import React from "react";

interface HighlightCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
}

const HighlightCard = ({
  icon: Icon,
  title,
  description,
  gradient = "from-blue-50 to-blue-100",
}: HighlightCardProps) => {
  return (
    <div
      className={`flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br ${gradient} rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105 group h-full`}
    >
      {/* Icon */}
      <div className="mb-12">
        <div className="w-16 h-16 flex items-center justify-center border-1 border-light-gray rounded-full shadow-sm backdrop-blur-md bg-transparent group-hover:border-gray-300 transition-colors">
          <Icon size={32} className="text-gray-700" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">{title}</h2>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:max-w-[200px]">
          {description}
        </p>
      </div>

      {/* CTA Button */}
      <button className="flex items-center gap-2 bg-white hover:bg-gray-50 rounded-lg border-1 border-white hover:border-gray-200 py-2 px-4 text-sm font-medium shadow-sm transition-all group-hover:gap-3 w-fit">
        See More
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>
    </div>
  );
};

export default HighlightCard;
