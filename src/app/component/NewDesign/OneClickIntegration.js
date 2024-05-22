"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

function NewDesign() {
  const ecosystem = [
    {
      img: "/shopify.svg",
      name: "Shopify",
      detail: "Listen to all customer events from your Shopify store",
    },
    {
      img: "/zoho.png",
      name: "Zoho",
      detail:
        "Raise Tickets and update customers on the status of their ticket",
    },
    {
      img: "/ship-rocket.svg",
      name: "ShipRocket",
      detail:
        "Get all delivery related updates, coordinate with customers for NDR",
    },
    {
      img: "/gupshup.svg",
      name: "Gupshup",
      detail: "Engage with your customers on WhatsApp with Gupshup",
    },
    {
      img: "/telegram.svg",
      name: "Telegram",
      detail: "Engage with customers on telegram",
    },
    {
      img: "/sendGrid.svg",
      name: "SendGrid",
      detail: "Engage with customers through personalized emails",
    },
    {
      img: "/wati.svg",
      name: "Wati",
      detail: "Send WhatsApp messages through WATI",
    },
    {
      img: "/aws-ses.svg",
      name: "AWS SES",
      detail: "Send personalized emails through SES",
    },
  ];

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
  const cardAnimation = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const { scrollY } = useScroll();
  const threshold = 0.5;
  const animateOnScroll = scrollY >= threshold;

  return (
    <>
      <section className="flex justify-center pt-[6rem] pb-[2rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container">
          <div className="flex flex-col justify-center items-center mb-12">
            <h1 className="text-[#222222] text-2xl md:text-[35px] lg:text-[42px] font-bold md:leading-[55px] text-center">
              One Click Integration
            </h1>
            <p className="text-[#787878] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal mt-5 text-center">
              with major players in the E-commerce Ecosystem
            </p>
          </div>
          <motion.div
            variants={variantcontainer}
            initial="hidden"
            whileInView="visible"
            animate={animateOnScroll ? "visible" : "hidden"}
            className="flex justify-center flex-wrap gap-4"
          >
            {ecosystem.map((item, index) => (
              <motion.div
                key={index}
                variants={cardAnimation}
                className="border rounded-md w-full xl:w-1/4 lg:w-[30%] sm:w-[45%] p-5"
              >
                <div className="flex items-center">
                  <span className="relative p-3">
                    <span className="absolute inset-0 border-2 rounded transform rotate-45"></span>
                    <Image src={item.img} alt="Img" width={30} height={30} />
                  </span>
                  <h3 className="text-[#222222] mx-5 text-base md:text-xl lg:text-[25px] leading-[30px] font-bold">
                    {item.name}
                  </h3>
                </div>
                <p className="text-[#787878] text-sm md:text-[16px] lg:text-[18px] leading-[23.4px] font-normal mt-5">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default NewDesign;
