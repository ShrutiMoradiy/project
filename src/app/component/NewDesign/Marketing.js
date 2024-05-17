import React from "react";
import Image from "next/image";

function Marketing() {
  return (
    <div>
      <section className="bg-[#001632] pt-[6rem] pb-[6rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container flex justify-center flex-wrap">
          <div className="w-full lg:w-[60%] flex flex-col">
            <h1 className="text-white text-xl md:text-[30px] lg:text-[42px] font-bold leading-[30px] md:leading-[40px] lg:leading-[50px] mb-2">
              Unlock Precision Marketing with Integrated Audience Builder &
              Unified Data Platform
            </h1>
            <h3 className="text-white text-sm md:text-[16px] lg:text-[25px] leading-[60px] font-medium mb-5">
              Growth in Revenue, Increase in Profits
            </h3>
            <div className="bg-[#B2B9C1] bg-opacity-[20%] h-[2px]">
                <div className="bg-[#019ED1] w-[384px] h-[2px]"></div>
            </div>
            <div className="flex flex-col mb-6">
                <div className="flex">
                  <Image src="/Polygon.svg" alt="IMG" width={8} height={8} />
                  <h1 className="text-white text-sm md:text-[18px] lg:text-[20px] font-bold m-2">
                  Images:
                <span className="text-[#B2B9C1] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal">
                Premium speaker model with high-quality audio features.
                </span>
                  </h1>
                </div>
                <div className="flex">
                  <Image src="/Polygon.svg" alt="IMG" width={8} height={8} />
                  <h1 className="text-white text-sm md:text-[18px] lg:text-[20px] font-bold m-2">
                  Images:
                <span className="text-[#B2B9C1] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal">
                Premium speaker model with high-quality audio features.
                </span>
                  </h1>
                </div>

            </div>
            
          </div>
          <div className="w-full lg:w-[40%] flex justify-center flex-col items-center">
            <Image src="/marketimg.png" alt="IMG" width={509} height={605} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Marketing;
