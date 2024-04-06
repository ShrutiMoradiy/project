import React from "react";
import Image from "next/image";
import Link from "next/link";
import check from "/public/check.svg";

function Pricing() {
  return (
    <div>
      <section class="overflow-hidden">
        <div class="container px-5 pb-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="text-[1.78125rem] text-[#343a40] font-medium mb-2">
                Pricing Plans
            </h1>
            <p class="text-[#8a90a2!important] text-center">
                Pricing that <span className="text-[#0055ff] font-bold"> works </span>  for everyone
            </p>
            
          </div>
          <div class="flex flex-wrap">
            
              <div class="lg:h-[471px] lg:w-[356px] md:w-full sm:w-full p-5 mx-3 lg:my-3 sm:my-3 md:my-5 rounded border shadow-[0_0_.25rem_rgba(73,80,87,.05)] hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.12)] border-gray-200 flex flex-col relative overflow-hidden">
                <h4 class="text-[1.078125rem] text-[#0055ff] text-center font-semibold">
                    Starter
                </h4>
                <h1 class="py-3 mb-2 text-center leading-none">
                    <span className="text-[#8a90a2] text-[13px] font-normal align-top">$</span>
                    <span className="text-[#343a40] text-[1.78125rem] font-bold">49</span>
                    <span className="text-[#8a90a2] text-[13px] font-normal">/ month</span>                    
                </h1>
                <div className="border-t border-gray-200 py-7 mt-4 text-start">
                <p class="flex items-center text-gray-600 py-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center flex-shrink-0">
                    <Image src={check}></Image>
                  </span>
                  Up to 600 minutes usage time
                </p>
                <p class="flex items-center text-gray-600 py-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center flex-shrink-0">
                    <Image src={check}></Image>
                  </span>
                  Use for personal only
                </p>
                <p class="flex items-center text-gray-600 py-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center flex-shrink-0">
                    <Image src={check}></Image>
                  </span>
                  Add up to 10 attendees
                </p>
                <p class="flex items-center text-gray-600 py-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center flex-shrink-0">
                    <Image src={check}></Image>
                  </span>
                  1 User
                </p>
                <p class="flex items-center text-gray-600 py-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center flex-shrink-0">
                    <Image src={check}></Image>
                  </span>
                  Technical support via email
                </p>
                </div>
                <Link href="/" class="flex items-center mt-3 justify-center font-medium text-[#05f] bg-[#0055ff1a] border-1 border-transparent py-2 px-4 w-full focus:outline-none hover:border-1 hover:border-[#0055ff1a] hover:shadow-[0_1px_1px_rgba(0,85,255,.1),0_2px_4px_1px_rgba(0,85,255,.1)] rounded">
                Purchase Now
                </Link>
              </div>

              <div class="lg:h-[471px] lg:w-[356px] md:w-full sm:w-full p-5 mx-3 lg:my-3 sm:my-3 md:my-5 rounded border shadow-[0_0_.25rem_rgba(73,80,87,.05)] hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.12)] border-gray-200 flex flex-col relative overflow-hidden">
                <h4 class="text-[1.078125rem] text-[#0055ff] text-center font-semibold">
                Professional
                </h4>
                <h1 class="py-3 mb-2 text-center leading-none">
                    <span className="text-[#8a90a2] text-[13px] font-normal align-top">$</span>
                    <span className="text-[#343a40] text-[1.78125rem] font-bold">99</span>
                    <span className="text-[#8a90a2] text-[13px] font-normal">/ month</span>                    
                </h1>
                <div className="border-t border-gray-200 py-7 mt-4 text-start">
                <p class="flex items-center text-gray-600 py-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center flex-shrink-0">
                    <Image src={check}></Image>
                  </span>
                  Up to 6000 minutes usage time
                </p>
                <p class="flex items-center text-gray-600 py-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center flex-shrink-0">
                    <Image src={check}></Image>
                  </span>
                  Use for personal or a commercial
                </p>
                <p class="flex items-center text-gray-600 py-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center flex-shrink-0">
                    <Image src={check}></Image>
                  </span>
                  Add up to 100 attendees
                </p>
                <p class="flex items-center text-gray-600 py-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center flex-shrink-0">
                    <Image src={check}></Image>
                  </span>
                  Up to 5 teams
                </p>
                <p class="flex items-center text-gray-600 py-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center flex-shrink-0">
                    <Image src={check}></Image>
                  </span>
                  Technical support via email
                </p>
                </div>
                <Link href="/" class="flex items-center mt-3 justify-center font-medium text-white bg-[#05f] border-1 border-[#05f] py-2 px-4 w-full focus:outline-none hover:border-1 hover:border-[#05f] hover:shadow-[0_8px_20px_-6px_rgba(0,85,255,.6)] rounded">
                Purchase Now
                </Link>
              </div>

              <div class="lg:h-[471px] lg:w-[356px] md:w-full sm:w-full p-5 mx-3 lg:my-3 sm:my-3 md:my-5 rounded border shadow-[0_0_.25rem_rgba(73,80,87,.05)] hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.12)] border-gray-200 flex flex-col relative overflow-hidden">
                <h4 class="text-[1.078125rem] text-[#0055ff] text-center font-semibold">
                Enterprise
                </h4>
                <h1 class="py-3 mb-2 text-center leading-none">
                    <span className="text-[#8a90a2] text-[13px] font-normal align-top">$</span>
                    <span className="text-[#343a40] text-[1.78125rem] font-bold">599</span>
                    <span className="text-[#8a90a2] text-[13px] font-normal">/ month</span>                    
                </h1>
                <div className="border-t border-gray-200 py-7 mt-4 text-start">
                <p class="flex items-center text-gray-600 py-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center flex-shrink-0">
                    <Image src={check}></Image>
                  </span>
                  Unlimited usage time
                </p>
                <p class="flex items-center text-gray-600 py-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center flex-shrink-0">
                    <Image src={check}></Image>
                  </span>
                  Use for personal or a commercial
                </p>
                <p class="flex items-center text-gray-600 py-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center flex-shrink-0">
                    <Image src={check}></Image>
                  </span>
                  Add Unlimited attendees
                </p>
                <p class="flex items-center text-gray-600 py-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center flex-shrink-0">
                    <Image src={check}></Image>
                  </span>
                  24x7 Technical support via phone
                </p>
                <p class="flex items-center text-gray-600 py-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center flex-shrink-0">
                    <Image src={check}></Image>
                  </span>
                  Technical support via email
                </p>
                </div>
                <Link href="/" class="flex items-center mt-3 justify-center font-medium text-[#05f] bg-[#0055ff1a] border-1 border-transparent py-2 px-4 w-full focus:outline-none hover:border-1 hover:border-[#0055ff1a] hover:shadow-[0_1px_1px_rgba(0,85,255,.1),0_2px_4px_1px_rgba(0,85,255,.1)] rounded">
                Purchase Now
                </Link>
              </div>

            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
