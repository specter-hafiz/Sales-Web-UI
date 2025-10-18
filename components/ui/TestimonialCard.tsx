import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  text: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

const TestimonialCard = ({
  quote,
  text,
  name,
  role,
  company,
  image,
}: TestimonialCardProps) => {
  return (
    <div className="flex flex-col justify-between p-6 sm:p-8 border border-light-gray hover:border-light-gray-200 h-full rounded-2xl shadow-sm hover:shadow-md transition-all bg-white group">
      {/* Quote */}
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">
          &quot;{quote}&quot;
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {text}
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
        <div className="relative h-12 w-12 rounded-full overflow-hidden shadow-md flex-shrink-0 group-hover:scale-110 transition-transform">
          <Image
            src={image}
            alt={`${name} profile photo`}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-base sm:text-lg font-bold text-gray-900">
            {name}
          </h4>
          <p className="text-sm text-gray-500">
            {role} @ {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
