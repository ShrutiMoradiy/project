import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function ScheduleDemoForm({ showform }) {
  
  return (
    <>
      <motion.section
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="fixed inset-0 z-50 flex justify-center items-center"
      >
        <div className="w-[320px] mr-20 sm:w-[40%] bg-[#E6F5FA] bg-[url('/Group.png')] bg-left-top bg-no-repeat shadow-[0_0_1rem_0_rgba(20_22_50)] rounded-md p-5">
          <span className="flex justify-end" onClick={showform}>
            <Image src="/cancel.svg" width={20} height={20} />
          </span>
          <form>
            <div className="flex flex-wrap justify-center">
              <h1 className="text-[#001632] text-base md:text-xl lg:text-2xl font-bold mb-5">
                Fill this form for schedule a demo
              </h1>
              <div className="w-full xl:w-1/2 flex flex-col flex-wrap">
                <label className="text-[16px] font-semibold text-[#222222] text-left m-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Your First Name"
                  className="border border-[dee2e6] text-[#787878] placeholder:text-sm placeholder:text-[#787878] lg:px-3 p-1 lg:py-2 m-1 rounded"
                />
              </div>
              <div className="w-full xl:w-1/2 flex flex-col flex-wrap">
                <label className="text-[16px] font-semibold text-[#222222] text-left m-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Your Last Name"
                  className="border border-[dee2e6] text-[#787878] placeholder:text-sm placeholder:text-[#787878] lg:px-3 p-1 lg:py-2 m-1 rounded"
                />
              </div>
              <div className="w-full flex flex-col flex-wrap">
                <label className="text-[16px] font-semibold text-[#222222] text-left m-1">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-[dee2e6] text-[#787878] placeholder:text-sm placeholder:text-[#787878] lg:px-3 p-1 lg:py-2 m-1 rounded"
                />
              </div>

              <div className="">
                <button className="bg-[#019ED1] text-white text-sm md:text-[16px] lg:text-[18px] leading-[21.6px] font-medium w-[100px] h-[45px] rounded-md my-3 transition-colors duration-200 hover:bg-[#001632]">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </motion.section>
    </>
  );
}

export default ScheduleDemoForm;
