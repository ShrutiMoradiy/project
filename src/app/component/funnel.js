import { Container } from "postcss";
import React from "react";

function Funnel() {
  return (
    <>
      <section className="w-full justify-center flex flex-col lg:p-28 p-10 pt-0">
            
          <div class="flex justify-center mx-auto pt-7">
            <h1 class="text-2xl lg:text-3xl text-[#343a40] font-semibold mb-10">
              User Funnel
            </h1>
          </div>
          
          <div class="flex justify-center items-center lg:gap-0 sm:gap-0 gap-5 my-10">
            <div
              id="chevron"
              className="w-[100px] h-[100px] sm:h-[150px] sm:w-[150px] justify-center flex items-center"
            >
              <h1 className="relative z-[100] text-white text-[13px] lg:text-[20px] font-medium items-center">
                Top of the Funnel
              </h1>
            </div>
            <div className="sm:w-[60%] w-full grid gap-3 text-xs lg:text-sm -mt-[3.7rem] p-[2.1rem] xl:py-[2.1rem] lg:py-[14px] sm:py-[5px] sm:text-xs sm:border-l-0 sm:border-blue-600 sm:border-[2px]">
              <div className="lg:py-0 py-3">
                <ul className="list-disc">
                  <li>
                    Drive referrals & Social Shares from our customer portal
                  </li>
                  <li>
                    Reach out to wider but more precise target audiences with
                    our Audience Builder
                  </li>
                  <li>
                    Run smart repeat purchase campaigns using our Campaign
                    Create surveys to interact with a wider you target customer
                    group
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="flex justify-center items-center lg:gap-0 sm:gap-0 gap-5 my-10">
            <div
              id="chevron"
              className="w-[100px] h-[100px] sm:h-[150px] sm:w-[150px] justify-center flex items-center"
            >
              <h1 className="relative z-[100] text-white text-[13px] lg:text-[20px] font-medium items-center">
                Middle of the Funnel
              </h1>
            </div>
            <div className="sm:w-[60%] w-full grid gap-3 text-xs lg:text-sm -mt-[3.7rem] px-[2.1rem] xl:py-[2rem] lg:py-[12px] sm:py-[14px] sm:text-xs sm:border-l-0 sm:border-blue-600 sm:border-[2px]">
              <div className="py-3">
                <ul className="list-disc">
                  <li>
                    Help customers discover the right product and avoid funnel
                    drop with conversational BOT
                  </li>
                  <li>
                    Increase conversions with social proof using our review
                    widget
                  </li>
                  <li>
                    Nudge customers along the funnel with our next experience
                    campaign
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center lg:gap-0 sm:gap-0 gap-5 my-10">
            <div
              id="chevron"
              className="w-[100px] h-[100px] sm:h-[150px] sm:w-[150px] justify-center flex items-center"
            >
              <h1 className="relative z-[100] text-white text-[13px] lg:text-[20px] font-medium items-center">
                Bottom of the Funnel
              </h1>
            </div>
            <div className="sm:w-[60%] w-full grid gap-3 text-xs lg:text-sm -mt-[3.7rem] px-[2.1rem] xl:py-[2.6rem] lg:py-[1.4rem] sm:py-[1.8rem] sm:text-xs sm:border-l-0 sm:border-blue-600 sm:border-[2px]">
              <div className="py-3">
                <ul className="list-disc">
                  <li>
                    Reduce your Abandoned Cart and RTO's with our 2-way
                    conversational funnel campaigns
                  </li>
                  <li>
                    Handhold customers till order is delivered with our
                    conversational BOT
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center lg:gap-0 sm:gap-0 gap-5 my-10">
            <div
              id="chevron"
              className="w-[100px] h-[100px] sm:h-[150px] sm:w-[150px] flex justify-center items-center"
            >
              <h1 className="relative z-[100] text-white text-[13px] lg:text-[20px] font-medium items-center">
                Life Time
              </h1>
            </div>
            <div className="sm:w-[60%] w-full grid gap-3 text-xs lg:text-sm -mt-[3.7rem] px-[2.1rem] lg:px-[2.1rem] xl:py-[2.1rem] lg:py-[4px] sm:px-[1rem] md:py-[1.1rem] md:px-[30px] sm:text-xs sm:border-l-0 sm:border-blue-600 sm:border-[2px]">
              <div className="p-0">
                <ul className="list-disc">
                  <li>
                    Run multi-channel AI enabled drip campaigns to keep your
                    customers informed, engaged and excited.
                  </li>
                  <li>
                    Enable and Reward your customers to become your brand
                    ambassadors
                  </li>
                  <li>Drive repeat purchase behaviour with Loyalty Program</li>
                  <li>
                    Keep your customers happy with conversational customer
                    support with sentiment based agent handover
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </section>

      <section className="pb-20 px-10">
        <div className="lg:flex hidden justify-center gap-2">
            <div id="pointer1" className="z-[5] mb-5 pointer flex justify-center items-center"><span className="relative z-10 text-white">Better Reach</span></div>
            <div id="pointer" className="z-[4] mb-5 flex justify-end items-center"><span className="relative z-10 text-white">Increase conversions</span></div>
            <div id="pointer" className="z-[3] mb-5 flex justify-center items-center"><span className="relative z-10 text-white">Higher LTV</span></div>
            <div id="pointer" className="z-[2] mb-5 flex justify-center pl-8 items-center"><span className="relative z-10 text-white">Revenue Growth</span></div>
            <div id="pointer" className="z-[1] flex justify-end items-center"><span className="relative z-10 text-white">Increased Profitability</span></div>
        </div>
        <div className="lg:hidden grid justify-center gap-3">
            <div id="base" className="z-[5] mb-5 pointer flex justify-center items-center"><span className="relative z-10 text-[20px] font-medium text-white">Better Reach</span></div>
            <div id="chevron1" className="z-[4] mb-5 flex justify-center items-center"><span className="relative z-10 text-[20px] font-medium text-white">Increase conversions</span></div>
            <div id="chevron1" className="z-[3] mb-5 flex justify-center items-center"><span className="relative z-10 text-[20px] font-medium text-white">Higher LTV</span></div>
            <div id="chevron1" className="z-[2] mb-5 flex justify-center pl-8 items-center"><span className="relative z-10 text-[20px] font-medium text-white">Revenue Growth</span></div>
            <div id="chevron1" className="z-[1] flex justify-center items-center"><span className="relative z-10 text-[20px] font-medium text-white">Increased Profitability</span></div>
        </div>
      </section>
    </>
  );
}

export default Funnel;
