import React from "react";
import Image from "next/image";
import bgimg from "/public/temp-imgs/intro-img.svg";


function Mainhead() {
  return (
    <>
    <section className="w-full px-10 bg-[url('/temp-imgs/hero-bg-1.png')] bg-cover">
     <div className="container flex items-center justify-center lg:flex-nowrap flex-wrap gap-10 pt-20">
     <div className="lg:w-1/2 w-full">
      <h1 className="lg:text-5xl text-3xl font-semibold">Personalizing Experiences</h1>
      <p className="text-base text-gray-600 font-medium lg:w-[70%] pt-6">At TechMonk, we understand the demands of today's fast-paced digital world, where customers crave personalized experiences tailored to their unique needs and preferences. Gone are the days of generic interactions and one-size-fits-all marketing.</p>
      </div>
      <div className="lg:w-1/2 w-full justify-items-end">
        <Image src={bgimg} width={600}/>
      </div>
     </div>
    </section>
    </>
  );
}

export default Mainhead;
