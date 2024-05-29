"use client";
import React from "react";
import Header from "../../Header";
import Footer from "../Footer";
import Image from "next/image";
import ScheduleDemo from "../ScheduleDemo";
import { motion, useScroll } from "framer-motion";

function page() {
  const keyFeatures = [
    {
      src: "/attract-icon.svg",
      alt: "Attract",
      title: "Attract",
      description: "Drive Traffic",
    },
    {
      src: "/interaction-icon.svg",
      alt: "Interact",
      title: "Interact",
      description: "Engage with the audience and nudge them along the funnel.",
    },
    {
      src: "/convert-icon.svg",
      alt: "Convert",
      title: "Convert",
      description: "Get consumers to purchase",
    },
    {
      src: "/retain-icon.svg",
      alt: "Retain",
      title: "Retain",
      description: "Reward, retain & generate advocacy",
    },
  ];

  const topOfFunnelData = [
    {
      src: "/referrals-icon.svg",
      alt: "Referrals",
      title: "Referrals",
      description: "Referred customers have a 59% higher lifetime value",
    },
    {
      src: "/personalized-icon.svg",
      alt: "Personalized",
      title: "Personalized",
      description:
        "76% customers are more likely to consider purchasing from brands that personalize",
    },
    {
      src: "/solar-share.svg",
      alt: "Social Share",
      title: "Social Share",
      description:
        "90% of people are likely to trust and buy products recommended by friends",
    },
    {
      src: "/better-reach.svg",
      alt: "Better Reach",
      title: "Better Reach",
      description:
        "Leverage existing customer data and create fine-tuned audiences for better reach and profitable campaign outcomes",
    },
  ];

  const middleOfFunnelData = [
    {
      src: "/gen-ai.svg",
      alt: "Gen-AI Discovery",
      title: "Gen-AI Discovery",
      description:
        "67% of customers trust recommendations through conversational AI-bot interactions",
    },
    {
      src: "/reviews-icon.svg",
      alt: "Reviews",
      title: "Reviews",
      description:
        "70% of customers refer to online reviews before finalizing their purchase decisions",
    },
    {
      src: "/gen-ai-chatbot.svg",
      alt: "Gen-AI Chatbot",
      title: "Gen-AI Chatbot",
      description:
        "74% consumers choose a chatbot over a human agent to look for answers to simple questions",
    },
    {
      src: "/drop-Off-campaigns.svg",
      alt: "Drop-Off Campaigns",
      title: "Drop-Off Campaigns",
      description:
        "Run personalized drop off campaigns to increase conversions",
    },
  ];

  const bottomOfFunnelData = [
    {
      src: "/cart-icon.svg",
      alt: "Abandoned Cart",
      title: "Abandoned Cart",
      description:
        "50% increase in conversions with automated & personalized Abandoned Cart Campaigns",
    },
    {
      src: "/rto-icon.svg",
      alt: "RTO",
      title: "RTO",
      description:
        "Prevent return-to-origin (RTO) issues with proactive campaigns",
    },
    {
      src: "/interactive-campaigns.svg",
      alt: "Interactive Campaigns",
      title: "Interactive Campaigns",
      description:
        "Forget one-way communication and engage your customers with Gen-AI powered conversational campaigns",
    },
    {
      src: "/coupons.svg",
      alt: "Coupons",
      title: "Coupons",
      description:
        "Configure discounts that can be embedded with Funnel Drop-off Campaigns to incentivize conversions",
    },
  ];

  const loyaltyLTVData = [
    {
      src: "/drip-campaign.svg",
      alt: "Drip Campaign",
      title: "Drip Campaign",
      description:
        "Personalize Conversational Drip Campaigns across multiple channels",
    },
    {
      src: "/ai-powered-support.svg",
      alt: "Gen-AI Powered Support",
      title: "Gen-AI Powered Support",
      description:
        "81% of customers prefer using a self-service option before contacting a customer service rep.",
    },
    {
      src: "/loyalty-program.svg",
      alt: "Loyalty Program",
      title: "Loyalty Program",
      description:
        "84% of consumers say they’re more likely to stick with a brand that offers a loyalty program.",
    },
    {
      src: "/customer-data.svg",
      alt: "Customer Data",
      title: "Customer Data",
      description:
        "Single customer profile with all customer events at one place with ability to slice and dice using Audience Builder",
    },
  ];

  const customerEngSuite = [
    {
      title: "Full Stack",
      desc: "Full stack consumer engagement platform seamless, personalized interactions across channels",
    },
    {
      title: "Personalised",
      desc: "Personalization transforms interactions, tailoring experiences to each individual's preferences",
    },
    {
      title: "Gen AI",
      desc: "Multi channel communication capabilities - Web, WhatsApp, SMS, Mobile App & Social Media",
    },
    {
      title: "Omni-Channel",
      desc: "Plug & play ready to use 3rd party integrations. ensures smooth operation and a unified user experience",
    },
    {
      title: "Seamless",
      desc: "Cost-effectiveness maximizes the value of consumer engagement, optimizing resources to deliver impactful results",
    },
    {
      title: "Cost Effective",
      desc: "Scalable solutions effortlessly handle millions of users, ensuring seamless performance even under high demand",
    },
    {
      title: "Scalable",
      desc: "Enterprise-grade security protocols safeguard sensitive data, mitigating risks and instilling trust in the platform",
    },
    {
      title: "Highly Secure",
      desc: "Harnesses the power of GenAI to make every customer interaction conversational and personal",
    },
  ];

  const { scrollY } = useScroll();
  const threshold = 0.5;
  const animateOnScroll = scrollY >= threshold;
  const cardAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

 const variantcontainer = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };
  const variantcard = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <Header />
      <section className="font-helvetica bg-[#001632] flex justify-center pt-[4rem] pb-[4rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="flex flex-col items-center lg:w-[80%]">
          <h1 className="text-white text-2xl md:text-[35px] lg:text-[42px] font-bold leading-normal md:leading-[30px] lg:leading-[50px] text-center">
            Solving for Consumer Engagement across all stages of the Sales &
            Marketing Funnel
          </h1>
          <button className="bg-[#019ED1] text-white text-sm md:text-[16px] lg:text-[18px] leading-[21.6px] font-medium w-[150px] h-[45px] md:h-[55px] md:w-[200px] rounded-md mt-7">
            Schedule a Demo
          </button>
        </div>
      </section>

      <section className="font-helvetica flex justify-center pt-[4rem] pb-[6rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container">
          <div className="flex flex-col justify-center items-center mb-12">
            <h1 className="text-[#222222] text-2xl md:text-[35px] lg:text-[42px] font-bold md:leading-[55px] text-center">
              Discover the key features
            </h1>
          </div>
          <motion.div variants={variantcontainer}
            initial="hidden"
            whileInView="visible"
            animate={animateOnScroll ? "visible" : "hidden"} className="flex justify-center flex-wrap lg:flex-nowrap gap-4">
            {keyFeatures.map((item, index) => (
              <motion.div
                key={index}
                variants={variantcard}
                className="flex flex-col justify-between gap-5 hover:bg-[#E6F5FA] border border-[#D9D9D9] rounded-lg w-full lg:w-1/4 sm:w-[40%] p-5"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#18191F] text-xl md:text-[24px] leading-[32px] font-bold">
                    {item.title}
                  </h3>
                  <p className="text-[#18191F] text-sm md:text-[20px] leading-normal font-medium">
                    {item.description}
                  </p>
                </div>
                <Image src={item.src} alt={item.alt} width={40} height={40} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="font-helvetica flex justify-center bg-[#E6F5FA] pt-[6rem] pb-[6rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-10">
            <h1 className="text-[#222222] text-[25px] md:text-[30px] lg:text-[42px] font-bold leading-[30px] md:leading-[40px] lg:leading-[55px] mb-2">
              Top of funnel
            </h1>
            <p className="text-[#787878] text-sm md:text-[16px] lg:w-[40%] lg:text-xl opacity-90 leading-normal md:leading-[25px] font-normal mb-5">
              Convert your loyal customers to brand evangelists & get new
              consumers
            </p>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-10">
            <div className="w-full lg:w-[40%] flex justify-center flex-col items-center">
              <Image src="/to-funnel.png" alt="IMG" width={509} height={605} />
            </div>
            <div className="w-full lg:w-[60%] flex flex-wrap sm:flex-nowrap gap-8">
              <div className="flex flex-col sm:w-1/2 gap-8">
                {topOfFunnelData.slice(0, 2).map((item, index) => (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    animate={animateOnScroll ? "visible" : "hidden"}
                    variants={cardAnimation}
                    key={index}
                    className="relative z-10"
                  >
                    <div className="flex flex-col justify-between gap-7 bg-white border border-[#D9D9D9] rounded-lg w-full p-6">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={50}
                        height={50}
                      />
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#18191F] text-xl md:text-[24px] lg:text-[28px] leading-[32px] font-bold">
                          {item.title}
                        </h3>
                        <p className="text-[#787878] text-sm md:text-[16px] lg:text-[18px] leading-normal md:leading-[28px] font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    {item.title === "Personalized" && (
                      <div className="sm:absolute sm:z-[-1] sm:-right-[15%] sm:-bottom-[45%] hidden sm:block">
                        <Image
                          src="/polygon11.svg"
                          alt="Background Decoration"
                          width={159}
                          height={175}
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:w-1/2 gap-8 sm:mt-14 z-10">
                {topOfFunnelData.slice(2).map((item, index) => (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    animate={animateOnScroll ? "visible" : "hidden"}
                    variants={cardAnimation}
                    key={index}
                    className="flex flex-col justify-between gap-7 bg-white border border-[#D9D9D9] rounded-lg w-full p-6"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={50}
                      height={50}
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[#18191F] text-xl md:text-[24px] lg:text-[28px] leading-[32px] font-bold">
                        {item.title}
                      </h3>
                      <p className="text-[#787878] text-sm md:text-[16px] lg:text-[18px] leading-normal md:leading-[28px] font-normal">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="font-helvetica flex justify-center pt-[6rem] pb-[6rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-10">
            <h1 className="text-[#222222] text-[25px] md:text-[30px] lg:text-[42px] font-bold leading-[30px] md:leading-[40px] lg:leading-[55px] mb-2">
              Middle of funnel
            </h1>
            <p className="text-[#787878] text-sm md:text-[16px] lg:w-[45%] lg:text-xl opacity-90 leading-normal md:leading-[25px] font-normal mb-5">
              Credibility and conversational product recommendations with GenAI
              Chatbot
            </p>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-10">
            <div className="w-full lg:w-[30%] flex flex-wrap sm:flex-nowrap gap-8">
              <div className="flex flex-col gap-8">
                {middleOfFunnelData.slice(0, 2).map((item, index) => (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    animate={animateOnScroll ? "visible" : "hidden"}
                    variants={cardAnimation}
                    key={index}
                    className="relative z-10"
                  >
                    <div className="flex flex-col justify-between gap-7 bg-white border border-[#D9D9D9] rounded-lg w-full p-6">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={50}
                        height={50}
                      />
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#18191F] text-xl md:text-[24px] lg:text-[28px] leading-[32px] font-bold">
                          {item.title}
                        </h3>
                        <p className="text-[#787878] text-sm md:text-[16px] lg:text-[18px] leading-normal md:leading-[28px] font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    {item.title === "Gen-AI Discovery" && (
                      <div className="lg:absolute lg:z-[-1] lg:-left-[25%] lg:-top-[35%] hidden lg:block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="159"
                          height="175"
                          viewBox="0 0 159 175"
                          fill="none"
                        >
                          <path
                            d="M0.662624 55.0487L0.662618 122.12C0.662617 129.896 4.9475 137.039 11.8079 140.7L69.9161 171.709C76.1127 175.015 83.5499 175.015 89.7465 171.709L147.855 140.7C154.715 137.039 159 129.896 159 122.12L159 88.8349L159 55.0488C159 47.5395 155.002 40.5983 148.506 36.8308L90.3977 3.1282C83.8632 -0.661765 75.7994 -0.661766 69.2649 3.12821L40.247 19.9585L11.1567 36.8308C4.66096 40.5983 0.662624 47.5395 0.662624 55.0487Z"
                            fill="#DEF7FF"
                          />
                        </svg>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[40%] flex justify-center flex-col items-center">
              <Image
                src="/middle-funnel.png"
                alt="IMG"
                width={541}
                height={702}
              />
            </div>
            <div className="w-full lg:w-[30%] flex flex-wrap sm:flex-nowrap gap-8">
              <div className="flex flex-col gap-8">
                {middleOfFunnelData.slice(2).map((item, index) => (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    animate={animateOnScroll ? "visible" : "hidden"}
                    variants={cardAnimation}
                    key={index}
                    className="relative z-10"
                  >
                    <div className="flex flex-col justify-between gap-7 bg-white border border-[#D9D9D9] rounded-lg w-full p-6">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={50}
                        height={50}
                      />
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#18191F] text-xl md:text-[24px] lg:text-[28px] leading-[32px] font-bold">
                          {item.title}
                        </h3>
                        <p className="text-[#787878] text-sm md:text-[16px] lg:text-[18px] leading-normal md:leading-[28px] font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    {item.title === "Drop-Off Campaigns" && (
                      <div className="lg:absolute lg:z-[-1] lg:-right-[13%] lg:-bottom-[35%] hidden lg:block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="159"
                          height="175"
                          viewBox="0 0 159 175"
                          fill="none"
                        >
                          <path
                            d="M0.662624 55.0487L0.662618 122.12C0.662617 129.896 4.9475 137.039 11.8079 140.7L69.9161 171.709C76.1127 175.015 83.5499 175.015 89.7465 171.709L147.855 140.7C154.715 137.039 159 129.896 159 122.12L159 88.8349L159 55.0488C159 47.5395 155.002 40.5983 148.506 36.8308L90.3977 3.1282C83.8632 -0.661765 75.7994 -0.661766 69.2649 3.12821L40.247 19.9585L11.1567 36.8308C4.66096 40.5983 0.662624 47.5395 0.662624 55.0487Z"
                            fill="#DEF7FF"
                          />
                        </svg>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="font-helvetica flex justify-center bg-[#E6F5FA] pt-[6rem] pb-[6rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-10">
            <h1 className="text-[#222222] text-[25px] md:text-[30px] lg:text-[42px] font-bold leading-[30px] md:leading-[40px] lg:leading-[55px] mb-2">
              Bottom of funnel
            </h1>
            <p className="text-[#787878] text-sm md:text-[16px] lg:w-[60%] lg:text-xl opacity-90 leading-normal md:leading-[25px] font-normal mb-5">
              Close sales with an interactive GenAI Powered bot that can
              intelligently read consumer data & is objectives-driven
            </p>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-10">
            <div className="w-full lg:w-[60%] flex flex-wrap sm:flex-nowrap gap-8">
              <div className="flex flex-col sm:w-1/2 gap-8">
                {bottomOfFunnelData.slice(0, 2).map((item, index) => (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    animate={animateOnScroll ? "visible" : "hidden"}
                    variants={cardAnimation}
                    key={index}
                    className="relative z-10"
                  >
                    <div className="flex flex-col justify-between gap-7 bg-white border border-[#D9D9D9] rounded-lg w-full p-6">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={50}
                        height={50}
                      />
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#18191F] text-xl md:text-[24px] lg:text-[28px] leading-[32px] font-bold">
                          {item.title}
                        </h3>
                        <p className="text-[#787878] text-sm md:text-[16px] lg:text-[18px] leading-normal md:leading-[28px] font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    {item.title === "RTO" && (
                      <div className="sm:absolute sm:z-[-1] sm:-right-[15%] sm:-bottom-[45%] hidden sm:block">
                        <Image
                          src="/polygon11.svg"
                          alt="Background Decoration"
                          width={159}
                          height={175}
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:w-1/2 gap-8 sm:mt-14 z-10">
                {bottomOfFunnelData.slice(2).map((item, index) => (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    animate={animateOnScroll ? "visible" : "hidden"}
                    variants={cardAnimation}
                    key={index}
                    className="flex flex-col justify-between gap-7 bg-white border border-[#D9D9D9] rounded-lg w-full p-6"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={50}
                      height={50}
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[#18191F] text-xl md:text-[24px] lg:text-[28px] leading-[32px] font-bold">
                        {item.title}
                      </h3>
                      <p className="text-[#787878] text-sm md:text-[16px] lg:text-[18px] leading-normal md:leading-[28px] font-normal">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[40%] flex justify-center flex-col items-center">
              <Image
                src="/bottom-funnel.png"
                alt="IMG"
                width={509}
                height={605}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="font-helvetica flex justify-center pt-[6rem] pb-[8rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-10">
            <h1 className="text-[#222222] text-[25px] md:text-[30px] lg:text-[42px] font-bold leading-[30px] md:leading-[40px] lg:leading-[55px] mb-2">
              Loyalty & LTV
            </h1>
            <p className="text-[#787878] text-sm md:text-[16px] lg:text-xl opacity-90 leading-normal md:leading-[25px] font-normal mb-5">
              Unified view of consumer activity
            </p>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-10">
            <div className="w-full lg:w-[40%] flex justify-center flex-col items-center">
              <Image
                src="/loyalty-ltv.png"
                alt="IMG"
                width={709}
                height={705}
              />
            </div>
            <div className="w-full lg:w-[60%] flex flex-wrap sm:flex-nowrap gap-8">
              <div className="flex flex-col sm:w-1/2 gap-8">
                {loyaltyLTVData.slice(0, 2).map((item, index) => (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    animate={animateOnScroll ? "visible" : "hidden"}
                    variants={cardAnimation}
                    key={index}
                    className="relative z-10"
                  >
                    <div className="flex flex-col justify-between gap-7 bg-white border border-[#D9D9D9] rounded-lg w-full p-6">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={50}
                        height={50}
                      />
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#18191F] text-xl md:text-[24px] lg:text-[28px] leading-[32px] font-bold">
                          {item.title}
                        </h3>
                        <p className="text-[#787878] text-sm md:text-[16px] lg:text-[18px] leading-normal md:leading-[28px] font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    {item.title === "Gen-AI Powered Support" && (
                      <div className="sm:absolute sm:z-[-1] sm:-right-[30%] sm:-bottom-[40%] hidden sm:block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="159"
                          height="175"
                          viewBox="0 0 159 175"
                          fill="none"
                        >
                          <path
                            d="M0.662624 55.049L0.662618 122.12C0.662617 129.896 4.9475 137.039 11.8079 140.7L69.9161 171.709C76.1127 175.016 83.5499 175.016 89.7465 171.709L147.855 140.7C154.715 137.039 159 129.896 159 122.12L159 88.8352L159 55.049C159 47.5397 155.002 40.5985 148.506 36.831L90.3977 3.12844C83.8632 -0.661521 75.7994 -0.661522 69.2649 3.12846L40.247 19.9588L11.1567 36.831C4.66096 40.5985 0.662624 47.5397 0.662624 55.049Z"
                            fill="#DEF7FF"
                          />
                        </svg>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:w-1/2 gap-8 sm:mt-14 z-10">
                {loyaltyLTVData.slice(2).map((item, index) => (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    animate={animateOnScroll ? "visible" : "hidden"}
                    variants={cardAnimation}
                    key={index}
                    className="flex flex-col justify-between gap-7 bg-white border border-[#D9D9D9] rounded-lg w-full p-6"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={50}
                      height={50}
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[#18191F] text-xl md:text-[24px] lg:text-[28px] leading-[32px] font-bold">
                        {item.title}
                      </h3>
                      <p className="text-[#787878] text-sm md:text-[16px] lg:text-[18px] leading-normal md:leading-[28px] font-normal">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="font-helvetica flex justify-center bg-[#001632] pt-[6rem] pb-[6rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container">
          <div className="flex flex-col justify-center items-center text-center mb-10">
            <h1 className="text-white text-2xl md:text-[35px] lg:text-[42px]  lg:w-[80%] font-bold md:leading-[55px]">
              3X your Marketing Potential with Comprehensive Customer Engagement
              Suite
            </h1>
            <p className="text-white text-sm md:text-[16px] lg:text-xl opacity-70 leading-normal md:leading-[25px] font-normal my-3">
              You need more than a traditional engagement platform. You need an
              end-to-end partner to lead in your consumer journey
            </p>
          </div>
          <motion.div  variants={variantcontainer}
            initial="hidden"
            whileInView="visible"
            animate={animateOnScroll ? "visible" : "hidden"} className="flex justify-center flex-wrap gap-4">
            {customerEngSuite.map((item, index) => (
              <motion.div key={index} variants={variantcard} className="flex flex-col gap-5 bg-white rounded-lg w-full lg:w-[24%] sm:w-[40%] p-5 pt-0">
                <div className="bg-[#019ED1] flex rounded-t-lg -mx-5 py-1 lg:py-2 px-5">
                  <h3 className="text-white text-[18px] md:text-[24px] lg:text-[28px] leading-normal font-bold">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[#18191F] text-sm md:text-[20px] leading-normal font-normal">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ScheduleDemo />
      <Footer />
    </>
  );
}

export default page;
