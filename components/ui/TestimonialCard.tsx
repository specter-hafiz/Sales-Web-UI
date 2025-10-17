import React from "react";
import Image from "next/image";
const TestimonialCard = () => {
  return (
    <div className="flex flex-col items-start p-6 border border-light-gray h-full rounded-2xl">
      <h1 className="text-base sm:text-lg font-medium mb-4">
        "Highly Reliable"
      </h1>
      <p className="text-base sm:text-sm text-dark-gray max-w-3xs mb-12 leading-relaxed">
        Professional, responsive, and always on time. The collaboration made our
        project launch effortless and successful.
      </p>
      <div className="flex items-center gap-4">
        <div className="h-[40px] w-[40px] bg-gray-100 rounded-full overflow-hidden shadow-lg">
          <Image
            src="/images/profile1.png"
            alt="Customer Testimonial"
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h2 className="text-base sm:text-lg text-bold">Sophia Martinez</h2>
          <p className="text-base sm:text-sm text-dark-gray">
            Marketing Director @BrightEdge
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
