import React from "react";
import Link from "next/link";
import Image from "next/image";
import arrowright from "/public/arrow-right-primary.svg";
import payrollimg from "/public/payroll-img.jpg";

export default function SmartPayroll() {
  return (
    <>
      <section className="text-gray-600 body-font mt-10 overflow-hidden">
        <div className="container px-5 py-20 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <span className="bg-[#0055ff1f] opacity-[12%] w-[48px] h-[48px]"></span>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                Smart Payroll. Paying your people couldn't be easier
              </h1>

              <p className="leading-relaxed text-[#8a90a2] mb-4">
                You can modify your pages with drag-dropping , can import demos
                with just ” One Click” and can modify theme setting easy-to-use
                options panel.
              </p>

              <div className="text-[#0055ff] flex">
                <Link href="/">Learn more</Link>
                <Image src={arrowright} width={24} height={24}></Image>
              </div>
            </div>
            <Image src={payrollimg} width={546} height={361}></Image>
          </div>
        </div>
      </section>
    </>
  );
}
