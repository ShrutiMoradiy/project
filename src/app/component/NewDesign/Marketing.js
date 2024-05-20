"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function Marketing() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showData1, setShowData1] = useState(false);
  const Data1 = () => {
    setShowData1(true);
    setShowData2(false);
    setShowData3(false);
  };
  const [showData2, setShowData2] = useState(false);
  const Data2 = () => {
    setShowData2(true);
    setShowData1(false);
    setShowData3(false);
  };

  const [showData3, setShowData3] = useState(false);
  const Data3 = () => {
    setShowData3(true);
    setShowData1(false);
    setShowData2(false);
  };

  const images = ["/marketimg.png", "/perf-img.jpg", "/marketimg.png"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);
  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <>
      <section className="bg-[#001632] pt-[6rem] pb-[6rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem] bg-[url('/Polygon4.png')] bg-no-repeat bg-right-bottom">
        {showData3 ? (
          <div className="flex justify-center flex-wrap gap-10">
            <div className="w-full lg:w-[50%] flex flex-col">
              <h1 className="text-white text-xl md:text-[30px] lg:text-[42px] font-bold leading-[30px] md:leading-[40px] lg:leading-[50px] mb-2">
                Unlock Precision Marketing with Integrated Audience Builder &
                Unified Data Platform
              </h1>
              <h3
                className="text-[#B2B9C1] text-sm md:text-[16px] lg:text-[25px] leading-[60px] font-medium mb-5 border-b-2 border-[#B2B9C1] border-opacity-[20%]"
                onClick={Data1}
              >
                Growth in Revenue, Increase in Profits
              </h3>
              <h3
                className="text-[#B2B9C1] text-sm md:text-[16px] lg:text-[25px] leading-[60px] font-medium mb-5 border-b-2 border-[#B2B9C1] border-opacity-[20%]"
                onClick={Data2}
              >
                Occasional Buyers
              </h3>
              <h3 className="text-white text-sm md:text-[16px] lg:text-[25px] leading-[60px] font-medium">
                Home Entertainment Enthusiasts
              </h3>
              <div className="bg-[#B2B9C1] bg-opacity-[20%] h-[2px]">
                <div className="bg-[#019ED1] w-[180px] sm:w-[384px] h-[2px]"></div>
              </div>
              <div className="flex flex-col mb-6">
                <div className="flex">
                  <Image src="/Polygon.svg" alt="IMG" width={8} height={8} />
                  <h1 className="text-white text-sm md:text-[18px] lg:text-[20px] font-bold m-2">
                    Images:
                    <span className="text-[#B2B9C1] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal">
                      Premium speaker model with high-quality audio features.
                    </span>
                  </h1>
                </div>
                <div className="flex">
                  <Image src="/Polygon.svg" alt="IMG" width={8} height={8} />
                  <h1 className="text-white text-sm md:text-[18px] lg:text-[20px] font-bold m-2">
                    Campaign Objective:
                    <span className="text-[#B2B9C1] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal">
                      Upsell premium accessories or limited edition models.
                    </span>
                  </h1>
                </div>
                <div className="flex">
                  <Image src="/Polygon.svg" alt="IMG" width={8} height={8} />
                  <h1 className="text-white text-sm md:text-[18px] lg:text-[20px] font-bold m-2">
                    Personalized Message:
                    <span className="text-[#B2B9C1] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal">
                      "Experience studio-quality sound with our latest premium
                      accessories. Elevate your audio setup to new heights!"
                    </span>
                  </h1>
                </div>
                <div className="flex">
                  <Image src="/Polygon.svg" alt="IMG" width={8} height={8} />
                  <h1 className="text-white text-sm md:text-[18px] lg:text-[20px] font-bold m-2">
                    CTA:
                    <span className="text-[#B2B9C1] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal">
                      "Shop Now for Audiophile Gear"
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center lg:w-[40%]">
              <div className="relative">
                <Image
                  src={images[currentImage]}
                  alt="Marketing Image"
                  width={509}
                  height={605}
                />
              </div>
              <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentImage ? "bg-[#019ED1]" : "bg-[#B2B9C1]"
                    } focus:outline-none`}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : showData2 ? (
          <div className="flex justify-center flex-wrap gap-10">
            <div className="w-full lg:w-[50%] flex flex-col">
              <h1 className="text-white text-xl md:text-[30px] lg:text-[42px] font-bold leading-[30px] md:leading-[40px] lg:leading-[50px] mb-2">
                Unlock Precision Marketing with Integrated Audience Builder &
                Unified Data Platform
              </h1>
              <h3
                className="text-[#B2B9C1] text-sm md:text-[16px] lg:text-[25px] leading-[60px] font-medium mb-5 border-b-2 border-[#B2B9C1] border-opacity-[20%]"
                onClick={Data1}
              >
                Growth in Revenue, Increase in Profits
              </h3>
              <h3 className="text-white text-sm md:text-[16px] lg:text-[25px] leading-[60px] font-medium">
                Occasional Buyers
              </h3>
              <div className="bg-[#B2B9C1] bg-opacity-[20%] h-[2px]">
                <div className="bg-[#019ED1] w-[180px] sm:w-[384px] h-[2px]"></div>
              </div>
              <div className="flex flex-col mb-6">
                <div className="flex">
                  <Image src="/Polygon.svg" alt="IMG" width={8} height={8} />
                  <h1 className="text-white text-sm md:text-[18px] lg:text-[20px] font-bold m-2">
                    Images:
                    <span className="text-[#B2B9C1] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal">
                      Premium speaker model with high-quality audio features.
                    </span>
                  </h1>
                </div>
                <div className="flex">
                  <Image src="/Polygon.svg" alt="IMG" width={8} height={8} />
                  <h1 className="text-white text-sm md:text-[18px] lg:text-[20px] font-bold m-2">
                    Campaign Objective:
                    <span className="text-[#B2B9C1] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal">
                      Upsell premium accessories or limited edition models.
                    </span>
                  </h1>
                </div>
                <div className="flex">
                  <Image src="/Polygon.svg" alt="IMG" width={8} height={8} />
                  <h1 className="text-white text-sm md:text-[18px] lg:text-[20px] font-bold m-2">
                    Personalized Message:
                    <span className="text-[#B2B9C1] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal">
                      "Experience studio-quality sound with our latest premium
                      accessories. Elevate your audio setup to new heights!"
                    </span>
                  </h1>
                </div>
                <div className="flex">
                  <Image src="/Polygon.svg" alt="IMG" width={8} height={8} />
                  <h1 className="text-white text-sm md:text-[18px] lg:text-[20px] font-bold m-2">
                    CTA:
                    <span className="text-[#B2B9C1] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal">
                      "Shop Now for Audiophile Gear"
                    </span>
                  </h1>
                </div>
              </div>

              <h3
                className="text-[#B2B9C1] text-sm md:text-[16px] lg:text-[25px] leading-[60px] font-medium mb-5 border-b-2 border-[#B2B9C1] border-opacity-[20%]"
                onClick={Data3}
              >
                Home Entertainment Enthusiasts
              </h3>
            </div>
            <div className="w-full flex flex-col items-center lg:w-[40%]">
              <div className="relative">
                <Image
                  src={images[currentImage]}
                  alt="Marketing Image"
                  width={509}
                  height={605}
                />
              </div>
              <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentImage ? "bg-[#019ED1]" : "bg-[#B2B9C1]"
                    } focus:outline-none`}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center flex-wrap gap-10">
            <div className="w-full lg:w-[50%] flex flex-col">
              <h1 className="text-white text-xl md:text-[30px] lg:text-[42px] font-bold leading-[30px] md:leading-[40px] lg:leading-[50px] mb-2">
                Unlock Precision Marketing with Integrated Audience Builder &
                Unified Data Platform
              </h1>
              <h3 className="text-white text-sm md:text-[16px] lg:text-[25px] leading-[60px] font-medium">
                Growth in Revenue, Increase in Profits
              </h3>
              <div className="bg-[#B2B9C1] bg-opacity-[20%] h-[2px]">
                <div className="bg-[#019ED1] w-[180px] sm:w-[384px] h-[2px]"></div>
              </div>
              <div className="flex flex-col mb-6">
                <div className="flex">
                  <Image src="/Polygon.svg" alt="IMG" width={8} height={8} />
                  <h1 className="text-white text-sm md:text-[18px] lg:text-[20px] font-bold m-2">
                    Images:
                    <span className="text-[#B2B9C1] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal">
                      Premium speaker model with high-quality audio features.
                    </span>
                  </h1>
                </div>
                <div className="flex">
                  <Image src="/Polygon.svg" alt="IMG" width={8} height={8} />
                  <h1 className="text-white text-sm md:text-[18px] lg:text-[20px] font-bold m-2">
                    Campaign Objective:
                    <span className="text-[#B2B9C1] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal">
                      Upsell premium accessories or limited edition models.
                    </span>
                  </h1>
                </div>
                <div className="flex">
                  <Image src="/Polygon.svg" alt="IMG" width={8} height={8} />
                  <h1 className="text-white text-sm md:text-[18px] lg:text-[20px] font-bold m-2">
                    Personalized Message:
                    <span className="text-[#B2B9C1] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal">
                      "Experience studio-quality sound with our latest premium
                      accessories. Elevate your audio setup to new heights!"
                    </span>
                  </h1>
                </div>
                <div className="flex">
                  <Image src="/Polygon.svg" alt="IMG" width={8} height={8} />
                  <h1 className="text-white text-sm md:text-[18px] lg:text-[20px] font-bold m-2">
                    CTA:
                    <span className="text-[#B2B9C1] text-sm md:text-[16px] lg:text-xl leading-[25px] font-normal">
                      "Shop Now for Audiophile Gear"
                    </span>
                  </h1>
                </div>
              </div>
              <h3
                className="text-[#B2B9C1] text-sm md:text-[16px] lg:text-[25px] leading-[60px] font-medium mb-5 border-b-2 border-[#B2B9C1] border-opacity-[20%]"
                onClick={Data2}
              >
                Occasional Buyers
              </h3>
              <h3
                className="text-[#B2B9C1] text-sm md:text-[16px] lg:text-[25px] leading-[60px] font-medium mb-5 border-b-2 border-[#B2B9C1] border-opacity-[20%]"
                onClick={Data3}
              >
                Home Entertainment Enthusiasts
              </h3>
            </div>
            <div className="w-full flex flex-col items-center lg:w-[40%]">
              <div className="relative">
                <Image
                  src={images[currentImage]}
                  alt="Marketing Image"
                  width={509}
                  height={605}
                />
              </div>
              <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentImage ? "bg-[#019ED1]" : "bg-[#B2B9C1]"
                    } focus:outline-none`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Marketing;
