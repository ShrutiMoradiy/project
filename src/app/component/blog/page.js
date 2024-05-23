import React from "react";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";

function page() {
  return (
    <div>
      <Header />
      <section className="flex justify-center bg-[#E6F5FA] pt-[6rem] pb-[6rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container">
          <div className="flex items-start mb-10">
            <h1 className="text-[#222222] text-2xl md:text-[35px] lg:text-[45px] font-bold md:leading-[55px]">
              Blog
            </h1>
          </div>
          <div className="flex justify-center flex-wrap md:flex-nowrap gap-20">
            <div className="w-full lg:w-[50%] flex justify-center flex-col items-center">
              <Image src="/marketimg.png" alt="IMG" width={650} height={605} />
            </div>
            <div className="w-full lg:w-[50%] flex flex-col">
              <h1 className="text-[#222222] text-xl md:text-[30px] lg:text-[42px] font-bold leading-[30px] md:leading-[40px] lg:leading-[55px] mb-2">
                Should Companies Pay High Dividends?
              </h1>
              <p className="text-[#787878] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal mb-5">
                Everyone loves a dividend. Getting paid simply by owning shares
                in a company feels good. But is it ultimately the best outcome
                for you or the company to do so?
              </p>
              <div className="flex flex-wrap sm:flex-nowrap gap-4 mb-6">
                <Image src="/Ellipse.png" alt="Img" width={50} height={50} />
                <div>
                  <h3 className="text-[#222222] text-sm md:text-[16px] lg:text-[18px] leading-[22px] font-bold">
                    Marvin McKinney
                  </h3>
                  <p className="text-[#464646] text-xs md:text-[13px] leading-[17px] font-normal">
                    April 29, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-[#222222] text-2xl md:text-[35px] lg:text-[45px] font-bold md:leading-[55px] text-left mt-10">
            Most Read Articles
          </h1>
          <div className="flex flex-wrap sm:flex-nowrap sm:gap-5 md:gap-10">
            <div className="border-t-2 border-[#222] w-full sm:w-1/2 xl:w-[25%] mt-10 pt-6">
              <span className="text-[#515050] text-sm md:text-[16px] leading-[25px] font-normal">
                May 3, 2024
              </span>
              <h3 className="text-[#222222] text-sm md:text-[18px] lg:text-[22px] font-bold leading-[30px] mt-4">
                Is the Kernel KiwiSaver Plan Right for You?
              </h3>
            </div>
            <div className="border-t-2 border-[#222] w-full sm:w-1/2 xl:w-[25%] mt-10 pt-6">
              <span className="text-[#515050] text-sm md:text-[16px] leading-[25px] font-normal">
                May 3, 2024
              </span>
              <h3 className="text-[#222222] text-sm md:text-[18px] lg:text-[22px] font-bold leading-[30px] mt-4">
                Is the Kernel KiwiSaver Plan Right for You?
              </h3>
            </div>
            <div className="border-t-2 border-[#222] w-full sm:w-1/2 xl:w-[25%] mt-10 pt-6">
              <span className="text-[#515050] text-sm md:text-[16px] leading-[25px] font-normal">
                May 3, 2024
              </span>
              <h3 className="text-[#222222] text-sm md:text-[18px] lg:text-[22px] font-bold leading-[30px] mt-4">
                Is the Kernel KiwiSaver Plan Right for You?
              </h3>
            </div>
            <div className="border-t-2 border-[#222] w-full sm:w-1/2 xl:w-[25%] mt-10 pt-6">
              <span className="text-[#515050] text-sm md:text-[16px] leading-[25px] font-normal">
                May 3, 2024
              </span>
              <h3 className="text-[#222222] text-sm md:text-[18px] lg:text-[22px] font-bold leading-[30px] mt-4">
                Is the Kernel KiwiSaver Plan Right for You?
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center pt-[6rem] pb-[6rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container">
          <div className="flex items-start mb-10">
            <h1 className="text-[#222222] text-2xl md:text-[35px] lg:text-[45px] font-bold md:leading-[55px]">
              Browse by topic
            </h1>
          </div>
          <div className="flex justify-center flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-[40%] flex flex-col justify-center items-center">
              <div className="flex w-full">
                <h3 className="text-[#222222] border border-[#222] rounded-tl-md  w-full sm:w-1/2 p-4 sm:p-8 text-sm md:text-[18px] lg:text-[22px] font-bold leading-[30px]">
                  Investing
                </h3>
                <h3 className="text-[#222222] border border-l-0 border-[#222] rounded-tr-md lg:rounded-none w-full sm:w-1/2 p-4 sm:p-8 text-sm md:text-[18px] lg:text-[22px] font-bold leading-[30px]">
                  Investing
                </h3>
              </div>
              <div className="flex w-full">
                <h3 className="text-[#222222] border border-t-0 border-[#222] w-full sm:w-1/2 p-4 sm:p-8 text-sm md:text-[18px] lg:text-[22px] font-bold leading-[30px]">
                  Investing
                </h3>
                <h3 className="text-[#222222] border border-l-0 border-t-0 border-[#222] w-full sm:w-1/2 p-4 sm:p-8 text-sm md:text-[18px] lg:text-[22px] font-bold leading-[30px]">
                  Investing
                </h3>
              </div>
              <div className="flex w-full">
                <h3 className="text-[#222222] border border-t-0 border-[#222] lg:rounded-bl-md rounded-none  w-full sm:w-1/2 p-4 sm:p-8 text-sm md:text-[18px] lg:text-[22px] font-bold leading-[30px]">
                  Investing
                </h3>
                <h3 className="text-[#222222] border border-l-0 border-t-0 border-[#222] w-full sm:w-1/2 p-4 sm:p-8 text-sm md:text-[18px] lg:text-[22px] font-bold leading-[30px]">
                  Investing
                </h3>
              </div>
            </div>
            <div className="w-full lg:w-[60%] flex flex-col border border-[#222] border-t-0 lg:border lg:border-l-0 rounded-b-md lg:rounded-bl-none lg:rounded-tr-md sm:py-8 py-4 sm:px-12 px-4">
              <h1 className="text-[#222222] text-xl md:text-[30px] lg:text-[25px] font-bold leading-[30px] md:leading-[40px] lg:leading-[55px] mb-2">
                Keep up to date with Kernel
              </h1>
              <p className="text-[#787878] text-xs md:text-[15px] lg:text-[17px] leading-[25px] font-normal mb-5">
                For market updates and the latest news from Kernel, subscribe to
                our newsletter. Guaranteed goodness, straight to your inbox.
              </p>
              <div className="flex gap-4 w-[80%] border-b border-[#222] mt-5">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="sm:w-full w-[160px] text-[#606060] p-2 focus:outline-none"
                />
                <Image src="/arrow-right.svg" width={30} height={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center pb-[6rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container">
          <div className="flex flex-col items-start mb-10">
            <h1 className="text-[#222222] text-2xl md:text-[35px] lg:text-[45px] font-bold md:leading-[55px]">
              Budgeting Basics
            </h1>
            <p className="text-[#787878] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal my-3">
              Learn the fundamentals of budgeting, saving and planning towards
              your financial goals.
            </p>
          </div>
          <div className="flex justify-center flex-wrap md:flex-nowrap gap-20">
            <div className="w-full lg:w-1/3 flex flex-col border rounded-2xl">
              <Image
                src="/blogImg.png"
                alt="IMG"
                width={400}
                height={200}
                className="rounded-t-2xl"
              />
              <div className="p-5">
                <h1 className="text-[#222222] text-xl md:text-[30px] lg:text-[24px] font-bold leading-[35px] mb-2">
                  Should Companies Pay High Dividends?
                </h1>
                <p className="text-[#787878] text-sm md:text-[16px] lg:text-[18px] leading-[25px] font-normal mb-5">
                  Everyone loves a dividend. Getting paid simply by owning
                  shares in a company feels good. But is it ultimately the best
                  outcome for you or the company to do so?
                </p>
                <div className="flex flex-wrap sm:flex-nowrap gap-4">
                  <Image src="/Ellipse.png" alt="Img" width={50} height={50} />
                  <div className="flex flex-col">
                    <h3 className="text-[#222222] text-sm md:text-[16px] lg:text-[18px] leading-[22px] font-bold">
                      Marvin McKinney
                    </h3>
                    <p className="text-[#464646] text-xs md:text-[13px] leading-[17px] font-normal">
                      April 29, 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col border rounded-2xl">
              <Image
                src="/blogImg.png"
                alt="IMG"
                width={400}
                height={200}
                className="rounded-t-2xl"
              />
              <div className="p-5">
                <h1 className="text-[#222222] text-xl md:text-[30px] lg:text-[24px] font-bold leading-[35px] mb-2">
                  Should Companies Pay High Dividends?
                </h1>
                <p className="text-[#787878] text-sm md:text-[16px] lg:text-[18px] leading-[25px] font-normal mb-5">
                  Everyone loves a dividend. Getting paid simply by owning
                  shares in a company feels good. But is it ultimately the best
                  outcome for you or the company to do so?
                </p>
                <div className="flex flex-wrap sm:flex-nowrap gap-4">
                  <Image src="/Ellipse.png" alt="Img" width={50} height={50} />
                  <div className="flex flex-col">
                    <h3 className="text-[#222222] text-sm md:text-[16px] lg:text-[18px] leading-[22px] font-bold">
                      Marvin McKinney
                    </h3>
                    <p className="text-[#464646] text-xs md:text-[13px] leading-[17px] font-normal">
                      April 29, 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col border rounded-2xl">
              <Image
                src="/blogImg.png"
                alt="IMG"
                width={400}
                height={200}
                className="rounded-t-2xl"
              />
              <div className="p-5">
                <h1 className="text-[#222222] text-xl md:text-[30px] lg:text-[24px] font-bold leading-[35px] mb-2">
                  Should Companies Pay High Dividends?
                </h1>
                <p className="text-[#787878] text-sm md:text-[16px] lg:text-[18px] leading-[25px] font-normal mb-5">
                  Everyone loves a dividend. Getting paid simply by owning
                  shares in a company feels good. But is it ultimately the best
                  outcome for you or the company to do so?
                </p>
                <div className="flex flex-wrap sm:flex-nowrap gap-4">
                  <Image src="/Ellipse.png" alt="Img" width={50} height={50} />
                  <div className="flex flex-col">
                    <h3 className="text-[#222222] text-sm md:text-[16px] lg:text-[18px] leading-[22px] font-bold">
                      Marvin McKinney
                    </h3>
                    <p className="text-[#464646] text-xs md:text-[13px] leading-[17px] font-normal">
                      April 29, 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="bg-[#019ED1] text-white text-sm md:text-[16px] lg:text-[18px] leading-[21.6px] font-medium w-[150px] h-[55px] md:w-[200px] rounded-md mt-6">
            View all articles
          </button>
        </div>
      </section>

      <section className="flex justify-center pb-[6rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-[#222222] text-2xl md:text-[35px] lg:text-[45px] font-bold md:leading-[55px] text-center">
            Time to give your money a new home?
          </h1>
          <p className="text-[#787878] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal my-3">
            Open a Kernel account in minutes.
          </p>
          <button className="bg-[#019ED1] text-white text-sm md:text-[16px] lg:text-[18px] leading-[21.6px] font-medium w-[100px] h-[55px] md:w-[200px] rounded-md mt-6">
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default page;
