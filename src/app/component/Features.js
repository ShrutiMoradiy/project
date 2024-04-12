import React from "react";
import Image from "next/image";
import Link from "next/link";
import check from "/public/check.svg";
import arrowright from "/public/arrow-right-white.svg";

export default function Features() {
  return (
    <>
      <section className="relative w-full bg-[#000000fa]">
        <div className="container py-24 mx-auto">
          <h1 className="text-[1.3125rem] text-white font-medium text-center mb-14">
            Many more powerful features
          </h1>
          <div className="flex sm:text-start px-5 lg:px-0 justify-center flex-wrap gap-6">
            <div className="px-4 py-8 lg:w-1/5 sm:w-1/2 w-full bg-[#161718] hover:shadow-[0_0_1rem_0_rgba(255,255,255)] rounded-lg">
              <div className="flex flex-col sm:items-start sm:text-left text-center -mb-1 space-y-2.5">
                <h6 className="font-medium text-white text-base flex mb-4">
                  <Image src={check} width={17} height={17}></Image>
                  <span className="p-2">Hire and Retain Top Talent</span>
                </h6>
                <h6 className="font-medium text-white text-base flex mb-4">
                  <Image src={check} width={17} height={17}></Image>
                  <span className="p-2">Team Management</span>
                </h6>
              </div>
            </div>
            <div className="px-4 py-8 lg:w-1/5 sm:w-1/2 w-full bg-[#161718] hover:shadow-[0_0_1rem_0_rgba(255,255,255)] rounded-lg">
              <div className="flex flex-col sm:justifiy-start sm:text-left text-center-mb-1 space-y-2.5">
                <h6 className="font-medium text-white text-base flex mb-4">
                  <Image src={check} width={17} height={17}></Image>
                  <span className="p-2">Stay Compliant</span>
                </h6>
                <h6 className="font-medium text-white text-base flex mb-4">
                  <Image src={check} width={17} height={17}></Image>
                  <span className="p-2">Improve Productivity</span>
                </h6>
                <h6 className="font-medium text-white text-base flex mb-4">
                  <Image src={check} width={17} height={17}></Image>
                  <span className="p-2">Improve Experience</span>
                </h6>
              </div>
            </div>
            <div className="px-4 py-8 lg:w-1/5 sm:w-1/2 w-full bg-[#161718] hover:shadow-[0_0_1rem_0_rgba(255,255,255)] rounded-lg">
              <div className="flex flex-col sm:items-start sm:text-left text-center -mb-1 space-y-2">
                <h6 className="font-medium text-white text-base flex mb-4">
                  <Image src={check} width={17} height={17}></Image>
                  <span className="p-2">Self-service Time Tracking</span>
                </h6>
                <h6 className="font-medium text-white text-base flex mb-4">
                  <Image src={check} width={17} height={17}></Image>
                  <span className="p-2">Performance Management</span>
                </h6>
                <h6 className="font-medium text-white text-base flex mb-4">
                  <Image src={check} width={17} height={17}></Image>
                  <span className="p-2">Expert HR</span>
                </h6>
              </div>
            </div>
            <div className="px-4 py-8 lg:w-1/5 sm:w-1/2 w-full bg-[#161718] hover:shadow-[0_0_1rem_0_rgba(255,255,255)] rounded-lg">
              <div className="flex flex-col sm:items-start sm:text-left text-center -mb-1 space-y-2.5">
                <h6 className="font-medium text-white text-base flex mb-4">
                  <Image src={check} width={17} height={17}></Image>
                  <span className="p-2">New Hire Checklist</span>
                </h6>
                <h6 className="font-medium text-white text-base flex mb-4">
                  <Image src={check} width={17} height={17}></Image>
                  <span className="p-2">Tax Calculator</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="bg-[#0055ff] w-[160px] h-[42px] col px-3 py-2 text-white rounded-md">
              <Link
                href="/"
                className="flex items-center text-[.9375rem] font-medium justify-between"
              >
                <span>Sign Up Now</span>
                <Image src={arrowright} width={24} height={24}></Image>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
