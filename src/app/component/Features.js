import React from "react";
import Image from "next/image";
import Link from "next/link";
import check from "/public/check.svg";
import arrowright from "/public/arrow-right-white.svg";

export default function Features() {
  return (
    <>
      <section className="relative">
        <div className="container px-5 pb-24 mx-auto">
          <h1 className="text-[1.3125rem] text-[#343a40] font-medium text-center mb-14">
            Many more powerful features
          </h1>
          <div className="flex sm:text-start flex-wrap">
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <div className="flex flex-col sm:items-start sm:text-left text-center -mb-1 space-y-2.5">
                <h6 className="font-medium text-[#343a40] text-base flex mb-4">
                  <Image src={check} width={24} height={24}></Image>
                  <span className="p-2">Hire and Retain Top Talent</span>
                </h6>
                <h6 className="font-medium text-[#343a40] text-base flex mb-4">
                  <Image src={check} width={24} height={24}></Image>
                  <span className="p-2">Team Management</span>
                </h6>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <div className="flex flex-col sm:justifiy-start sm:text-left text-center-mb-1 space-y-2.5">
                <h6 className="font-medium text-[#343a40] text-base flex mb-4">
                  <Image src={check} width={24} height={24}></Image>
                  <span className="p-2">Stay Compliant</span>
                </h6>
                <h6 className="font-medium text-[#343a40] text-base flex mb-4">
                  <Image src={check} width={24} height={24}></Image>
                  <span className="p-2">Improve Productivity</span>
                </h6>
                <h6 className="font-medium text-[#343a40] text-base flex mb-4">
                  <Image src={check} width={24} height={24}></Image>
                  <span className="p-2">Improve Experience</span>
                </h6>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <div className="flex flex-col sm:items-start sm:text-left text-center -mb-1 space-y-2">
                <h6 className="font-medium text-[#343a40] text-base flex mb-4">
                  <Image src={check} width={24} height={24}></Image>
                  <span className="p-2">Self-service Time Tracking</span>
                </h6>
                <h6 className="font-medium text-[#343a40] text-base flex mb-4">
                  <Image src={check} width={24} height={24}></Image>
                  <span className="p-2">Performance Management</span>
                </h6>
                <h6 className="font-medium text-[#343a40] text-base flex mb-4">
                  <Image src={check} width={24} height={24}></Image>
                  <span className="p-2">Expert HR</span>
                </h6>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <div className="flex flex-col sm:items-start sm:text-left text-center -mb-1 space-y-2.5">
                <h6 className="font-medium text-[#343a40] text-base flex mb-4">
                  <Image src={check} width={24} height={24}></Image>
                  <span className="p-2">New Hire Checklist</span>
                </h6>
                <h6 className="font-medium text-[#343a40] text-base flex mb-4">
                  <Image src={check} width={24} height={24}></Image>
                  <span className="p-2">Tax Calculator</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="mt-12 row flex justify-center">
            <div className="bg-[#0055ff] w-[160px] h-[42px] col p-2 text-white rounded-md m p-8b-2">
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
