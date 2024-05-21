'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll } from "framer-motion";

function GenAIChat() {
  const listItems = [
    "Reduce drop-off across the funnel",
    "Personalized Recommendations",
    "Increase retention & higher LTV",
    "Omni-channel Marketing Automation",
    "Plug & play tech integration",
  ];

  const { scrollY } = useScroll();
  const threshold = 0.5;
  const animateOnScroll = scrollY >= threshold;
  const imgAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  const textAnimation = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  
  return (
    <>
      <section className="bg-[#fff] flex flex-wrap gap-2 md:gap-6 flex-col md:flex-row md:flex-nowrap justify-center font-generalsans h-fit w-full py-[2rem] md:pt-[6rem] md:pb-[2rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
          <motion.div 
          initial="hidden"
          whileInView="visible"
          animate={animateOnScroll ? "visible" : "hidden"}
          variants={imgAnimation}
          className="left flex justify-center md:justify-end w-full md:w-[45%]">
            <Image
              src="/hero2.png"
              width={597}
              height={596}
              className=""
            />
          </motion.div>
          <motion.div 
           initial="hidden"
           whileInView="visible"
           animate={animateOnScroll ? "visible" : "hidden"}
           variants={textAnimation}
          className="right w-full md:w-[45%]">
            <h4 className="text-[#222222]  text-[30px] md:text-[34px] lg:text-[42px] font-bold leading-[30px] md:leading-9 lg:leading-[50px]">
              Boost Conversions with GenAI-Powered Conversational Campaigns
            </h4>
            <ul className="text-[#787878] mt-2 md:mt-4 font-normal leading-normal md:leading-[25px]">
              {listItems.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-2 pt-1 md:pt-3 text-[14px] md:text-[16px] lg:text-[20px] hover:translate-x-2 duration-150"
                >
                  <Image
                    src="/arrowRight.svg"
                    alt=">"
                    height={5}
                    width={10}
                  />
                  {item}
                </li>
              ))}
            </ul>
 
            <div className="flex justify-center md:justify-start">
            <Link href="/signin">
              <button className="mt-5 md:mt-8 text-[#FFFFFF] text-[14px] md:text-[18px] font-medium leading-[21.6px] rounded bg-[#019ED1] hover:bg-opacity-80 transition-colors duration-200 w-[8rem] h-[2.5rem] md:w-[13.3rem] md:h-[3.4rem]">
                Get Started Now
              </button>
            </Link>
          </div>
          </motion.div>
        </section>
    </>
  )
}

export default GenAIChat

