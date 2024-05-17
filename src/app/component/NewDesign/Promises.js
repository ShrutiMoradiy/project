import React from "react";
import Image from "next/image";
import Easy from "../../../../public/easy.svg";
import Best from "../../../../public/best.svg";
import ValueforMoney from "../../../../public/money.svg";
import Polygon from "../../../../public/Polygon.svg";

function Promises() {
  return (
    <>
     <section className="flex justify-center bg-[#001632] mt-16 pt-[6rem] pb-[6rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container">
          <div className="flex flex-col justify-center items-center mb-12">
            <h1 className="text-white text-3xl md:text-[42px] font-bold md:leading-[55px] text-center">
            Our Promises
            </h1>
            <p className="text-[#B2B9C1] text-sm md:text-xl leading-[25px] font-normal mt-5 text-center">
            Typesetting Industry Dummy Text professor at Hampden-Sydney College
            </p>
          </div>
          <div className="flex justify-center flex-wrap gap-4">
            <div className="bg-[#0D2237] border-[#ffffff19] border rounded-md w-full lg:w-1/4 md:w-1/2 h-[455px] p-5">
              <div className="flex justify-between items-center">
                <h3 className="text-white text-xl md:text-[25px] leading-[30px] font-bold">
                Easy
                </h3>
                  <Image src={Easy} alt="Easy" width={70} height={70} />
              </div>
              <ul className="text-[#B2B9C1] list-disc ml-5 text-sm md:text-[18px] leading-[23.4px] font-normal mt-5">
                <li className="my-4">Hassle Free and Fast GTM</li>
                <li className="my-4">Easily Plugs into your Existing Stack with Ready to use 3rd Party Integrations</li>
                <li className="my-4">Connect your Entire Data (Structured / Unstructured)</li>
                <li className="my-4">Multichannel Support Web, WhatsApp, SMS, Mobile Apps and Social Media</li>
                <li className="my-4">White Glove Customer Support</li>
              </ul>
            </div>
            <div className="bg-[#0D2237] border border-[#ffffff19] rounded-md w-full lg:w-1/4 md:w-1/2 h-[455px] p-5">
              <div className="flex justify-between items-center">
                <h3 className="text-white text-xl md:text-[25px] leading-[30px] font-bold">
                Best
                </h3>
                  <Image src={Best} alt="Best" width={70} height={70} />
              </div>
              <ul className="text-[#B2B9C1] list-disc ml-5 text-sm md:text-[18px] leading-[23.4px] font-normal mt-5">
                <li className="my-4">Full Stack Customer Engagement with Best in Class Features</li>
                <li className="my-4">Truly Conversational AI Agentic Workflows Built on a Multi-Agent Framework Leveraging an Ensemble of Fine tune Madels</li>
                <li className="my-4">Enterprise-Grade Security Protocols</li>
                <li className="my-4">Scalability Built to Handel Millions of Customers</li>
              </ul>
            </div>

            <div className="bg-[#0D2237] border border-[#ffffff19] rounded-md w-full lg:w-1/4 md:w-1/2 h-[455px] p-5">
              <div className="flex justify-between items-center">
                <h3 className="text-white text-xl md:text-[25px] leading-[30px] font-bold">
                Value for Money
                </h3>
                  <Image src={ValueforMoney} alt="Value for Money" width={70} height={70} />
              </div>
              <ul className="text-[#B2B9C1] list-disc ml-5 text-sm md:text-[18px] leading-[23.4px] font-normal mt-5">
                <li className="my-4">Least Total Cost of Ownership</li>
                <li className="my-4">Immediate Growth in Revenue</li>
                <li className="my-4">Immediate Growth in Profits</li>
              </ul>
            </div>
          </div>
        </div>
      </section> 
    </>
  )
}

export default Promises
