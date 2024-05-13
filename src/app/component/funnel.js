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

        <div className="w-full flex flex-col justify-center items-center my-10 mt-[100px] mx-auto">
          <div className="w-full md:w-full lg:w-[950px] items-center space-y-10 sm:space-y-2 h-fit">
            {/* 1st */}
            <div className="flex w-full flex-wrap sm:flex-nowrap justify-center gap-12 sm:gap-0 h-fit">
              <div
                id="chevron"
                className="relative w-[140px] sm:w-[120px] h-[120px] sm:h-[160px] lg:w-[150px] lg:h-[150px] mb-[6px] p-3 z-10 text-center justify-center flex items-center"
              >
                <h1 className="font-Roboto relative z-[100] text-white text-[14px] md:text-[16px] lg:text-[18px] font-medium items-center">
                  Top of the Funnel
                </h1>
              </div>
              <div className="h-[160px] lg:h-[148px] -mt-[16px] lg:-mt-[23px] -ml-[1px] flex items-center w-full overflow-hidden border-2 border-[#2563eb] rounded-3xl sm:rounded-r-3x sm:rounded-l-none sm:border-l-0 px-4 lg:px-8 py-2 lg:py-3">
                <ul className="list-disc font-Mulish font-normal xl:font-medium text-gray-900 text-[12px] md:text-[14px] lg:text-[16px] px-3">
                  <li>
                    Drive referrals & Social Shares from our customer portal.
                  </li>
                  <li>
                    Reach out to wider but more precise target audiences with
                    our Audience Builder.
                  </li>
                  <li>
                    Run smart repeat purchase campaigns using our Campaign.
                  </li>
                  <li>
                    Create surveys to interact with a wider you target customer.
                    group
                  </li>
                </ul>
              </div>
            </div>
            {/* 2nd */}
            <div className="flex w-full h-fit flex-wrap sm:flex-nowrap justify-center gap-12 sm:gap-0">
              <div
                id="chevron"
                className="relative w-[140px] sm:w-[120px] h-[120px] sm:h-[160px] lg:w-[150px] lg:h-[150px] mb-[6px] p-3 z-10 text-center justify-center flex items-center"
              >
                <h1 className="font-Roboto relative z-[100] text-white text-[14px] md:text-[16px] lg:text-[18px] font-medium items-center">
                  Middle of the Funnel
                </h1>
              </div>
              <div className="h-[160px] lg:h-[148px] -mt-[16px] lg:-mt-[23px] -ml-[1px] flex items-center w-full overflow-hidden border-2 border-[#2563eb] rounded-3xl sm:rounded-r-3x sm:rounded-l-none sm:border-l-0 px-4 lg:px-8 py-2 lg:py-3">
                <ul className="list-disc font-Mulish font-normal xl:font-medium text-gray-900 text-[12px] md:text-[14px] lg:text-[16px] px-3">
                  <li>
                    Help customers discover the right product and avoid funnel
                    drop with conversational BOT.
                  </li>
                  <li>
                    Increase conversions with social proof using our review
                    widget.
                  </li>
                  <li>
                    Nudge customers along the funnel with our next experience
                    campaign.
                  </li>
                </ul>
              </div>
            </div>

            {/* 3rd */}
            <div className="flex w-full h-fit flex-wrap sm:flex-nowrap justify-center gap-12 sm:gap-0">
              <div
                id="chevron"
                className="relative w-[140px] sm:w-[120px] h-[120px] sm:h-[160px] lg:w-[150px] lg:h-[150px] mb-[6px] p-3 z-10 text-center justify-center flex items-center"
              >
                <h1 className="font-Roboto relative z-[100] text-white text-[14px] md:text-[16px] lg:text-[18px] font-medium items-center">
                  Bottom of the Funnel
                </h1>
              </div>
              <div className="h-[160px] lg:h-[148px] -mt-[16px] lg:-mt-[23px] -ml-[1px] flex items-center w-full overflow-hidden border-2 border-[#2563eb] rounded-3xl sm:rounded-r-3x sm:rounded-l-none sm:border-l-0 px-4 lg:px-8 py-2 lg:py-3">
                <ul className="list-disc font-Mulish font-normal xl:font-medium text-gray-900 text-[12px] md:text-[14px] lg:text-[16px] px-3">
                  <li>
                    Reduce your Abandoned Cart and RTO&apos;s with our 2-way
                    conversational funnel campaigns.
                  </li>
                  <li>
                    Handhold customers till order is deliverd with our
                    conversational BOT.
                  </li>
                </ul>
              </div>
            </div>

            {/* 4th */}
            <div className="flex w-full h-fit flex-wrap sm:flex-nowrap justify-center gap-12 sm:gap-0">
              <div
                id="chevron"
                className="relative w-[140px] sm:w-[120px] h-[120px] sm:h-[160px] lg:w-[150px] lg:h-[150px] mb-[6px] p-3 z-10 text-center justify-center flex items-center"
              >
                <h1 className="font-Roboto relative z-[100] text-white text-[14px] md:text-[16px] lg:text-[18px] font-medium items-center">
                  Life Time
                </h1>
              </div>
              <div className="h-[160px] lg:h-[148px] -mt-[16px] lg:-mt-[23px] -ml-[1px] flex items-center w-full overflow-hidden border-2 border-[#2563eb] rounded-3xl sm:rounded-r-3x sm:rounded-l-none sm:border-l-0 px-4 lg:px-8 py-2 lg:py-3">
                <ul className="list-disc font-Mulish font-normal xl:font-medium text-gray-900 text-[12px] md:text-[14px] lg:text-[16px] px-3">
                  <li>
                    Run multi-channel AI enabled drip campaigns to keep your
                    customers informed, engaged and excited.
                  </li>
                  <li>
                    Enable and Reward your customers to become your brand
                    ambassadors.
                  </li>
                  <li>
                    Keep your customers happy with conversational customer
                    support with sentiment based agent handover.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-10">
        <div className="lg:flex hidden justify-center gap-2">
          <div
            id="pointer1"
            className="z-[5] mb-5 pointer flex justify-center items-center"
          >
            <span className="relative z-10 text-white">Better Reach</span>
          </div>
          <div
            id="pointer"
            className="z-[4] mb-5 flex justify-end items-center"
          >
            <span className="relative z-10 text-white">
              Increase conversions
            </span>
          </div>
          <div
            id="pointer"
            className="z-[3] mb-5 flex justify-center items-center"
          >
            <span className="relative z-10 text-white">Higher LTV</span>
          </div>
          <div
            id="pointer"
            className="z-[2] mb-5 flex justify-center pl-8 items-center"
          >
            <span className="relative z-10 text-white">Revenue Growth</span>
          </div>
          <div id="pointer" className="z-[1] flex justify-end items-center">
            <span className="relative z-10 text-white">
              Increased Profitability
            </span>
          </div>
        </div>
        <div className="lg:hidden grid justify-center gap-3">
          <div
            id="base"
            className="z-[5] mb-5 pointer flex justify-center items-center"
          >
            <span className="relative z-10 text-[20px] font-medium text-white">
              Better Reach
            </span>
          </div>
          <div
            id="chevron1"
            className="z-[4] mb-5 flex justify-center items-center"
          >
            <span className="relative z-10 text-[20px] font-medium text-white">
              Increase conversions
            </span>
          </div>
          <div
            id="chevron1"
            className="z-[3] mb-5 flex justify-center items-center"
          >
            <span className="relative z-10 text-[20px] font-medium text-white">
              Higher LTV
            </span>
          </div>
          <div
            id="chevron1"
            className="z-[2] mb-5 flex justify-center pl-8 items-center"
          >
            <span className="relative z-10 text-[20px] font-medium text-white">
              Revenue Growth
            </span>
          </div>
          <div id="chevron1" className="z-[1] flex justify-center items-center">
            <span className="relative z-10 text-[20px] font-medium text-white">
              Increased Profitability
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Funnel;
