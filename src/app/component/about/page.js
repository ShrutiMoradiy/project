import React from "react";
import Header from "../Header";
import Image from "next/image";
import Link from "next/link";
import payrollimg from "/public/payroll-img.jpg";
import arrowright from "/public/arrow-right-primary.svg";
import Footer from "../Footer";
import team from "/public/team.png";
import vision from "/public/vision.svg";
import mission from "/public/mission.svg";

function page() {
  return (
    <>
      <Header />

      <section className="bg-[#f7f7f9] w-full py-10 md:py-16 lg:py-24 px-10 md:px-10 lg:px-36">
        <div className="container justify-center">
          <h1 className="text-[#343a40] text-xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold text-center">
            We are a team of tech & marketing enthusiast
          </h1>
          <p className="text-[#8a90a2] text-xs md:text-16 lg:text-lg pt-4 text-center">
            At TechMonk, we understand the demands of today's fast-paced digital
            world, where customers crave personalized experiences tailored to
            their unique needs and preferences. Gone are the days of generic
            interactions and one-size-fits-all marketing.
          </p>
        </div>
      </section>

      <section className="overflow-hidden py-5 md:py-10 lg:py-20">
        <div className="container xl:px-20 px-10">
          <div className="flex flex-wrap">
            <div className="lg:w-1/4 mx-auto flex flex-col flex-wrap p-8">
              <span class="border border-t w-[25%] block"></span>
              <h1 className="text-[#343a40] text-[1.78125rem] font-semibold mt-4 text-left">
                About Us
              </h1>
            </div>

            <div className="lg:w-3/4 w-full mt-6 lg:flex lg:px-20">
              <p className="text-[#8a90a2] text-base lg:px-4 mb-10">
                In this increasingly omni-channel world, customers expect
                everything to be customized to their individual choices and
                desires. At TechMonk, we believe in going beyond traditional
                personalization methods. By going beyond demographic and
                psychographic data, our goal is to gather enough information to
                engage with customers as unique individuals, not just as
                segments or customer types.
              </p>
              <p className="text-[#8a90a2] text-base lg:px-4 mb-10">
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

      <section className="overflow-hidden">
        <div className="container px-10 pb-20 mx-auto">
          <div className="lg:w-4/5 md:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 md:lg:w-1/2 w-full lg:pr-20 lg:py-6 mb-6 lg:mb-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                Build amazing things together
              </h1>

              <p className="text-[#8a90a2] text-base mb-5">
                While personalization has already made waves in the digital age,
                we believe this is just the beginning. At TechMonk, we aim to
                help our clients ride the hyper-personalization wave by
                providing real-time journey orchestration and optimization.
              </p>
              <p className="text-[#8a90a2] text-base mb-5">
                Our platform enables 1-to-1 personalization at scale, allowing
                businesses to deliver personalized experiences at every
                touchpoint along the customer journey, whether it's through
                websites, mobile apps, email campaigns, or other digital
                channels. By leveraging our platform, businesses can create
                unique and engaging experiences that foster strong customer
                relationships and drive conversions.
              </p>
            </div>
            <Image src={payrollimg} width={546} height={361}></Image>
          </div>
        </div>
      </section>
      <section className="overflow-hidden">
        <div className="container xl:px-44 px-10">
          <div class="flex flex-col mx-auto border-t pt-7">
            <h1 class="text-base text-[#343a40] font-medium mb-2">
              WHAT WE STRIVE FOR
            </h1>
          </div>
          <div className="flex flex-wrap border-b">
            <div className="lg:w-1/3 py-8">
              <div className="flex items-center">
                <Image src={vision} width={40} height={40} />
                <h2 className="text-3xl font-semibold px-3"> Our Vision</h2>
              </div>
             
                <p className="text-[#8a90a2] text-base pt-4">
                  Our vision is to empower our clients to hyper-personalize
                  their customer experiences, catering to the specific
                  requirements of each individual.
                </p>
              
            </div>

            <div className="lg:w-1/3 mx-auto py-8">
            <div className="flex items-center">
                <Image src={mission} width={40} height={40} />
                <h2 className="text-3xl font-semibold px-3"> Our Mission</h2>
              </div>
              <p className="text-[#8a90a2] text-base pt-4 lg:px-4">
                We are on a mission to revolutionize how businesses engage with
                their audience, ensuring that every interaction is meaningful,
                relevant, and truly unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="overflow-hidden">
        <div class="container px-10 pt-16 lg:pt-20">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="text-[1.78125rem] text-[#343a40] font-medium mb-2">
              Our Team
            </h1>
            <p class="text-[#8a90a2!important] text-center">
              Meet the talented individuals behind our success - the dedicated
              and diverse team that drives our mission forward.
            </p>
          </div>
          <div class="flex justify-center flex-grow flex-wrap">
            <div class="xl:w-[356px] w-full items-center lg:mx-3 lg:my-3 my-3 md:my-5 flex flex-col relative overflow-hidden">
              <Image src={team} width={150} height={150}></Image>

              <h2 class="text-[1.78125rem] text-[#343a40] font-medium pt-2">
                User 1
              </h2>
              <h3 class="text-lgtext-[#343a40] font-medium pb-2">
                Co-founder & CEO
              </h3>
              <p class="text-gray-600 text-center py-2">
                User 1 is an IIT-B alumni with a passion for technology, love
                for solving problems and taking on challenges which led him to
                build multiple technology companies over the last two decades.
                User 1 has deep knowledge of varied technologies as well as
                markets and has delivered many first to market products and
                business models. In his last start up User 1 sold mobile
                applications to over 5 million customers in India through a
                unique distribution network spanning 800 cities and 15000 points
                of presence.
              </p>
            </div>

            <div class="xl:w-[356px] w-full items-center lg:mx-3 lg:my-3 my-3 md:my-5 flex flex-col relative overflow-hidden">
              <Image src={team} width={150} height={150}></Image>

              <h2 class="text-[1.78125rem] text-[#343a40] font-medium pt-2">
                User 2
              </h2>
              <h3 class="text-lgtext-[#343a40] font-medium pb-2">
                Co-founder & CTO
              </h3>
              <p class="text-gray-600 text-center py-2">
                User 2, an IT engineer specializing in full-stack web
                development is the Co-Founder, & CTO at Techmonk. He aces
                problem solving and elevates user experience through his innate
                ability to adapt, unlearn and relearn as the situation demands.
                He is also the co-founder of a multi-million dollar Performance
                Marketing agency based out in Mumbai. In his free time, User 2
                is passionate about physics and loves to read about the
                mysteries of the universe.
              </p>
            </div>

            <div class="xl:w-[356px] w-full items-center lg:mx-3 lg:my-3 my-3 md:my-5 flex flex-col relative overflow-hidden">
              <Image src={team} width={150} height={150}></Image>

              <h2 class="text-[1.78125rem] text-[#343a40] font-medium pt-2">
                User 3
              </h2>
              <h3 class="text-lgtext-[#343a40] font-medium pb-2">
                Co-founder & CMO
              </h3>
              <p class="text-gray-600 text-justify py-2">
                User 3, a graduate of the American Business School, is the
                Co-Founder & CMO of TechMonk. With a focus on disrupting the
                communications space for brands, he is an expert in achieving
                growth through dynamic and adaptive digital marketing. He is
                passionate about motivating the team, bringing out and
                sharpening their skill set. He previously was also the Marketing
                Head of two successful businesses and Founder and CEO of a multi
                million dollar Performance Marketing agency.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container grid justify-items-center">
          <h1 className="text-[#343a40] text-xl md:text-2xl lg:text-5xl font-semibold text-center pb-5">
          Want to join our team?
          </h1>
          <Link
                href="/component/about"
                class="flex items-center mt-3 justify-center font-medium text-white uppercase bg-[#05f] border-1 border-[#05f] py-2 px-4 w-[164px] h-[45px] focus:outline-none hover:border-1 hover:border-[#05f] hover:shadow-[0_8px_20px_-6px_rgba(0,85,255,.6)] rounded-3xl"
              >
                Get Started
              </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default page;
