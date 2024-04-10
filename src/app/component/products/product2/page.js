import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Image from "next/image";
import Performance from "/public/perf-img.jpg";
import mission from "/public/mission.svg";

function page() {
  return (
    <>
      <Header />
      <section className="bg-[#f7f7f9] w-full py-10 md:py-16 lg:py-24 px-10 md:px-10 lg:px-36">
        <div className="container justify-center">
          <h1 className="text-[#343a40] text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold text-center">
            Product 2
          </h1>
          <p className="text-[#8a90a2] text-xs md:text-16 lg:text-lg pt-4 text-center">
            At TechMonk, we understand the demands of today's fast-paced digital
            world, where customers crave personalized experiences tailored to
            their unique needs and preferences.At TechMonk, we understand the
            demands of today's fast-paced digital world, where customers crave
            personalized experiences tailored to their unique needs and
            preferences.
          </p>

          <div className="relative flex justify-center -bottom-40 -mt-20">
            <Image src={Performance} width={746} height={561}></Image>
          </div>
        </div>
      </section>

      <section className="overflow-hidden pt-36 pb-16 lg:mb-0 md:mb-0">
        <div className="container xl:px-44 px-10">
          <div class="flex justify-center mx-auto pt-7">
            <h1 class="text-2xl lg:text-3xl text-[#343a40] font-semibold mb-3">
              Our Features
            </h1>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="lg:w-1/2 p-8">
              <div className="bg-gradient-to-tl from-[#ff784b1f] to-blue-400 rounded-full p-3 w-[50px] lg:w-[60px]">
                <Image src={mission} width={40} height={40} />
              </div>
              <h2 className="text-xl lg:text-2xl font-semibold text-[#343a40] pt-3">
                Features 1
              </h2>
              <p className="text-[#8a90a2] text-sm lg:text-base pt-4">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div className="lg:w-1/2 p-8">
              <div className="bg-gradient-to-tl from-[#ff784b1f] to-blue-400 rounded-full p-3 w-[50px] lg:w-[60px]">
                <Image src={mission} width={40} height={40} />
              </div>
              <h2 className="text-xl lg:text-2xl font-semibold text-[#343a40] pt-3">
                Features 2
              </h2>
              <p className="text-[#8a90a2] text-sm lg:text-base pt-4">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div className="lg:w-1/2 p-8">
              <div className="bg-gradient-to-tl from-[#ff784b1f] to-blue-400 rounded-full p-3 w-[50px] lg:w-[60px]">
                <Image src={mission} width={40} height={40} />
              </div>
              <h2 className="text-xl lg:text-2xl font-semibold text-[#343a40] pt-3">
                Features 3
              </h2>
              <p className="text-[#8a90a2] text-sm lg:text-base pt-4">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div className="lg:w-1/2 p-8">
              <div className="bg-gradient-to-tl from-[#ff784b1f] to-blue-400 rounded-full p-3 w-[50px] lg:w-[60px]">
                <Image src={mission} width={40} height={40} />
              </div>
              <h2 className="text-xl lg:text-2xl font-semibold text-[#343a40] pt-3">
                Features 4
              </h2>
              <p className="text-[#8a90a2] text-sm lg:text-base pt-4">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-10 md:py-16 lg:pb-28 px-10 md:px-10 lg:px-36">
        <div className="container justify-center">
          <div className="relative mb-20 md:my-0 lg:my-0">
            <div className="flex justify-center h-[360px] md:h-[400px] lg:h-[461px]">
              <Image
                src={Performance}
                width={746}
                height={461}
                className="shadow-[0_3px_10px_0_rgb(0_0_0/20%)]"
              ></Image>
            </div>
            <div className="absolute shadow-[0_3px_10px_0_rgb(0_0_0/20%)] lg:shadow-none -bottom-[60%] md:-bottom-[50%] max-w-[90%] m-7 bg-white mt-10 lg:-mb-[50px] lg:right-0 lg:bottom-0 p-6 lg:p-12 border border-[#05f] rounded-xl lg:max-w-[40%]">
              <h2 className="text:xl lg:text-2xl font-semibold text-[#343a40]">
                Features 1
              </h2>
              <p className="text-[#8a90a2] text-sm lg:text-base pt-4">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <ul className="text-[#4b4e58] text-sm lg:text-base font-semibold list-disc p-4 pb-0">
                <li>Presentation-level integration</li>
                <li>Business process integration</li>
                <li>Data integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-16 lg:pb-28 px-10 md:px-10 lg:px-36">
        <div className="container justify-center">
          <div className="relative my-20 lg:my-0">
            <div className="flex justify-center h-[360px] md:h-[400px] lg:h-[461px]">
              <Image
                src={Performance}
                width={746}
                height={461}
                className="shadow-[0_3px_10px_0_rgb(0_0_0/20%)]"
              ></Image>
            </div>
            <div className="absolute shadow-[0_3px_10px_0_rgb(0_0_0/20%)] lg:shadow-none -bottom-[60%] md:-bottom-[50%] max-w-[90%] m-7 mt-10 bg-white lg:-mb-[50px] lg:left-0 lg:bottom-0 p-6 lg:p-12 border border-[#05f] rounded-xl lg:max-w-[40%]">
              <h2 className="text:xl lg:text-2xl font-semibold text-[#343a40]">
                Features 2
              </h2>
              <p className="text-[#8a90a2] text-sm lg:text-base pt-4">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <ul className="text-[#4b4e58] text-sm lg:text-base font-semibold list-disc p-4 pb-0">
                <li>Presentation-level integration</li>
                <li>Business process integration</li>
                <li>Data integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-16 lg:pb-28 px-10 md:px-10 lg:px-36">
        <div className="container justify-center">
          <div className="relative my-20 md:my-0 lg:my-0">
            <div className="flex justify-center h-[360px] md:h-[400px] lg:h-[461px]">
              <Image
                src={Performance}
                width={746}
                height={461}
                className="shadow-[0_3px_10px_0_rgb(0_0_0/20%)]"
              ></Image>
            </div>
            <div className="absolute shadow-[0_3px_10px_0_rgb(0_0_0/20%)] lg:shadow-none -bottom-[60%] md:-bottom-[50%] max-w-[90%] m-7 bg-white mt-10 lg:-mb-[50px] lg:right-0 lg:bottom-0 p-6 lg:p-12 border border-[#05f] rounded-xl lg:max-w-[40%]">
              <h2 className="text:xl lg:text-2xl font-semibold text-[#343a40]">
                Features 3
              </h2>
              <p className="text-[#8a90a2] text-sm lg:text-base pt-4">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <ul className="text-[#4b4e58] text-sm lg:text-base font-semibold list-disc p-4 pb-0">
                <li>Presentation-level integration</li>
                <li>Business process integration</li>
                <li>Data integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-44 pt-10 md:py-16 lg:pb-28 px-10 md:px-10 lg:px-36">
        <div className="container justify-center">
          <div className="relative my-20 md:mb-36 lg:my-0">
            <div className="flex justify-center h-[360px] md:h-[400px] lg:h-[461px]">
              <Image
                src={Performance}
                width={746}
                height={461}
                className="shadow-[0_3px_10px_0_rgb(0_0_0/20%)]"
              ></Image>
            </div>
            <div className="absolute shadow-[0_3px_10px_0_rgb(0_0_0/20%)] lg:shadow-none -bottom-[60%] md:-bottom-[50%] max-w-[90%] m-7 mt-10 bg-white lg:-mb-[50px] lg:left-0 lg:bottom-0 p-6 lg:p-12 border border-[#05f] rounded-xl lg:max-w-[40%]">
              <h2 className="text:xl lg:text-2xl font-semibold text-[#343a40]">
                Features 4
              </h2>
              <p className="text-[#8a90a2] text-sm lg:text-base pt-4">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <ul className="text-[#4b4e58] text-sm lg:text-base font-semibold list-disc p-4 pb-0">
                <li>Presentation-level integration</li>
                <li>Business process integration</li>
                <li>Data integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default page;
