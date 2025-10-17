import ChooseUs from "@/components/sections/ChooseUs";
import GetStarted from "@/components/sections/GetStarted";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import Pricing from "@/components/sections/Pricing";
import Resources from "@/components/sections/Resources";
import Testimonials from "@/components/sections/Testimonials";
import Products from "@/components/sections/Products";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <ChooseUs />
      <Highlights />
      <Pricing />
      <Testimonials />
      <Resources />
      <GetStarted />
    </>
  );
};

export default Home;
