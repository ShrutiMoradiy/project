import React from "react";
import Image from "next/image";
import Ellipse from "../../../../public/Ellipse.png";
import Best from "../../../../public/best.svg";
import ValueforMoney from "../../../../public/money.svg";

function Brands() {
  return (
    <>
     <section className="flex justify-center bg-[#E6F5FA] pt-[6rem] pb-[2rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container">
          <div className="flex justify-center items-center mb-12">
            <h1 className="text-[#222222] text-3xl md:text-[42px] font-bold md:leading-[55px] text-center">
            Why do Brands Love Us?
            </h1>
          </div>
          <div className="flex justify-center flex-wrap gap-4">
            <div className="w-full lg:w-1/4 md:w-1/2">
                <p className="text-[#787878] text-[18px] leading-[26.1px] font-normal opacity-[90%] bg-white border rounded-md p-5 w-[286px] h-[235px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using lorem Ipsum is that it has a more-or-less.</p>
              <div className="flex justify-between items-center">
                <Image src={Ellipse} alt="Img" />
              </div>
              
            </div>
            <div className="bg-[#0D2237] border border-[#ffffff19] rounded-md w-full lg:w-1/4 md:w-1/2 h-[455px] p-5">
              <div className="flex justify-between items-center">
                <h3 className="text-white text-xl md:text-[25px] leading-[30px] font-bold">
                Best
                </h3>
                  <Image src={Best} alt="Best" width={50} height={50} />
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
                  <Image src={ValueforMoney} alt="Value for Money" width={50} height={50} />
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

export default Brands
