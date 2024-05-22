"use client";
import React from "react";
// import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useScroll } from "framer-motion";

const OmniChannel = () => {
  const { scrollY } = useScroll();
  const threshold = 0.5;
  const animateOnScroll = scrollY >= threshold;
  const cardAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const imgAnimation = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const EmailerCard = (
    <motion.div
      id="emailer"
      className="relative w-full md:w-[38rem] lg:min-w-[32rem] lg:max-w-[40rem] lg:w-[100%] p-4 lg:px-10 lg:py-8 bg-[#E6F5FA] border border-[#D9D9D9] rounded"
      initial="hidden"
      whileInView="visible"
      animate={animateOnScroll ? "visible" : "hidden"}
      variants={cardAnimation}
    >
      <img
        src="/websitesvgs/marketing/emailer.svg"
        alt=""
        className="absolute h-[100px] w-[70px] lg:h-[123px] lg:w-[107px] right-[26px] top-[-36px]"
      />
      <p className="text-[#019ED1] text-[16px] md:text-[18px] lg:text-[22px] font-medium leading-[25px] md:leading-[40px] lg:leading-[60px]">
        Day 1
      </p>

      <h6 className="pt-0 text-[#222222] text-[20px] md:text-[22px] lg:text-[25px] font-semibold md:font-bold leading-[25px] md:leading-[40px] lg:leading-[60px]">
        Abandoned Cart Emailer
      </h6>
      <p className="text-[#222222] text-[12px] md:text-[14px] lg:text-[18px] font-medium leading-5 lg:leading-[23.4px]">
        Subject:{" "}
        <span className="text-[#787878]">
          Exclusive 20% Off – Time&apos;s Ticking!
        </span>
      </p>

      <div className="mt-4 text-[#787878] text-[12px] md:text-[14px] lg:text-[18px] font-medium leading-5 lg:leading-[23.4px]">
        <p className="pt-1">Hey Rajesh,</p>
        <p className="pt-2 md:pt-4">
          Heard from your speakers lately? 🎶 They&apos;re missing you and your
          music! Don&apos;t let them sit in the cart feeling abandoned.
        </p>
        <p className="pt-2 md:pt-4">
          Grab an exclusive 20% discount and bring your tunes to life with
          Timbresonic speakers. Click below to give them a new home:
        </p>

        <p className="text-[#019ED1] pt-4">[Link to Cart]</p>

        <p className="py-4">
          <span>[Your Name]</span> <br />
          <span>Timbresonic Squad</span>
        </p>
      </div>
    </motion.div>
  );

  const WhatsappCard = (
    <motion.div
      className="flex items-center flex-col lg:items-start"
      initial="hidden"
      whileInView="visible"
      animate={animateOnScroll ? "visible" : "hidden"}
      variants={cardAnimation}
    >
      <img src="/Chain.png" alt="chain" className="lg:hidden" />

      <div
        id="whatsapp"
        className="relative w-full md:w-[38rem] lg:min-w-[32rem] lg:max-w-[40rem] lg:w-[100%] p-4 lg:px-10 lg:py-8 bg-[#E6F5FA] border border-[#D9D9D9] rounded"
      >
        <img
          src="/websitesvgs/marketing/whatsApp.svg"
          alt=""
          className="absolute h-[100px] w-[70px] lg:h-[123px] lg:w-[107px] right-[26px] top-[-36px]"
        />
        <p className="text-[#019ED1] text-[16px] md:text-[18px] lg:text-[22px] font-medium leading-[25px] md:leading-[40px] lg:leading-[60px]">
          Day 3
        </p>

        <h6 className="pt-0 text-[#222222] text-[20px] md:text-[22px] lg:text-[25px] font-semibold md:font-bold leading-[25px] md:leading-[40px] lg:leading-[60px]">
          WhatsApp Message
        </h6>

        <div className="mt-4 text-[#787878] text-[12px] md:text-[14px] lg:text-[18px] font-medium leading-5 lg:leading-[23.4px]">
          <p className="pt-0">
            Hey Rajesh! Just wanted to remind you about our exclusive 20%
            discount on Timbresonic speakers.
          </p>
          <p className="pt-2 md:pt-3">
            Your cart is eagerly waiting for you! 🎵 Don&apos;t miss out – click
            here to complete your purchase:
          </p>

          <p className="text-[#019ED1] pt-4">
            [Link to Cart]{" "}
            <span className="text-[#787878]">Need help? Let us know! 😊</span>
          </p>
        </div>
      </div>
    </motion.div>
  );

  const WebNotificationCard = (
    <motion.div
      className="flex items-center flex-col"
      initial="hidden"
      whileInView="visible"
      animate={animateOnScroll ? "visible" : "hidden"}
      variants={cardAnimation}
    >
      <img src="/Chain.png" alt="chain" className="lg:hidden" />
      <div
        id="web-notification"
        className="relative lg:top-[-13rem] w-full md:w-[38rem] lg:min-w-[32rem] lg:max-w-[40rem] lg:w-[100%] p-4 lg:px-10 lg:py-8 bg-[#E6F5FA] border border-[#D9D9D9] rounded"
      >
        <img
          src="/websitesvgs/marketing/notification.svg"
          alt=""
          className="absolute h-[100px] w-[70px] lg:h-[123px] lg:w-[107px] right-[26px] top-[-36px]"
        />
        <p className="text-[#019ED1] text-[16px] md:text-[18px] lg:text-[22px] font-medium leading-[25px] md:leading-[40px] lg:leading-[60px]">
          Day 4
        </p>

        <h6 className="pt-0 text-[#222222] text-[20px] md:text-[22px] lg:text-[25px] font-semibold md:font-bold leading-[25px] md:leading-[40px] lg:leading-[60px]">
          Web Notification
        </h6>
        <p className="text-[#222222] text-[12px] md:text-[14px] lg:text-[18px] font-medium leading-5 lg:leading-[23.4px]">
          Title:{" "}
          <span className="text-[#787878]">
            {'"20% Off Timbresonic Speakers! 🎵"'}
          </span>
        </p>

        <p className="pt-3 text-[#222222] text-[12px] md:text-[14px] lg:text-[18px] font-medium leading-5 lg:leading-[23.4px]">
          Message:{" "}
          <span className="text-[#787878]">
            Your speakers are waiting! Get an exclusive 20%
          </span>
        </p>

        <p className="text-[#787878] text-[12px] md:text-[14px] lg:text-[18px] font-medium leading-5 lg:leading-[23.4px]">
          discount now:{" "}
          <span className="text-[#019ED1] cursor-pointer">
            [https://timbresonic.com]
          </span>
        </p>

        <p className="pt-2 text-[#787878] text-[12px] md:text-[14px] lg:text-[18px] font-medium leading-5 lg:leading-[23.4px]">
          Need help? Let us know! 🎶
        </p>
      </div>
    </motion.div>
  );

  const SmsCard = (
    <motion.div
      className="flex items-center flex-col lg:items-start"
      initial="hidden"
      whileInView="visible"
      animate={animateOnScroll ? "visible" : "hidden"}
      variants={cardAnimation}
    >
      <img src="/Chain.png" alt="chain" className="lg:hidden" />

      <div
        id="sms"
        className="relative w-full md:w-[38rem] lg:min-w-[32rem] lg:max-w-[40rem] lg:w-[100%] p-4 lg:px-10 lg:py-8 bg-[#E6F5FA] border border-[#D9D9D9] rounded"
      >
        <img
          src="/websitesvgs/marketing/sms.svg"
          alt=""
          className="absolute h-[100px] w-[70px] lg:h-[123px] lg:w-[107px] right-[26px] top-[-36px]"
        />
        <p className="text-[#019ED1] text-[16px] md:text-[18px] lg:text-[22px] font-medium leading-[25px] md:leading-[40px] lg:leading-[60px]">
          Day 7
        </p>

        <h6 className="pt-0 text-[#222222] text-[20px] md:text-[22px] lg:text-[25px] font-semibold md:font-bold leading-[25px] md:leading-[40px] lg:leading-[60px]">
          SMS
        </h6>

        <div className="mt-4 text-[#787878] text-[12px] md:text-[14px] lg:text-[18px] font-medium leading-5 lg:leading-[23.4px]">
          <p className="pt-0">
            Hey Rajesh! Just a friendly reminder: your Timbresonic speakers are
            still waiting for you! Don&apos;t miss out on your exclusive 20%
            discount - click here to complete your purchase:
          </p>
          <p className="pt-0 text-[#019ED1] cursor-pointer">
            [https://timbresonic.com]
          </p>

          <p className="text-[#787878] pt-4">
            Need assistance? We&apos;re here to help! 🎵
          </p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="bg-[#fffff] font-generalsans h-fit w-full pt-[3rem] md:pt-[5rem] lg:pt-[7rem] pb-[0rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
      <div className="mb-16">
        <h2 className="mx-auto w-[100%] md:w-[90%] lg:w-[80%] xl:w-[70%] text-[#222222] text-center text-[30px] md:text-[34px] lg:text-[42px] font-bold leading-10 md:leading-[50px] lg:leading-[60px]">
          Maximize Engagement with Drip Campaigns & Omni-Channel Marketing
        </h2>
        <p className="text-[#787878] text-center text-[14px] md:text-[16px] lg:text-[20px] font-normal leading-5 lg:leading-[25px]">
          Drop Off - Web Notification
        </p>
      </div>

      {/* for large device */}
      <div
        className="relative hidden lg:block"
        style={{ marginBottom: "-10rem" }}
      >
        <motion.img
          src="/Channel.png"
          alt="chain"
          width="35"
          // height="600"
          className="z-10 absolute top-[17%] left-[48.7%] transform -translate-x-1/2"
          initial="hidden"
          whileInView="visible"
          animate={animateOnScroll ? "visible" : "hidden"}
          variants={imgAnimation}
        />

        <div id="email-container" className="w-1/2 flex justify-end">
          {EmailerCard}
        </div>

        <div id="whatsapp-container" className="flex">
          <div className="w-1/2"></div>
          <div className="relative w-1/2 top-[-7rem]">{WhatsappCard}</div>
        </div>

        <div id="web-notification-container" className="w-1/2 flex justify-end">
          {WebNotificationCard}
        </div>

        <div id="sms-container" className="flex">
          <div className="w-1/2"></div>
          <div className="relative w-1/2 top-[-19rem]">{SmsCard}</div>
        </div>
      </div>

      {/* for small & medium device */}
      <div className="relative lg:hidden flex flex-col justify-center items-center  pb-14 md:pb-24">
        {EmailerCard}

        {WhatsappCard}

        {WebNotificationCard}

        {SmsCard}
      </div>
    </section>
  );
};

export default OmniChannel;
