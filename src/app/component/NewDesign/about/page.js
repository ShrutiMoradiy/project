import React from "react";
import Header from "../../Header";
import Footer from "../Footer";
import Image from "next/image";

function page() {
  return (
    <>
      <Header />
      <section className="bg-[#001632] flex justify-center pt-[6rem] pb-[3rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="flex flex-col items-center mb-10 lg:w-[70%]">
          <h1 className="text-white text-2xl md:text-[35px] lg:text-[45px] font-bold leading-normal md:leading-[40px] lg:leading-[60px] text-center">
            We are a team of tech & marketing enthusiast
          </h1>
          <p className="text-white text-[13px] md:text-[16px] lg:text-xl opacity-70 leading-normal md:leading-[25px] font-normal my-3 text-center">
            At TechMonk, we understand the demands of today's fast-paced digital
            world, where customers crave personalized experiences tailored to
            their unique needs and preferences. Gone are the days of generic
            interactions and one-size-fits-all marketing.
          </p>
          <button className="bg-[#019ED1] text-white text-sm md:text-[16px] lg:text-[18px] leading-[21.6px] font-medium w-[150px] h-[45px] md:h-[55px] md:w-[200px] rounded-md mt-7">
            Schedule a Demo
          </button>
        </div>
      </section>

      <section className="flex justify-center pt-[6rem] pb-[6rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="flex flex-wrap md:flex-nowrap items-center gap-20">
          <div className="flex flex-col w-full md:w-[60%] xg:w-[50%]">
            <span className="text-[#019ED1] text-[16px] md:text-[18px] lg:text-[22px] font-normal leading-[45px] md:leading-[66px]">
              Our Belief
            </span>
            <h1 className="text-[#222222] text-2xl md:text-[35px] lg:text-[45px] font-bold leading-normal md:leading-[40px] lg:leading-[60px]">
              Dummy text of the printing and typesetting industry.
            </h1>
            <p className="text-[#787878] text-[13px] md:text-[16px] lg:text-xl opacity-90 leading-normal md:leading-[25px] font-normal mt-3 mb-7">
              At TechMonk, we understand the demands of today's fast-paced
              digital world, where customers crave personalized experiences
              tailored to their unique needs and preferences. Gone are the days
              of generic interactions and one-size-fits-all marketing.
            </p>
            <div className="flex gap-6 mb-8">
              <Image
                src="/aboutvision.svg"
                alt="vision"
                width={60}
                height={60}
              />
              <div className="flex flex-col gap-[5px]">
                <h3 className="text-[#222222] text-[16px] md:text-[20px] lg:text-[26px] leading-normal md:leading-[25px] lg:leading-[30px] font-medium">
                  Vision
                </h3>
                <p className="text-[#787878] text-[13px] md:text-[16px] lg:text-[18px] opacity-90 leading-normal md:leading-[25px] font-normal">
                  We want to be the one of the preferred digital solutions
                  providers for every startups and visionary entrepreneurs
                </p>
              </div>
            </div>
            <div className="flex gap-6 mb-8">
              <Image
                src="/aboutmission.svg"
                alt="mission"
                width={60}
                height={60}
              />
              <div className="flex flex-col gap-[5px]">
                <h3 className="text-[#222222] text-[16px] md:text-[20px] lg:text-[26px] leading-normal md:leading-[25px] lg:leading-[30px] font-medium">
                  Mission
                </h3>
                <p className="text-[#787878] text-[13px] md:text-[16px] lg:text-[18px] opacity-90 leading-normal md:leading-[25px] font-normal">
                  Designing digital solutions which benefits our customers,
                  consumers and our employees.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <Image src="/goal.svg" alt="goal" width={60} height={60} />
              <div className="flex flex-col gap-[5px]">
                <h3 className="text-[#222222] text-[16px] md:text-[20px] lg:text-[26px] leading-normal md:leading-[25px] lg:leading-[30px] font-medium">
                  Goal
                </h3>
                <p className="text-[#787878] text-[13px] md:text-[16px] lg:text-[18px] opacity-90 leading-normal md:leading-[25px] font-normal">
                  To become one of the best IT companies in Ahmedabad to work.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[40%] xg:w-[50%]">
            <Image
              src="/aboutImg.png"
              alt="aboutImg"
              width={518}
              height={667}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#e6f5fa] flex justify-center pt-[6rem] pb-[4rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container">
          <div className="flex flex-col">
            <h1 className="text-[#222222] text-2xl md:text-[35px] lg:text-[45px] font-bold leading-normal md:leading-[40px] lg:leading-[60px] text-center">
              Meet our Founders
            </h1>
            <p className="text-[#787878] text-[13px] md:text-[16px] lg:text-xl opacity-90 leading-normal md:leading-[25px] font-normal mt-3 mb-7 text-center">
              Meet the passionate brains driving our journey, the imaginative
              founders who give life to our mission.
            </p>
            <div className="flex justify-center flex-wrap md:flex-nowrap gap-5 lg:gap-14 mt-10">
              <div className="xl:w-[30%]">
                <Image
                  src="/foundersImg1.png"
                  alt="foundersImg"
                  width={280}
                  height={320}
                  className="rounded-lg"
                />
              </div>
              <div className="w-full md:w-[50%] xl:w-[70%] flex flex-col text-center md:text-left gap-1 md:gap-4">
                <h1 className="text-[#019ED1] text-[16px] md:text-[24px] lg:text-[30px] font-medium leading-normal md:leading-[20px]">
                  Arun Menon
                </h1>
                <span className="text-[#222222] text-[14px] md:text-[17px] lg:text-[20px] font-medium leading-normal md:leading-[20px]">
                  Co-Founder, CEO
                </span>
                <p className="text-[#787878] text-[13px] md:text-[16px] lg:text-xl opacity-90 leading-normal md:leading-[24px] lg:leading-[30px] font-normal">
                  Arun Menon is an IIT-B alumni with a passion for technology,
                  love for solving problems and taking on challenges which led
                  him to build multiple technology companies over the last two
                  decades. Arun has deep knowledge of varied technologies as
                  well as markets and has delivered many first to market
                  products and business models.
                </p>
                <p className="text-[#787878] text-[13px] md:text-[16px] lg:text-xl opacity-90 leading-normal md:leading-[24px] lg:leading-[30px] font-normal">
                  In his last start up Arun sold mobile applications to over 5
                  million customers in India through a unique distribution
                  network spanning 800 cities and 15000 points of presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#d6eff7] flex justify-center pt-[6rem] pb-[6rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="flex justify-center flex-wrap-reverse md:flex-nowrap gap-5 lg:gap-14">
          <div className="w-full md:w-[50%] xl:w-[70%] flex flex-col text-center md:text-left gap-1 md:gap-4">
            <h1 className="text-[#019ED1] text-[16px] md:text-[24px] lg:text-[30px] font-medium leading-normal md:leading-[20px]">
              Kamal Soboo
            </h1>
            <span className="text-[#222222] text-[14px] md:text-[17px] lg:text-[20px] font-medium leading-normal md:leading-[20px]">
              Co-Founder, COO
            </span>
            <p className="text-[#787878] text-[13px] sm:text-[16px] lg:text-xl opacity-90 leading-normal md:leading-[24px] lg:leading-[30px] font-normal">
              Seasoned and highly committed professional with proven strategic
              thinking and leadership skills. IIT Bombay, 2003 alumni having a
              multi-faceted background spanning various roles, project planning,
              UX, dev-ops, development, testing automation and key client
              management.
            </p>
            <p className="text-[#787878] text-[13px] sm:text-[16px] lg:text-xl opacity-90 leading-normal md:leading-[24px] lg:leading-[30px] font-normal">
              Having strong foundation and understanding of technology, with
              hands on experience on numerous technologies along with proven
              track record of delivering key turn around projects. Domain
              expertise includes Fintech Solutions, eComm Lifecycle and
              MicroSite development.
            </p>
          </div>
          <div className="xl:w-[30%]">
            <Image
              src="/foundersImg2.png"
              alt="foundersImg"
              width={280}
              height={320}
              className="md:ml-14 rounded-lg"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default page;
