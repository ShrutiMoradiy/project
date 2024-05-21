"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll, AnimatePresence } from "framer-motion";

function TechEffect() {
  const [showForm, setShowForm] = useState(false);
  const showform = () => setShowForm(!showForm);

  const { scrollY } = useScroll();
  const threshold = 0.5;
  const animateOnScroll = scrollY >= threshold;
  const effectAnimation = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <section className="bg-[#E6F5FA] pt-[6rem] pb-[6rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container flex justify-center flex-wrap">
          <div className="w-full lg:w-[40%] flex justify-center flex-col items-center">
            <Image
              src="/TechEffectImg.svg"
              alt="IMG"
              width={509}
              height={605}
            />
          </div>
          <div className="w-full lg:w-[60%] flex flex-col">
            <h1 className="text-[#222222] text-xl md:text-[30px] lg:text-[42px] font-bold leading-[30px] md:leading-[40px] lg:leading-[55px] mb-2">
              The Techmonk Effect
            </h1>
            <p className="text-[#787878] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal mb-5">
              Growth in Revenue, Increase in Profits
            </p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              animate={animateOnScroll ? "visible" : "hidden"}
              variants={effectAnimation}
              className="flex flex-wrap sm:flex-nowrap gap-4 mb-6"
            >
              <div className="w-full sm:w-1/2">
                <div className="flex">
                  <Image src="/Polygon.svg" alt="IMG" width={8} height={8} />
                  <h1 className="text-[#222222] text-sm md:text-[18px] lg:text-[20px] font-bold m-2">
                    The Techmonk Effect
                  </h1>
                </div>
                <p className="text-[#787878] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal">
                  Reduce funnel drop-offs with conversational campaigns,
                  personalized experiences, and social proof
                </p>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="flex">
                  <Image src="/Polygon.svg" alt="IMG" width={8} height={8} />
                  <h1 className="text-[#222222] text-sm md:text-[18px] lg:text-[20px] font-bold m-2">
                    Higher LTV
                  </h1>
                </div>
                <p className="text-[#787878] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal">
                  Grow repeat orders through loyalty programs, personalized
                  experiences, and engaging drip campaigns
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              animate={animateOnScroll ? "visible" : "hidden"}
              variants={effectAnimation}
              className="flex flex-wrap sm:flex-nowrap gap-4 mb-6"
            >
              <div className="w-full sm:w-1/2">
                <div className="flex">
                  <Image src="/Polygon.svg" alt="IMG" width={8} height={8} />
                  <h1 className="text-[#222222] text-sm md:text-[18px] lg:text-[20px] font-bold m-2">
                    Better Reach
                  </h1>
                </div>
                <p className="text-[#787878] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal">
                  Increase customer reach through referrals and ability to build
                  sharper audiences with existing customer data
                </p>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="flex">
                  <Image src="/Polygon.svg" alt="IMG" width={8} height={8} />
                  <h1 className="text-[#222222] text-sm md:text-[18px] lg:text-[20px] font-bold m-2">
                    Happier Customers
                  </h1>
                </div>
                <p className="text-[#787878] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal">
                  With personalized experiences and Gen-AI powered customer
                  support
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              animate={animateOnScroll ? "visible" : "hidden"}
              variants={effectAnimation}
              className="flex flex-wrap sm:flex-nowrap gap-4 mb-6"
            >
              <div className="w-full sm:w-1/2">
                <div className="flex">
                  <Image src="/Polygon.svg" alt="IMG" width={8} height={8} />
                  <h1 className="text-[#222222] text-sm md:text-[18px] lg:text-[20px] font-bold m-2">
                    Improved Efficiency
                  </h1>
                </div>
                <p className="text-[#787878] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal">
                  With streamlined campaign management and real-time tracking of
                  KPIs
                </p>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="flex">
                  <Image src="/Polygon.svg" alt="IMG" width={8} height={8} />
                  <h1 className="text-[#222222] text-sm md:text-[18px] lg:text-[20px] font-bold m-2">
                    Brand Virality
                  </h1>
                </div>
                <p className="text-[#787878] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal">
                  Increase in brand virality with social shares, referrals, and
                  multimedia reviews.
                </p>
              </div>
            </motion.div>

            <button
              onClick={showform}
              className="bg-[#019ED1] text-white text-sm md:text-[16px] lg:text-[18px] leading-[21.6px] font-medium w-[150px] md:w-[180px] lg:w-[213px] h-[45px] md:h-[55px] border border-[#019ED1] rounded-md my-3"
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showForm && (
          <>
           <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 0.5 }}
           exit={{ opacity: 0 }}
           onClick={showform}
           className="fixed inset-0 bg-[#001632] z-40"
         />
          <motion.section
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }} 
            className="fixed inset-0 z-50 flex justify-center items-center"
          >
            <div className="w-[320px] mr-20 sm:w-[40%] bg-[#E6F5FA] bg-[url('/Group.png')] bg-left-top bg-no-repeat shadow-[0_0_1rem_0_rgba(20_22_50)] rounded-md p-5">
              <span className="flex justify-end" onClick={showform}>
                <Image src='/cancel.svg' width={20} height={20} />
              </span>
              <form>
                <div className="flex flex-wrap justify-center">
                  <h1 className="text-[#001632] text-base md:text-xl lg:text-2xl font-bold mb-5">Fill this form for schedule a demo</h1>
                  <div className="w-full xl:w-1/2 flex flex-col flex-wrap">
                    <label className="text-[16px] font-semibold text-[#222222] text-left m-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your First Name"
                      className="border border-[dee2e6] text-[#787878] placeholder:text-sm placeholder:text-[#787878] lg:px-3 p-1 lg:py-2 m-1 rounded"
                    />
                  </div>
                  <div className="w-full xl:w-1/2 flex flex-col flex-wrap">
                    <label className="text-[16px] font-semibold text-[#222222] text-left m-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Last Name"
                      className="border border-[dee2e6] text-[#787878] placeholder:text-sm placeholder:text-[#787878] lg:px-3 p-1 lg:py-2 m-1 rounded"
                    />
                  </div>
                  <div className="w-full flex flex-col flex-wrap">
                    <label className="text-[16px] font-semibold text-[#222222] text-left m-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="border border-[dee2e6] text-[#787878] placeholder:text-sm placeholder:text-[#787878] lg:px-3 p-1 lg:py-2 m-1 rounded"
                    />
                  </div>

                  <div className="">
                    <button className="bg-[#019ED1] text-white text-sm md:text-[16px] lg:text-[18px] leading-[21.6px] font-medium w-[100px] h-[45px] rounded-md my-3 transition-colors duration-200 hover:bg-[#001632]">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.section>
          </>
        )
        
        }
      </AnimatePresence>
    </>
  );
}

export default TechEffect;
