import React from "react";

//components
import HAboutUS from "../Components/homecomponents/HAboutUS";
import HomeHero from "../Components/homecomponents/HomeHero";
import HFeartured from "../Components/homecomponents/HFeartured";

const homepage = () => {
  return (
    <div className="flex flex-col justify-start items-center">
      <HomeHero />
      <section className="w-full h-[70vh] bg-[#2490EB] relative">
        <div className="flex justify-center">
          <button className="bg-[#D3E9FB] text-[#19357C] px-3 py-2 rounded-md mt-[50px]">OUR FEATURES</button>
        </div>
        <h1 className="text-3xl text-center text-white font-semibold m-auto mt-5 pt-5 pb-5">
          What Features We Provide
        </h1>
        <div className="absolute -bottom-[227px]">
          <HFeartured />
        </div>
      </section>
      <HAboutUS />
    </div>
  );
};

export default homepage;