import React from "react";
import Image from "next/image";
import Header from "../Header";

function page() {
  return (
    <div>
      <Header />
      <section className="flex justify-center bg-[#d8e6eb] pt-[6rem] pb-[6rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container">
          <div className="flex items-start mb-10">
            <h1 className="text-[#222222] text-2xl md:text-[35px] lg:text-[45px] font-bold md:leading-[55px]">
              Blog
            </h1>
          </div>
          <div className="flex justify-center gap-20">
            <div className="w-full lg:w-[50%] flex justify-center flex-col items-center">
              <Image src="/marketimg.png" alt="IMG" width={650} height={605} />
            </div>
            <div className="w-full lg:w-[50%] flex flex-col">
              <h1 className="text-[#222222] text-xl md:text-[30px] lg:text-[42px] font-bold leading-[30px] md:leading-[40px] lg:leading-[55px] mb-2">
                Should Companies Pay High Dividends?
              </h1>
              <p className="text-[#787878] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal mb-5">
                Everyone loves a dividend. Getting paid simply by owning shares
                in a company feels good. But is it ultimately the best outcome
                for you or the company to do so?
              </p>
              <div className="flex flex-wrap sm:flex-nowrap gap-4 mb-6">
                <Image src="/Ellipse.png" alt="Img" width={50} height={50} />
                <div>
                  <h3 className="text-[#222222] text-sm md:text-[16px] lg:text-[18px] leading-[22px] font-bold">
                    Marvin McKinney
                  </h3>
                  <p className="text-[#464646] text-xs md:text-[13px] leading-[17px] font-normal">
                    April 29, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
            <h1 className="text-[#222222] text-2xl md:text-[35px] lg:text-[45px] font-bold md:leading-[55px] text-left mt-10">
              Most Read Articles
            </h1>
          <div className="flex gap-10">
            <div className="border-t-2 border-[#222] w-[25%] mt-10 pt-6">
                <span className="text-[#515050] text-sm md:text-[16px] leading-[25px] font-normal">May 3, 2024</span>
                <h3 className="text-[#222222] text-sm md:text-[18px] lg:text-[22px] font-bold leading-[30px] mt-4">Is the Kernel KiwiSaver Plan Right for You?</h3>
            </div>
            <div className="border-t-2 border-[#222] w-[25%] mt-10 pt-6">
                <span className="text-[#515050] text-sm md:text-[16px] leading-[25px] font-normal">May 3, 2024</span>
                <h3 className="text-[#222222] text-sm md:text-[18px] lg:text-[22px] font-bold leading-[30px] mt-4">Is the Kernel KiwiSaver Plan Right for You?</h3>
            </div>
            <div className="border-t-2 border-[#222] w-[25%] mt-10 pt-6">
                <span className="text-[#515050] text-sm md:text-[16px] leading-[25px] font-normal">May 3, 2024</span>
                <h3 className="text-[#222222] text-sm md:text-[18px] lg:text-[22px] font-bold leading-[30px] mt-4">Is the Kernel KiwiSaver Plan Right for You?</h3>
            </div>
            <div className="border-t-2 border-[#222] w-[25%] mt-10 pt-6">
                <span className="text-[#515050] text-sm md:text-[16px] leading-[25px] font-normal">May 3, 2024</span>
                <h3 className="text-[#222222] text-sm md:text-[18px] lg:text-[22px] font-bold leading-[30px] mt-4">Is the Kernel KiwiSaver Plan Right for You?</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
