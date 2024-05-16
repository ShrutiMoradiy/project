import React from "react";
import Image from "next/image";
import Shopify from "../../../../public/shopify.svg";
import Zoho from "../../../../public/zoho.svg";
import ShipRocket from "../../../../public/ship-rocket.svg";
import Gupshup from "../../../../public/gupshup.svg";
import Telegram from "../../../../public/telegram.svg";
import SendGrid from "../../../../public/sendGrid.svg";
import Wati from "../../../../public/wati.svg";
import AWSSES from "../../../../public/aws-ses.svg";
function NewDesign() {
  return (
    <>
      <section className="flex justify-center pt-[6rem] pb-[2rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container">
          <div className="flex flex-col justify-center items-center mb-12">
            <h1 className="text-[#222222] text-3xl md:text-[42px] font-bold md:leading-[55px] text-center">
              One Click Integration
            </h1>
            <p className="text-[#787878] text-sm md:text-xl leading-[25px] font-normal mt-5 text-center">
              with major players in the E-commerce Ecosystem
            </p>
          </div>
          <div className="flex justify-center flex-wrap gap-4">
            <div className="border rounded-md w-full lg:w-1/4 md:w-1/2 h-[165px] p-5">
              <div className="flex justify-between">
                <span className="relative p-3">
                  <span className="absolute inset-0 border-solid border-2 rounded transform rotate-45"></span>
                  <Image src={Shopify} alt="Shopify" width={30} height={30} />
                </span>
                <h3 className="text-[#222222] text-xl md:text-[25px] leading-[30px] font-bold">
                  Shopify
                </h3>
              </div>
              <p className="text-[#787878] text-sm md:text-[18px] leading-[23.4px] font-normal mt-5">
                Listen to all customer events from your Shopify store
              </p>
            </div>
            <div className="border rounded-md w-full lg:w-1/4 md:w-1/2 h-[165px] p-5">
              <div className="flex justify-between">
                <span className="relative p-1 py-4">
                  <span className="absolute inset-0 border-solid border-2 rounded transform rotate-45"></span>
                  <Image src={Zoho} alt="Zoho" width={45} height={45} />
                </span>
                <h3 className="text-[#222222] text-xl md:text-[25px] leading-[30px] font-bold">
                  Zoho
                </h3>
              </div>
              <p className="text-[#787878] text-sm md:text-[18px] leading-[23.4px] font-normal mt-5">
                Raise Tickets and update customers on the status of their ticket
              </p>
            </div>
            <div className="border rounded-md w-full lg:w-1/4 md:w-1/2 h-[165px] p-5">
              <div className="flex justify-between">
                <span className="relative p-3">
                  <span className="absolute inset-0 border-solid border-2 rounded transform rotate-45"></span>
                  <Image
                    src={ShipRocket}
                    alt="ShipRocket"
                    width={30}
                    height={30}
                  />
                </span>
                <h3 className="text-[#222222] text-xl md:text-[25px] leading-[30px] font-bold">
                  ShipRocket
                </h3>
              </div>
              <p className="text-[#787878] text-sm md:text-[18px] leading-[23.4px] font-normal mt-5">
                Get all delivery related updates, coordinate with customers for
                NDR
              </p>
            </div>

            <div className="border rounded-md w-full lg:w-1/4 md:w-1/2 h-[165px] p-5">
              <div className="flex justify-between">
                <span className="relative p-3">
                  <span className="absolute inset-0 border-solid border-2 rounded transform rotate-45"></span>
                  <Image src={Gupshup} alt="Gupshup" width={30} height={30} />
                </span>
                <h3 className="text-[#222222] text-xl md:text-[25px] leading-[30px] font-bold">
                  Gupshup
                </h3>
              </div>
              <p className="text-[#787878] text-sm md:text-[18px] leading-[23.4px] font-normal mt-5">
                Engage with your customers on WhatsApp with Gupshup
              </p>
            </div>
            <div className="border rounded-md w-full lg:w-1/4 md:w-1/2 h-[165px] p-5">
              <div className="flex justify-between">
                <span className="relative p-3">
                  <span className="absolute inset-0 border-solid border-2 rounded transform rotate-45"></span>
                  <Image src={Telegram} alt="Telegram" width={30} height={30} />
                </span>
                <h3 className="text-[#222222] text-xl md:text-[25px] leading-[30px] font-bold">
                  Telegram
                </h3>
              </div>
              <p className="text-[#787878] text-sm md:text-[18px] leading-[23.4px] font-normal mt-5">
                Engage with customers on telegram
              </p>
            </div>

            <div className="border rounded-md w-full lg:w-1/4 md:w-1/2 h-[165px] p-5">
              <div className="flex justify-between">
                <span className="relative p-3">
                  <span className="absolute inset-0 border-solid border-2 rounded transform rotate-45"></span>
                  <Image
                    src={SendGrid}
                    alt="SendGrid"
                    width={30}
                    height={30}
                  />
                </span>
                <h3 className="text-[#222222] text-xl md:text-[25px] leading-[30px] font-bold">
                  SendGrid
                </h3>
              </div>
              <p className="text-[#787878] text-sm md:text-[18px] leading-[23.4px] font-normal mt-5">
              Engage with customers through personalized emails
              </p>
            </div>
            <div className="border rounded-md w-full lg:w-1/4 md:w-1/2 h-[165px] p-5">
              <div className="flex justify-between">
                <span className="relative p-3">
                  <span className="absolute inset-0 border-solid border-2 rounded transform rotate-45"></span>
                  <Image
                    src={Wati}
                    alt="Wati"
                    width={30}
                    height={30}
                  />
                </span>
                <h3 className="text-[#222222] text-xl md:text-[25px] leading-[30px] font-bold">
                  Wati
                </h3>
              </div>
              <p className="text-[#787878] text-sm md:text-[18px] leading-[23.4px] font-normal mt-5">
              Send WhatsApp messages through WATI
              </p>
            </div>
            <div className="border rounded-md w-full lg:w-1/4 md:w-1/2 h-[165px] p-5">
              <div className="flex justify-between">
                <span className="relative p-3">
                  <span className="absolute inset-0 border-solid border-2 rounded transform rotate-45"></span>
                  <Image
                    src={AWSSES}
                    alt="AWS SES"
                    width={30}
                    height={30}
                  />
                </span>
                <h3 className="text-[#222222] text-xl md:text-[25px] leading-[30px] font-bold">
                AWS SES
                </h3>
              </div>
              <p className="text-[#787878] text-sm md:text-[18px] leading-[23.4px] font-normal mt-5">
              Send personalized emails through SES
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewDesign;
