import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../Header";
import Footer from "../Footer";
import Reviews from "../Reviews";
import ScheduleDemo from "../ScheduleDemo";

function page() {
  return (
    <>
      <Header />
      <section className="flex justify-center bg-[#001632] pt-[6rem] pb-[6rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container">
          <div className="flex lg:flex-nowrap flex-wrap justify-center items-center gap-20">
            <div className="xl:w-[50%] w-full mt-6 flex flex-col flex-wrap">
              <span className="text-[#019ED1] text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[45px] md:leading-[66px]">
                Contact us
              </span>
              <h2 className="text-white text-2xl md:text-[35px] xl:text-[42px] font-bold leading-normal md:leading-[50px]">
                Don’t Hesitate to Contact with us for Any Kind of Information
              </h2>
              <ul className="text-[#F3F3F3] mt-2 md:mt-4 font-normal leading-normal md:leading-[25px]">
                <li className="flex items-baseline gap-2 pt-1 md:pt-3 text-[14px] md:text-[16px] lg:text-[20px]">
                  <Image src="/arrowRight.svg" alt=">" height={5} width={10} />
                  Reduce drop-off across the funnel
                </li>
                <li className="flex items-baseline gap-2 pt-1 md:pt-3 text-[14px] md:text-[16px] lg:text-[20px]">
                  <Image src="/arrowRight.svg" alt=">" height={5} width={10} />
                  Personalized Recommendations
                </li>
                <li className="flex items-baseline gap-2 pt-1 md:pt-3 text-[14px] md:text-[16px] lg:text-[20px]">
                  <Image src="/arrowRight.svg" alt=">" height={5} width={10} />
                  Increase retention & higher LTV
                </li>
                <li className="flex items-baseline gap-2 pt-1 md:pt-3 text-[14px] md:text-[16px] lg:text-[20px]">
                  <Image src="/arrowRight.svg" alt=">" height={5} width={10} />
                  Omni-channel Marketing Automation
                </li>
                <li className="flex items-baseline gap-2 pt-1 md:pt-3 text-[14px] md:text-[16px] lg:text-[20px]">
                  <Image src="/arrowRight.svg" alt=">" height={5} width={10} />
                  Plug & play tech integration
                </li>
              </ul>
              <span className="text-white text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-[27px] mt-14 mb-3">
                Let’s Talk
              </span>
              <div className="flex flex-wrap xl:flex-nowrap gap-3 xl:gap-10">
                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 27 27"
                    fill="none"
                  >
                    <path
                      d="M25.9992 19.7173V23.4808C26.0006 23.8302 25.9289 24.176 25.7887 24.4961C25.6484 24.8163 25.4428 25.1036 25.1848 25.3398C24.9268 25.576 24.6223 25.7558 24.2907 25.8678C23.959 25.9797 23.6076 26.0213 23.259 25.9898C19.391 25.5704 15.6755 24.2513 12.4111 22.1385C9.37402 20.2124 6.79908 17.6426 4.86917 14.6115C2.74483 11.3387 1.4228 7.6126 1.0102 3.73494C0.978791 3.38803 1.0201 3.03839 1.1315 2.70828C1.2429 2.37818 1.42196 2.07484 1.65726 1.81758C1.89256 1.56032 2.17896 1.35478 2.49822 1.21404C2.81748 1.0733 3.1626 1.00045 3.51162 1.00012H7.2826C7.89262 0.99413 8.48402 1.20972 8.94656 1.60671C9.40909 2.00371 9.71121 2.55501 9.79658 3.15787C9.95575 4.36227 10.2509 5.54484 10.6765 6.68302C10.8456 7.13204 10.8822 7.62003 10.7819 8.08917C10.6817 8.55831 10.4488 8.98893 10.1108 9.33002L8.51445 10.9232C10.3039 14.0639 12.9095 16.6644 16.0564 18.4503L17.6528 16.857C17.9946 16.5197 18.426 16.2873 18.8961 16.1872C19.3662 16.0872 19.8551 16.1237 20.305 16.2925C21.4455 16.7172 22.6304 17.0118 23.8372 17.1707C24.4478 17.2566 25.0054 17.5636 25.4041 18.0331C25.8027 18.5027 26.0145 19.1021 25.9992 19.7173Z"
                      stroke="#019ED1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="text-white text-[16px] md:text-[20px] xl:text-[26px] font-medium leading-normal xl:leading-[50px]">
                    801. 899-1234
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="20"
                    viewBox="0 0 34 27"
                    fill="none"
                  >
                    <path
                      d="M4.125 1H29.125C30.8438 1 32.25 2.40625 32.25 4.125V22.875C32.25 24.5938 30.8438 26 29.125 26H4.125C2.40625 26 1 24.5938 1 22.875V4.125C1 2.40625 2.40625 1 4.125 1Z"
                      stroke="#019ED1"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M32.25 4.125L16.625 15.0625L1 4.125"
                      stroke="#019ED1"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="text-white text-[16px] md:text-[20px] xl:text-[26px] font-medium leading-normal xl:leading-[50px]">
                    801. 899-1234
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-white text-[18px] font-normal leading-[27px] mt-10">
                  Follow us on
                </span>
                <Image src="/followus.png" width={185} height={25} />
              </div>
            </div>
            <div className="xl:w-[50%] w-full bg-white rounded-md flex flex-col items-center justify-center flex-wrap p-5 lg:p-8">
              <h2 className="text-[#222222] text-[18px] md:text-[24px] lg:text-[38px] font-medium md:font-bold leading-[30px] md:leading-[55px] text-center">
                Send us a Messages
              </h2>
              <p className="text-[#787878] text-xs md:text-base lg:text-[18px] font-normal leading-[25px] text-center">
                Send your query & we will get in touch shortly!
              </p>
              <form>
                <div className="flex w-full flex-wrap justify-center md:justify-normal">
                  <div className="w-full flex flex-col">
                    <label className="text-sm md:text-[16px] lg:text-[18px] font-medium leading-[40px] md:leading-[55px] text-[#222222] text-left">
                      Full Name{" "}
                      <span className="text-[#F93232]">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your First Name"
                      className="border border-[#D4D4D4] text-[#767676] placeholder:text-sm placeholder:text-[#767676] lg:px-3 p-1 lg:py-3 rounded"
                    />
                  </div>
                  <div className="flex w-full flex-wrap md:flex-nowrap gap-3">
                    <div className="w-full md:w-[50%] flex flex-col flex-wrap">
                      <label className="text-sm md:text-[16px] lg:text-[18px] font-medium leading-[40px] md:leading-[55px] text-[#222222] text-left">
                        Email{" "}
                        <span className="text-[#F93232]">
                          *
                        </span>
                      </label>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="border border-[#D4D4D4] text-[#767676] placeholder:text-sm placeholder:text-[#767676] lg:px-3 p-1 lg:py-3 rounded"
                      />
                    </div>
                    <div className="w-full md:w-[50%] flex flex-col flex-wrap">
                      <label className="text-sm md:text-[16px] lg:text-[18px] font-medium leading-[40px] md:leading-[55px] text-[#222222] text-left">
                        Phone Number{" "}
                        <span className="text-[#F93232]">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="+91 - "
                        className="border border-[#D4D4D4] text-[#767676] placeholder:text-sm placeholder:text-[#767676] lg:px-3 p-1 lg:py-3 rounded"
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-col">
                    <label className="text-sm md:text-[16px] lg:text-[18px] font-medium leading-[40px] md:leading-[55px] text-[#222222] text-left">
                      Where did you Hear About us?
                    </label>
                    <select className="border border-[#D4D4D4] text-[#767676] text-sm lg:px-3 p-1 lg:py-[13px] rounded">
                      <option>Please Select an Option</option>
                    </select>
                  </div>
                  <div className="w-full flex flex-col">
                    <label className="text-sm md:text-[16px] lg:text-[18px] font-medium leading-[40px] md:leading-[55px] text-[#222222] text-left">
                      Message{" "}
                      <span className="text-[#F93232]">
                        *
                      </span>
                    </label>
                    <textarea
                      type="text"
                      placeholder="Enter Your Message"
                      rows={3}
                      className="border border-[#D4D4D4] text-[#767676] placeholder:text-sm placeholder:text-[#767676] lg:px-3 p-1 lg:py-3 rounded"
                    />
                  </div>
                  <button className="bg-[#019ED1] text-white text-sm md:text-[16px] lg:text-[18px] leading-[21.6px] font-medium w-[100px] h-[45px] sm:h-[55px] sm:w-[200px] rounded-md mt-6">
                   Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Reviews />
      <ScheduleDemo />
      <Footer />
    </>
  );
}

export default page;
