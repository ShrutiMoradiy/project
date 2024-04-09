import React from "react";
import Image from "next/image";
import arrowup from "/public/arrow-up.svg";
import Users from "/public/users.svg";
import Customer from "/public/CustomerSupport.png";
import dimond from "/public/dimond.svg";
import reviews from "/public/reviews.svg";
import survey from "/public/survey.svg";
import referral from "/public/referral.svg";

function CustomerSupport() {
  return (
    <>
      <section className="bg-[#f7f7f9] w-full">
        <div className="container py-20">
          <h1 className="text-[1.78125rem] text-[#343a40] font-medium text-center mt-2">
            We build our platform with
          </h1>
          <h1 className="text-[1.78125rem] text-[#343a40] font-medium text-center mb-2">
            customer satisfaction at core
          </h1>
          <p className="text-[#8a90a2!important] text-center">
            you can get started in less than 5 minutes
          </p>
          <div className="flex justify-center">
            <button class="mt-3 font-medium text-white bg-[#05f] border-1 border-[#05f] py-2 px-4 w-[130px] hover:border-1 hover:border-[#05f] hover:shadow-[0_8px_20px_-6px_rgba(0,85,255,.6)] rounded">
              Try Now
            </button>
          </div>

          <div className="flex flex-wrap justify-center mt-20">
            <div className="flex flex-col items-center justify-center">
              <span className="bg-[#0055ff26] text-center p-2 rounded w-[48px]">
                <Image src={arrowup} width={40} height={40} />
              </span>
              <h1 className="text-[1.78125rem] text-[#343a40] my-3 text-center font-medium mb-2">
                Tier
              </h1>
              <p className="w-[284px] text-center mt-1">
                A tiered membership system enhancing customer loyalty by
                offering exclusive benefits and privileges
              </p>
            </div>
          </div>

          <div className="flex flex-wrap flex-grow justify-center mt-10">
            <div className="lg:w-1/3 md:w-1/2 w-full flex flex-col items-center justify-center">
              <span className="bg-[#0055ff26] text-center p-2 rounded w-[48px]">
                <Image src={dimond} width={40} height={40} />
              </span>
              <h1 className="text-[1.78125rem] text-[#343a40] my-3 text-center font-medium mb-2">
                Loyalty
              </h1>
              <p className="w-[284px] text-center mt-1">
                Incentivize customer actions with redeemable rewards to
                encourage frequent engagement and purchases
              </p>
            </div>
            <div className="hidden xl:flex items-center justify-center">
              {/* <div className="bg-[#0055ff1f] flex justify-center items-center p-3 rounded-full w-[60px] h-[60px]">
              </div> */}
                <Image src={Customer} width={350} height={350}></Image>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full flex flex-col items-center justify-center">
              <span className="bg-[#0055ff26] md:mt-0 mt-10 text-center p-2 rounded w-[48px]">
                <Image src={referral} width={40} height={40} />
              </span>
              <h1 className="text-[1.78125rem] text-[#343a40] my-3 text-center font-medium mb-2">
              Referrals
              </h1>
              <p className="w-[284px] text-center mt-1">
              Empowering your customers to become brand advocates, driving organic growth through trusted word-of-mouth marketing
              </p>
            </div>
          </div>

          <div className="flex flex-wrap flex-grow items-center justify-center xl:mx-20 mx-0 mt-10">
            <div className="lg:w-1/3 md:w-1/2 w-full flex flex-col items-center justify-center">
              <span className="bg-[#0055ff26] text-center p-2 rounded w-[48px]">
                <Image src={reviews} width={40} height={40} />

              </span>
              <h1 className="text-[1.78125rem] text-[#343a40] my-3 text-center font-medium mb-2">
              Reviews
              </h1>
              <p className="w-[284px] text-center mt-1">
              Boosting trust and conversion rates by showcasing authentic customer reviews, complete with photos and videos
              </p>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full flex flex-col items-center justify-center">
              <span className="bg-[#0055ff26] md:mt-0 mt-10 text-center p-2 rounded w-[48px]">
                <Image src={survey} width={40} height={40} />
              </span>
              <h1 className="text-[1.78125rem] text-[#343a40] my-3 text-center font-medium mb-2">
              Surveys
              </h1>
              <p className="w-[284px] text-center mt-1">
              Gaining actionable insights directly from your customers through interactive and user-friendly surveys
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomerSupport;
