import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <>
      <section className="bg-[#001632] pt-[3rem] pb-[2rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container flex justify-between flex-wrap gap-3">
          <div className="w-full md:w-[45%] lg:w-[30%] flex flex-col gap-2  mb-4 md:mb-0">
            <Image src="/Logo.png" alt="IMG" width={170} height={170} />
            <p className="text-[#B2B9C1] text-[15px] font-normal opacity-[50%] leading-[20px]">
              © 2024 TechMonk. All Rights Recovered
            </p>
          </div>
          <div className="w-full md:w-[45%] lg:w-[60%] flex flex-col lg:items-end">
            <ul className="flex gap-3 mb-4 flex-wrap">
              <li className="text-white text-[16px] font-normal leading-5">
                Features
              </li>
              <li className="text-white text-[16px] font-normal leading-5">
                Pricing
              </li>
              <li className="text-white text-[16px] font-normal leading-5">
                About
              </li>
              <li className="text-white text-[16px] font-normal leading-5">
                Contact us
              </li>
              <li className="text-white text-[16px] font-normal leading-5">
                Sign in / Sign up
              </li>
              <li className="text-white text-[16px] font-normal leading-5">
                Terms
              </li>
              <li className="text-white text-[16px] font-normal leading-5">
                Privacy
              </li>
            </ul>
            <ul className="flex gap-3">
              <li className="">
                <Image src="/vector1.svg" alt="IMG" width={10} height={10} />
              </li>
              <li className="">
                <Image src="/vector2.svg" alt="IMG" width={18} height={18} />
              </li>
              <li className="">
                <Image src="/vector3.svg" alt="IMG" width={18} height={18} />
              </li>
              <li className="">
                <Image src="/vector4.svg" alt="IMG" width={18} height={18} />
              </li>
            </ul>
          </div>
          <div className="w-full flex justify-end md:w-auto md:justify-start">
            <Image src="/footerup.svg" alt="IMG" width={42} height={46} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
