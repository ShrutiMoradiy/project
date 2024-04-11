"use client";
import React, { useState, useEffect, useRef } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Image from "next/image";
import Performance from "/public/perf-img.jpg";
import mission from "/public/mission.svg";
import next from "/public/arrow-next.svg";
import prev from "/public/arrow-prev.svg";

function page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const performance = [
    {
      src: "/perf-img.jpg",
      width: 746,
      height: 461,
      name: "Features 1",
      detail:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      src: "/perf-img.jpg",
      width: 746,
      height: 461,
      name: "Features 2",
      detail:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      src: "/perf-img.jpg",
      width: 746,
      height: 461,
      name: "Features 3",
      detail:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      src: "/perf-img.jpg",
      width: 746,
      height: 461,
      name: "Features 4",
      detail:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === performance.length - 1 ? 0 : currentSlide + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.pageX - startX;
    const containerWidth = containerRef.current.offsetWidth;
    const slideWidth = containerWidth / performance.length;
    const deltaSlide = Math.round(deltaX / slideWidth);
    setCurrentSlide((prevSlide) => {
      const nextSlide = prevSlide - deltaSlide;
      return Math.max(0, Math.min(nextSlide, performance.length - 1));
    });
    setStartX(e.pageX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };


  return (
    <>
      <Header />
      <section className="bg-[#f7f7f9] w-full py-10 md:py-16 lg:py-24 px-10 md:px-10 lg:px-36">
        <div className="container justify-center">
          <h1 className="text-[#343a40] text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold text-center">
            Product 3
          </h1>
          <p className="text-[#8a90a2] text-xs md:text-16 lg:text-lg pt-4 text-center">
            At TechMonk, we understand the demands of today's fast-paced digital
            world, where customers crave personalized experiences tailored to
            their unique needs and preferences.At TechMonk, we understand the
            demands of today's fast-paced digital world, where customers crave
            personalized experiences tailored to their unique needs and
            preferences.
          </p>

          <div
            className={`relative flex justify-center -bottom-40 -mt-20 ${
              isSidebarOpen
                ? ""
                : "relative flex justify-center -bottom-40 -mt-20"
            }`}
          >
            <Image src={Performance} width={746} height={561}></Image>
          </div>
        </div>
      </section>

      <section className="overflow-hidden pt-36 pb-16">
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

      <section className="py-10 md:py-16 lg:pb-28 px-10 md:px-10 lg:px-36"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      >
        <div className="container justify-center">
          <div className="relative flex flex-wrap justify-center items-center">
            {performance.map((items, index) => (
              <div
                key={index}
                className={`transition-transform duration-500 ${
                  index !== currentSlide ? "hidden" : ""
                }`}
                style={{ width: "100%", height: "100%" }}
              >
                <div className="flex justify-center lg:h-[461px]">
                  <Image
                    src={items.src}
                    width={items.width}
                    height={items.height}
                    className="shadow-[0_3px_10px_0_rgb(0_0_0/20%)]"
                  />
                </div>

                <div className="lg:absolute inherit bg-white mt-10 lg:-mb-[50px] lg:right-40 lg:bottom-0 p-7 lg:p-12 border border-[#05f] rounded-xl lg:max-w-[40%]">
                  <h2 className="text-xl lg:text-2xl font-semibold text-[#343a40]">
                    {items.name}
                  </h2>
                
                  <ul className="text-[#757985] text-sm lg:text-base font-semibold list-disc p-4 pb-0">
                    <li>Presentation-level integration</li>
                    <li>Business process integration</li>
                    <li>Data integration</li>
                  </ul>
                </div>
              </div>
            ))}

            <div
              className={`${
                windowWidth < 1000
                  ? "flex p-1 m-10"
                  : "absolute inset-x-0 right-0 top-0 z-10 grid gap-[0.50rem] items-center justify-end pb-4"
              }`}
            >
              {performance.map((_, index) => (
                <button
                  key={index}
                  className={`p-[5px] mx-1 rounded-full shadow bg-gray-300 ${
                    index === currentSlide ? "bg-blue-500" : ""
                  }`}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default page;
