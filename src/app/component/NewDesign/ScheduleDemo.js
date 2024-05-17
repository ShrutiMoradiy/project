import React from "react";
import Image from "next/image";
import path172 from "../../../../public/path172.svg";
import Vector from "../../../../public/Vector.svg";
import RatingStar from "../../../../public/RatingStar.svg";

function ScheduleDemo() {
  return (
    <>
      <section className="bg-[#E6F5FA] pt-[6rem] pb-[4rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container flex justify-center flex-wrap">
          <div className="w-full md:w-[45%] lg:w-[55%] flex flex-col">
            <h1 className="text-[#222222] text-xl md:text-[30px] lg:text-[42px] font-bold leading-[30px] md:leading-[40px] lg:leading-[55px] mb-4">
              Ready to{" "}
              <span className="text-[#019ED1] text-2xl md:text-[40px] lg:text-[52px] font-[750] leading-[30px] md:leading-[40px] lg:leading-[55px]">
                10X
              </span>{" "}
              your E-Commerce Business Success?
            </h1>
            <div className="flex flex-wrap lg:flex-nowrap gap-2 mb-3">
              <div className="flex">
                <span className="border border-[#222222] h-[20px] rounded pl-1 m-1.5">
                  <Image src={Vector} alt="IMG" width={17} height={17} />
                </span>
                <p className="text-[#787878] text-sm md:text-[16px] lg:text:[18px] font-normal leading-[25px] px-1">
                  Start Driving Efficiency
                </p>
              </div>
              <div className="flex">
                <span className="border border-[#222222] h-[20px] rounded pl-1 m-1.5">
                  <Image src={Vector} alt="IMG" width={17} height={17} />
                </span>
                <p className="text-[#787878] text-sm md:text-[16px] lg:text:[18px] font-normal leading-[25px] px-1">
                Identifying Profitable Audiences
                </p>
              </div>
              <div className="flex">
                <span className="border border-[#222222] h-[20px] rounded pl-1 m-1.5">
                  <Image src={Vector} alt="IMG" width={17} height={17} />
                </span>
                <p className="text-[#787878] text-sm md:text-[16px] lg:text:[18px] font-normal leading-[25px] px-1">
                Maximizing Customer Lifetime Value
                </p>
              </div>
            </div>
            <button className="bg-[#019ED1] text-white text-sm md:text-[16px] lg:text-[18px] leading-[21.6px] font-medium w-[150px] md:w-[180px] lg:w-[213px] h-[45px] md:h-[55px] border border-[#019ED1] rounded-md my-3">
            Schedule a Demo
            </button>
            <Image src={RatingStar} alt="RatingStar" width={100} height={100} />
          </div>
          <div className="w-full md:w-[45%] lg:w-[45%] flex justify-center flex-col items-center">
            <Image src={path172} alt="IMG" width={540} height={230} />
          </div>
        </div>
      </section>
    </>
  );
}

export default ScheduleDemo;
