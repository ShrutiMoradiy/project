import React from "react";
import Header from "../../Header";
import Footer from "../Footer";
import Image from "next/image";
import ScheduleDemo from "../ScheduleDemo";

function page() {
  const ourValues = [
    {
      title: "Innovation",
      description:
        "We are committed to continuously pushing the boundaries of technology to develop groundbreaking solutions that drive superior customer engagement",
    },
    {
      title: "Customer-Centricity",
      description:
        "Our brands are at the heart of everything we do. We strive to understand their needs and exceed their expectations by enabling them with personalized, impactful interactions",
    },
    {
      title: "Integrity",
      description:
        "We believe in maintaining the highest standards of integrity and transparency in all our engagements, building trust and long-lasting relationships with our brands",
    },
    {
      title: "Excellence",
      description:
        "We pursue excellence in every aspect of our work, from the products we develop to the services we provide with the highest possible quality and performance",
    },
    {
      title: "Collaboration",
      description:
        "We foster a collaborative environment that values diverse perspectives and teamwork, enabling us to create innovative solutions that meet the dynamic needs of our brands",
    },
    {
      title: "Growth",
      description:
        "We are dedicated to the continuous growth and development of our employees, our brands, and our company for everyone to achieve their fullest potential.",
    },
  ];

  const team = [
    {
      src: "/team-img.png",
      alt: "team-img",
      name: "Robert Fox",
      designation: "Direct of Engineer",
    },
    {
      src: "/team-img.png",
      alt: "team-img",
      name: "Jerome Bell",
      designation: "Design of Head",
    },
    {
      src: "/team-img.png",
      alt: "team-img",
      name: "Darrell Steward",
      designation: "Chief of Staff",
    },
    {
      src: "/team-img.png",
      alt: "team-img",
      name: "Dianne Russell",
      designation: "Hr & Admonitions",
    },

    {
      src: "/team-img.png",
      alt: "team-img",
      name: "Jacob Jones",
      designation: "Customer Success",
    },
    {
      src: "/team-img.png",
      alt: "team-img",
      name: "Cody Fisher",
      designation: "Direct of Product",
    },
    {
      src: "/team-img.png",
      alt: "team-img",
      name: "Darlene Robertson",
      designation: "Direct of Legal",
    },
    {
      src: "/team-img.png",
      alt: "team-img",
      name: "Leslie Alexander",
      designation: "Direct of Engineer",
    },

    {
      src: "/team-img.png",
      alt: "team-img",
      name: "Jenny Wilson",
      designation: "Design of Head",
    },
    {
      src: "/team-img.png",
      alt: "team-img",
      name: "Floyd Miles",
      designation: "Chief of Staff",
    },
    {
      src: "/team-img.png",
      alt: "team-img",
      name: "Kristin Watson",
      designation: "Hr & Admonitions",
    },
    {
      src: "/team-img.png",
      alt: "team-img",
      name: "Theresa Webb",
      designation: "Customer Success",
    },
  ];
  return (
    <>
      <Header />
      <section className="font-helvetica bg-[#001632] flex justify-center pt-[6rem] pb-[3rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
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

      <section className="font-helvetica flex flex-col md:gap-1 gap-10 justify-center pt-[6rem] pb-[6rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="flex flex-wrap md:flex-nowrap items-center gap-10">
          <div className="flex flex-col w-full md:w-[60%] xl:w-[50%]">
            <h1 className="text-[#222222] text-center md:text-left text-2xl md:text-[34px] lg:text-[42px] font-bold leading-normal md:leading-[40px] lg:leading-[50px] mb-2">
              TechMonk Journey
            </h1>
            <p className="text-[#787878] text-[13px] md:text-[15px] lg:text-[18px] opacity-90 leading-normal md:leading-[25px] font-normal my-2">
              The seed of TechMonk was sown during a series of discussions and
              brainstorming the founders (Arun, Kamal) & early investors
              (Vatsal, Poojan) had seperately and jointly in 2021
            </p>
            <p className="text-[#787878] text-[13px] md:text-[15px] lg:text-[18px] opacity-90 leading-normal md:leading-[25px] font-normal my-2">
              One series of discussions was between Arun and Kamal on how the
              growth of AI, especially GenAI, is going to change the future of
              customer experience and how SMEs would need enterprise grade
              technology available to them to be able to compete. The platform
              would have to be built in a way that it can easily adapt to the
              business needs without kuch need for customizations or development
              effort. This led to the idea of building a conversational platform
              that can easily plug into any business and, without much effort,
              enable the conversational interface for customers of the business.
            </p>
            <p className="text-[#787878] text-[13px] md:text-[15px] lg:text-[18px] opacity-90 leading-normal md:leading-[25px] font-normal my-2">
              In parallel Arun, Vatsal and Poojan were brainstorming how there
              is going to be an explosion of online brands in India and how in
              the second and third wave of this explosion lot of marketing and
              technology hand holding will play a crucial in the success of the
              brands. These discussions led to the idea of building a full stack
              customer engagement platform that would provide end to end tools
              across the customer lifecycle with the industry best practices
              available as templates ready to use to help these brands optimize
              their customer journeys and maximize their revenues.
            </p>
          </div>
          <div className="w-full md:w-[50%] xl:w-[50%] flex justify-center">
            <Image
              src="/about-journey.png"
              alt="about-journey"
              width={587}
              height={575}
            />
          </div>
        </div>
        <div className="w-full">
          <p className="text-[#787878] text-[13px] md:text-[16px] lg:text-[18px] opacity-90 leading-normal md:leading-[25px] font-normal my-2">
            As the ideas started taking shape separately, it was only natural
            that very soon, the realization struck upon all 4 that the real game
            changer would be combine these ideas and to build a GenAI powered
            full stack customer engagement platform that is that is
            conversational at core and is enabled with industry best practices.
          </p>
          <p className="text-[#787878] text-[13px] md:text-[16px] lg:text-[18px] opacity-90 leading-normal md:leading-[25px] font-normal my-2">
            The vision was to empower thousands of online brands who have
            already achieved product market fit to scale their business with
            revenue and profit growth.
          </p>
          <p className="text-[#787878] text-[13px] md:text-[16px] lg:text-[18px] opacity-90 leading-normal md:leading-[25px] font-normal mt-2">
            Arun, Kamal decided to be the driving force, while Vatsal, Poojan,
            decided to be the angels and guiding light behind this vision. This
            was the beginning of TechMonk.
          </p>
        </div>
      </section>

      <section className="font-helvetica bg-[#E6F5FA] flex justify-center pt-[6rem] pb-[6rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="flex flex-wrap md:flex-nowrap items-center gap-10">
          <div className="flex justify-center w-full md:w-[40%] xl:w-[50%]">
            <Image
              src="/aboutImg.png"
              alt="aboutImg"
              width={410}
              height={550}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col w-full md:w-[60%] xg:w-[50%]">
            <p className="text-[#787878] text-[13px] md:text-[16px] lg:text-xl opacity-90 leading-normal md:leading-[25px] font-normal mt-3 mb-7">
              To transform the landscape of customer engagement by providing
              businesses with the all the tools and templates they need to
              create personalized, meaningful experiences that drive revenue,
              loyalty, growth, and success.
            </p>
            <div className="flex gap-6  mb-8">
              <Image
                src="/aboutvision.svg"
                alt="vision"
                width={65}
                height={65}
              />
              <div className="flex flex-col gap-[5px]">
                <h3 className="text-[#222222] text-[16px] md:text-[20px] lg:text-[26px] leading-normal md:leading-[25px] lg:leading-[30px] font-medium">
                  Vision
                </h3>
                <p className="text-[#787878] text-[13px] md:text-[16px] lg:text-[18px] opacity-90 leading-normal md:leading-[25px] font-normal">
                  To empower millions of businesses to create scalable and
                  profitable growth engines through meaningful and personalized
                  customer interactions at every touchpoint
                </p>
              </div>
            </div>
            {/* <div className=" bg-[url('/abouticonbg.svg')] bg-no-repeat h-[70px] ml-[31.5px] -my-[21px]"></div> */}
            <div className="flex gap-6">
              <Image
                src="/aboutmission.svg"
                alt="mission"
                width={65}
                height={65}
              />
              <div className="flex flex-col gap-[5px]">
                <h3 className="text-[#222222] text-[16px] md:text-[20px] lg:text-[26px] leading-normal md:leading-[25px] lg:leading-[30px] font-medium">
                  Mission
                </h3>
                <p className="text-[#787878] text-[13px] md:text-[16px] lg:text-[18px] opacity-90 leading-normal md:leading-[25px] font-normal">
                  At TechMonk, our mission is to become the global leader in
                  personalized consumer engagement, revolutionizing how
                  businesses connect with their customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="font-helvetica flex justify-center pt-[4rem] pb-[6rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container">
          <div className="flex flex-col justify-center items-center mb-12">
            <h1 className="text-[#222222] text-2xl md:text-[35px] lg:text-[42px] font-bold md:leading-[55px] text-center">
              Our Values
            </h1>
          </div>
          <div className="flex justify-center flex-wrap  gap-4">
            {ourValues.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-5 bg-white border border-[#D9D9D9] rounded-lg w-full lg:w-1/4 sm:w-[40%] p-5"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#18191F] text-xl md:text-[22px] leading-[30px] font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-[#787878] text-sm md:text-[16px] lg:text-[18px] leading-normal font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="font-helvetica bg-[#E6F5FA] flex justify-center items-center pt-[6rem] pb-[4rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container">
          <div className="flex flex-col">
            <h1 className="text-[#222222] text-2xl md:text-[35px] lg:text-[42px] font-bold leading-normal md:leading-[40px] lg:leading-[55px] text-center">
              Meet our Founders
            </h1>
            <div className="flex justify-center items-center flex-wrap md:flex-nowrap gap-6 mt-10">
              <div className="sm:w-[20%] flex flex-col items-center">
                <Image
                  src="/foundersImg1.png"
                  alt="foundersImg"
                  width={193}
                  height={220}
                  className="rounded-lg"
                />
              </div>
              <div className="w-full md:w-[70%] flex flex-col text-center md:text-left">
                <h1 className="text-[#222222] text-[14px] md:text-[18px] lg:text-[25px] font-medium leading-normal">
                  Arun Menon
                </h1>
                <span className="text-[#019ED1] text-[13px] md:text-[16px] lg:text-[18px] font-medium leading-normal">
                  Co-Founder, CEO
                </span>
                <p className="text-[#787878] text-[13px] md:text-[16px] lg:text-[18px] leading-normal md:leading-[25px] font-normal mt-3">
                  Arun Menon is an IIT-B alumni with a passion for technology,
                  love for solving problems and taking on challenges which led
                  him to build multiple technology companies over the last two
                  decades. Arun has deep knowledge of varied technologies as
                  well as markets and has delivered many first to market
                  products and business models.
                </p>
                <p className="text-[#787878] text-[13px] md:text-[16px] lg:text-[18px] leading-normal md:leading-[25px] font-normal mt-3">
                  In his last start up Arun sold mobile applications to over 5
                  million customers in India through a unique distribution
                  network spanning 800 cities and 15000 points of presence.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center flex-wrap-reverse md:flex-nowrap gap-6 mt-10 pt-10 border-t">
              <div className="w-full md:w-[70%] flex flex-col text-center md:text-left">
                <h1 className="text-[#222222] text-[14px] md:text-[18px] lg:text-[25px] font-medium leading-normal">
                  Kamal Soboo
                </h1>
                <span className="text-[#019ED1] text-[13px] md:text-[16px] lg:text-[18px] font-medium leading-normal">
                  Co-Founder, COO
                </span>
                <p className="text-[#787878] text-[13px] md:text-[16px] lg:text-[18px] leading-normal md:leading-[25px] font-normal mt-3">
                  Seasoned and highly committed professional with proven
                  strategic thinking and leadership skills. IIT Bombay, 2003
                  alumni having a multi-faceted background spanning various
                  roles, project planning, UX, dev-ops, development, testing
                  automation and key client management.
                </p>
                <p className="text-[#787878] text-[13px] md:text-[16px] lg:text-[18px] leading-normal md:leading-[25px] font-normal my-3">
                  Having strong foundation and understanding of technology, with
                  hands on experience on numerous technologies along with proven
                  track record of delivering key turn around projects. Domain
                  expertise includes Fintech Solutions, eComm Lifecycle and
                  MicroSite development.
                </p>
              </div>
              <div className="sm:w-[20%] flex flex-col items-center">
                <Image
                  src="/foundersImg2.png"
                  alt="foundersImg"
                  width={193}
                  height={220}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="font-helvetica flex justify-center pt-[4rem] pb-[6rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container">
          <div className="flex flex-col justify-center items-center mb-12">
            <h1 className="text-[#222222] text-2xl md:text-[35px] lg:text-[42px] font-bold md:leading-[55px] text-center">
            Meet TechMonk Team
            </h1>
          </div>
          <div className="flex justify-center flex-wrap  gap-4">
            {team.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-5 border border-[#D9D9D9] rounded-lg w-full lg:w-[20%] sm:w-[40%] md:w-[30%] p-5"
              >
                <Image src={item.src} alt={item.alt} width={130} height={150} />
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#18191F] text-[15px] md:text-[18px] lg:text-[22px] leading-[20px] font-medium">
                    {item.name}
                  </h3>
                  <p className="text-[#019ED1] text-sm md:text-[16px] lg:text-[18px] leading-normal font-medium">
                    {item.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScheduleDemo />
      <Footer />
    </>
  );
}

export default page;
