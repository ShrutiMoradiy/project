import React from "react";

function Brands() {
  return (
    <>
      <section className="flex justify-center pt-[6rem] pb-[6rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container">
          <div className="flex justify-center flex-col items-center mb-20">
          <h1 className="text-[#222222] text-2xl md:text-[35px] lg:text-[42px] font-bold md:leading-[55px] text-center">
              Choose a Package to your Needs
            </h1>
            <p className="text-[#787878] text-sm md:text-xl leading-[25px] font-normal mt-5 text-center mb-5">
              No installation, Set up or hidden fees. Everything is included in
              the price.
            </p>
            <div className="bg-[#E6F5FA] relative items-center grid text-end text-[#787878] sm:text-[18px] text-sm leading-[21.6px] font-medium sm:w-[335px] w-[235px] h-[55px] px-4 rounded-md">
              <div className="bg-white absolute text-center items-center grid text-[#019ED1] sm:text-[18px] text-sm leading-[21.6px] font-bold sm:w-[176px] w-[120px] h-[46px] mx-1 rounded-md">
                Monthly Billing
              </div>
              Yearly Billing
            </div>
          </div>
          <div className="flex justify-center flex-wrap gap-4"> 
            <div className="border-2 border-[#D2D5DD] w-full xl:w-[289px] lg:w-[40%] sm:w-[280px] h-[455px] p-5">
              <div className="flex justify-center flex-col items-center">
                <h4 className="text-[#222222] text-xl leading-[30px] font-bold mb-4">
                  Silver
                </h4>
                <h3 className="text-[#222222] text-xl md:text-[32px] leading-[28px] font-[750] mb-1">
                  ₹25,000
                </h3>
                <p className="text-[#787878] text-[15px] leading-[28px] font-normal">
                  billed monthly
                </p>
                <button className="text-[#019ED1] text-[18px] leading-[21.6px] font-medium w-[200px] sm:w-[248px] h-[55px] border border-[#019ED1] rounded-md my-4">
                  Choose Plan
                </button>
              </div>
              <ul className="text-[#787878] border-t-2 list-disc text-sm md:text-[18px] leading-[23.4px] font-normal mt-5">
                <li className="m-3">
                  <span className="text-[#222222] font-medium">3,000</span>
                  Turns Included
                </li>
                <li className="m-3">
                  <span className="text-[#222222] font-medium">1,500</span> Cost
                  per Additional 1000 Turns
                </li>
                <li className="m-3">
                  <span className="text-[#222222] font-medium">2,000</span> of
                  Orders / Monthly
                </li>
                <li className="m-3">
                  <span className="text-[#222222] font-medium">50,000</span>
                  Total Customers
                </li>
              </ul>
            </div>

            <div className="border-2 border-[#D2D5DD] w-full xl:w-[289px] lg:w-[40%] sm:w-[280px] h-[455px] p-5 mb-10">
              <div className="flex justify-center flex-col items-center">
                <h4 className="text-[#222222] text-xl leading-[30px] font-bold mb-4">
                  Gold
                </h4>
                <h3 className="text-[#222222] text-xl md:text-[32px] leading-[28px] font-[750] mb-1">
                  ₹40,000
                </h3>
                <p className="text-[#787878] text-[15px] leading-[28px] font-normal">
                  billed monthly
                </p>
                <button className="text-[#019ED1] text-[18px] leading-[21.6px] font-medium w-[200px] sm:w-[248px] h-[55px] border border-[#019ED1] rounded-md my-4">
                  Choose Plan
                </button>
              </div>
              <ul className="text-[#787878] border-t-2 list-disc text-sm md:text-[18px] leading-[23.4px] font-normal mt-5">
                <li className="m-3">
                  <span className="text-[#222222] font-medium">6,000</span>
                  Turns Included
                </li>
                <li className="m-3">
                  <span className="text-[#222222] font-medium">1,250</span> Cost
                  per Additional 1000 Turns
                </li>
                <li className="m-3">
                  <span className="text-[#222222] font-medium">5,000</span> of
                  Orders / Monthly
                </li>
                <li className="m-3">
                  <span className="text-[#222222] font-medium">2,00,000</span>
                  Total Customers
                </li>
              </ul>
            </div>

            <div className="border-2 border-[#019ED1] w-full xl:w-[289px] lg:w-[40%] sm:w-[280px] h-[455px] px-5 relative">
              <span className="bg-[#E6F5FA] border-2 border-b-0 border-[#019ED1] w-full -mt-[33px] -ml-[20px] text-[#019ED1] absolute text-[18px] text-center font-medium leading-[30px]">
                Most Popular
              </span>
              <div className="flex justify-center flex-col items-center">
                <h4 className="text-[#222222] text-xl leading-[30px] font-bold my-4">
                  Platinum
                </h4>
                <h3 className="text-[#222222] text-xl md:text-[32px] leading-[28px] font-[750] mb-1">
                  ₹75,000
                </h3>
                <p className="text-[#787878] text-[15px] leading-[28px] font-normal">
                  billed monthly
                </p>
                <button className="text-[#019ED1] text-[18px] leading-[21.6px] font-medium w-[200px] sm:w-[248px] h-[55px] border border-[#019ED1] rounded-md my-4">
                  Choose Plan
                </button>
              </div>
              <ul className="text-[#787878] border-t-2 list-disc text-sm md:text-[18px] leading-[23.4px] font-normal mt-5">
                <li className="m-3">
                  <span className="text-[#222222] font-medium">30,000</span>
                  Turns Included
                </li>
                <li className="m-3">
                  <span className="text-[#222222] font-medium">1,000</span> Cost
                  per Additional 1000 Turns
                </li>
                <li className="m-3">
                  <span className="text-[#222222] font-medium">15,000</span> of
                  Orders / Monthly
                </li>
                <li className="m-3">
                  <span className="text-[#222222] font-medium">5,00,000</span>
                  Total Customers
                </li>
              </ul>
            </div>

            <div className="border-2 border-[#D2D5DD] w-full xl:w-[289px] lg:w-[40%] sm:w-[280px] h-[455px] p-5">
              <div className="flex justify-center flex-col items-center">
                <h4 className="text-[#222222] text-xl leading-[30px] font-bold mb-4">
                  Enterprise
                </h4>
                <h3 className="text-[#222222] text-xl md:text-[32px] leading-[28px] font-[750] mb-1">
                  ₹1,30,000
                </h3>
                <p className="text-[#787878] text-[15px] leading-[28px] font-normal">
                  billed monthly
                </p>
                <button className="text-[#019ED1] text-[18px] leading-[21.6px] font-medium w-[200px] sm:w-[248px] h-[55px] border border-[#019ED1] rounded-md my-3">
                  Choose Plan
                </button>
              </div>
              <ul className="text-[#787878] border-t-2 list-disc text-sm md:text-[18px] leading-[23.4px] font-normal mt-5">
                <li className="m-3">
                  <span className="text-[#222222] font-medium">75,000</span>
                  Turns Included
                </li>
                <li className="m-3">
                  <span className="text-[#222222] font-medium">750</span> Cost
                  per Additional 1000 Turns
                </li>
                <li className="m-3">
                  <span className="text-[#222222] font-medium">50,000</span> of
                  Orders / Monthly
                </li>
                <li className="m-3">
                  <span className="text-[#222222] font-medium">10,00,000</span>
                  Total Customers
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center mt-10">
          <button className="bg-[#019ED1] text-white text-sm md:text-[16px] lg:text-[18px] leading-[21.6px] font-medium w-[150px] md:w-[180px] lg:w-[213px] h-[45px] md:h-[55px] border border-[#019ED1] rounded-md my-3">
              Check all Packages
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Brands;
