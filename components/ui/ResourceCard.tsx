import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ResourceCardProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

const ResourceCard = ({
  title,
  description,
  image,
  buttonText,
  buttonLink,
}: ResourceCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 border border-light-gray rounded-2xl p-4 sm:p-6 hover:border-light-gray-200 hover:shadow-md transition-all bg-white group h-full">
      {/* Image */}
      <div className="relative w-full sm:w-40 sm:h-40 aspect-video sm:aspect-square flex-shrink-0 rounded-xl overflow-hidden group-hover:scale-105 transition-transform">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 leading-tight text-gray-900">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            {description}
          </p>
        </div>

        {/* CTA Button */}
        <Link href={buttonLink}>
          <button className="border-1 border-light-gray hover:border-black hover:bg-black hover:text-white rounded-full py-2 px-5 font-medium text-sm transition-all w-fit">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ResourceCard;
