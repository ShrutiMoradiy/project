import React from "react";
import Header from "../Header";
import Image from "next/image";
import Link from "next/link";
import payrollimg from "/public/payroll-img.jpg";
import arrowright from "/public/arrow-right-primary.svg";
import Footer from "../Footer";

function page() {
  return (
    <>
      <Header />

      <section className="bg-[#f7f7f9] w-full py-24 px-36">
        <div className="container justify-center">
          <h1 className="text-[#343a40] text-5xl font-semibold text-center">
            We are a team of tech & marketing enthusiast
          </h1>
          <p className="text-[#8a90a2] text-lg pt-4 text-center">
            At TechMonk, we understand the demands of today's fast-paced digital
            world, where customers crave personalized experiences tailored to
            their unique needs and preferences. Gone are the days of generic
            interactions and one-size-fits-all marketing.
          </p>
        </div>
      </section>

      <section className="overflow-hidden py-20">
        <div className="container xl:px-20 px-10">
          <div className="flex flex-wrap">
            <div className="lg:w-1/4 mx-auto flex flex-col flex-wrap p-8">
              <span class="border border-t w-[25%] block"></span>
              <h1 className="text-[#343a40] text-[1.78125rem] font-semibold mt-4 text-left">
                About Us
              </h1>
            </div>

            <div className="lg:w-3/4 w-full mt-6 lg:flex lg:px-20">
              <p className="text-[#8a90a2] text-base px-4 mb-10">
                In this increasingly omni-channel world, customers expect
                everything to be customized to their individual choices and
                desires. At TechMonk, we believe in going beyond traditional
                personalization methods. By going beyond demographic and
                psychographic data, our goal is to gather enough information to
                engage with customers as unique individuals, not just as
                segments or customer types.
              </p>
              <p className="text-[#8a90a2] text-base px-4 mb-10">
                In this increasingly omni-channel world, customers expect
                everything to be customized to their individual choices and
                desires. At TechMonk, we believe in going beyond traditional
                personalization methods. By going beyond demographic and
                psychographic data, our goal is to gather enough information to
                engage with customers as unique individuals, not just as
                segments or customer types.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 pb-20 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-20 lg:py-6 mb-6 lg:mb-0">
             
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                Build amazing things together
              </h1>

              <p className="text-[#8a90a2] text-base mb-5">
                While personalization has already made waves in the digital age,
                we believe this is just the beginning. At TechMonk, we aim to
                help our clients ride the hyper-personalization wave by
                providing real-time journey orchestration and optimization.
              </p>
              <p className="text-[#8a90a2] text-base mb-10">
                Our platform enables 1-to-1 personalization at scale, allowing
                businesses to deliver personalized experiences at every
                touchpoint along the customer journey, whether it's through
                websites, mobile apps, email campaigns, or other digital
                channels. By leveraging our platform, businesses can create
                unique and engaging experiences that foster strong customer
                relationships and drive conversions.
              </p>

              <div className="text-[#0055ff] flex">
                <Link href="/">Learn more</Link>
                <Image src={arrowright} width={24} height={24}></Image>
              </div>
            </div>
            <Image src={payrollimg} width={546} height={361}></Image>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default page;
