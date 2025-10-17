import React from "react";
import Image from "next/image";
import ProductCard from "../ui/ProductCard";

const companies = [
  { name: "Coinbase", logo: "/logos/coinbase.png" },
  { name: "Spotify", logo: "/logos/spotify.png" },
  { name: "Slack", logo: "/logos/slack.png" },
  { name: "Dropbox", logo: "/logos/dropbox.png" },
  { name: "Webflow", logo: "/logos/webflow.png" },
  { name: "Zoom", logo: "/logos/zoom.png" },
];

const products = [
  {
    id: 1,
    category: "SALES ENGAGEMENT",
    title: "Accelerate sales",
    highlight: "with engagement",
    description: "built directly into your CRM.",
    gradient: "from-blue-50 to-blue-100",
  },
  {
    id: 2,
    category: "ANALYTICS",
    title: "Data-driven",
    highlight: "insights",
    description: "to boost your revenue.",
    gradient: "from-purple-50 to-purple-100",
  },
  {
    id: 3,
    category: "AUTOMATION",
    title: "Automate workflows",
    highlight: "effortlessly",
    description: "and save time.",
    gradient: "from-green-50 to-green-100",
  },
  {
    id: 4,
    category: "INTEGRATION",
    title: "Connect your tools",
    highlight: "seamlessly",
    description: "in one platform.",
    gradient: "from-orange-50 to-orange-100",
  },
];

const Products = () => {
  return (
    <section className="min-h-screen padding py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center rounded-2xl bg-gradient-to-br from-white via-white to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
          {/* Trust Badge */}
          <h2 className="text-gray-600 text-sm sm:text-base mb-8 sm:mb-12 text-center">
            Trusted by 55,000+ Businesses Worldwide
          </h2>

          {/* Company Logos */}
          <div className="flex gap-6 sm:gap-8 md:gap-12 lg:gap-16 flex-wrap justify-center mb-12 sm:mb-20">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform"
              >
                <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-800">
                  {company.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Product Section Header */}
          <div className="flex flex-col items-center px-4 sm:px-6 py-12 w-full max-w-4xl">
            <div className="rounded-full text-gray-600 px-4 py-1 text-xs sm:text-sm font-light shadow-sm mb-6 border border-gray-200 bg-white">
              PRODUCT
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 leading-tight text-center">
              See Sales Cloud in Action
            </h1>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mb-8 leading-relaxed text-center">
              Unlock faster sales cycles with real-time analytics, automated
              workflows, and smarter engagement tools—all in one platform.
            </p>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-7xl px-4 mb-12">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                category={product.category}
                title={product.title}
                highlight={product.highlight}
                description={product.description}
                gradient={product.gradient}
              />
            ))}
          </div>

          {/* CTA Button */}
          <button className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-3 font-medium transition-all hover:scale-105 shadow-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
