import React from "react";
import Link from "next/link";
import Image from "next/image";
import arrowright from "/public/arrow-right-primary.svg";
import Users from "/public/users.svg";
import UserPlus from "/public/user-plus.svg";
import ChartBar from "/public/chart-bar.svg";
import payrollimg from "/public/payroll-img.jpg";
import Performance from "/public/perf-img.jpg";

export default function SmartPayroll() {
  return (
    <>
    
      <section className="overflow-hidden">
        <div className="container px-5 py-20 mx-auto">
          <h1 className="text-[1.78125rem] text-[#343a40] font-medium text-center my-2">
            Better Management. Better Performance
          </h1>
          <p className="text-[#525457!important] text-center mb-14">
            Start working with
            <span className="text-[#0055ff] font-bold"> Prompt </span>
            to manage your workforce better
          </p>
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image src={Performance} width={546} height={361} className="shadow-[0_0_.50rem_rgba(73,80,87,1.05)] rounded-md"></Image>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <div className="flex items-start pb-5">
                <div className="bg-[#0055ff1f] flex justify-center items-center mx-5 rounded-lg w-[100px] h-[48px]">
                  <Image src={Users} width={24} height={24}></Image>
                </div>
                <div className="grid">
                  <h4 className="text-[#343a40] text-[1.078125rem] font-semibold mb-4">
                    Improve Employee Experience
                  </h4>

                  <p className="leading-relaxed text-[#525457] mb-4">
                    Before we dive into why companies must invest in employee
                    experience (EX), it’s important to understand what this
                    concept entails.
                  </p>
                  <div className="text-[#0055ff] flex">
                    <Link href="/">Learn more</Link>
                    <Image src={arrowright} width={24} height={24}></Image>
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex items-start py-5">
                <div className="bg-[#3cd2781f] flex justify-center items-center mx-5 rounded-lg w-[48px] h-[48px]">
                  <Image src={UserPlus} width={24} height={24}></Image>
                </div>
                <div className="grid">
                  <h4 className="text-[#343a40] text-[1.078125rem] font-semibold mb-4">
                    Hiring & Onboarding
                  </h4>
                </div>
              </div>
              <hr />
              <div className="flex items-start pt-5">
                <div className="bg-[#ff784b1f] flex justify-center items-center mx-5 rounded-lg w-[48px] h-[48px]">
                  <Image src={ChartBar} width={24} height={24}></Image>
                </div>
                <div className="grid">
                  <h4 className="text-[#343a40] text-[1.078125rem] font-semibold mb-4">
                    Improve Employee Experience
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-20 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-20 lg:py-6 mb-6 lg:mb-0">
              <span className="bg-[#0055ff1f] opacity-[12%] w-[48px] h-[48px]"></span>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                Smart Payroll. Paying your people couldn't be easier
              </h1>

              <p className="leading-relaxed text-[#525457] mb-4">
                You can modify your pages with drag-dropping , can import demos
                with just ” One Click” and can modify theme setting easy-to-use
                options panel.
              </p>

              <div className="text-[#0055ff] flex">
                <Link href="/">Learn more</Link>
                <Image src={arrowright} width={24} height={24}></Image>
              </div>
            </div>
            <Image src={payrollimg} width={546} height={361} className="shadow-[0_0_.50rem_rgba(73,80,87,1.05)] rounded-md"></Image>
          </div>
        </div>
      </section>
    
    </>
  );
}
