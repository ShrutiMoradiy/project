"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

function Reviews() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slideInterval = useRef(null);

  const reviews = [
    {
      name: "Marvin McKinney",
      companyName: "Company Name",
      review:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using lorem Ipsum is that it has a more-or-less.",
      img: "/Ellipse.png",
      rating: 5,
    },
    {
      name: "Leslie Alexander",
      companyName: "Company Name",
      review:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of you need to be sure there isn't anything.",
      img: "/Ellipse.png",
      rating: 4,
    },
    {
      name: "Eleanor Pena",
      companyName: "Company Name",
      review:
        "Search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
      img: "/Ellipse.png",
      rating: 3,
    },
    {
      name: "John Doe",
      companyName: "Company Name",
      review:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using lorem Ipsum is that it has a more-or-less.",
      img: "/Ellipse.png",
      rating: 5,
    },
    {
      name: "Jane Doe",
      companyName: "Company Name",
      review:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of you need to be sure there isn't anything.",
      img: "/Ellipse.png",
      rating: 4,
    },
    {
      name: "John Smith",
      companyName: "Company Name",
      review:
        "Search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
      img: "/Ellipse.png",
      rating: 3,
    },
  ];

  const determineReviewsPerSlide = () => {
    if (window.innerWidth < 768) {
      return 1;
    } else if (window.innerWidth < 1024) {
      return 2;
    } else {
      return 3;
    }
  };

  const [reviewsPerSlide, setReviewsPerSlide] = useState(
    determineReviewsPerSlide()
  );

  useEffect(() => {
    const handleResize = () => {
      setReviewsPerSlide(determineReviewsPerSlide());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalSlides = Math.ceil(reviews.length / reviewsPerSlide);

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(slideInterval.current);
  }, [totalSlides]);

  const handleDotClick = (index) => {
    setCurrentSlideIndex(index);
    clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Image
          key={i}
          src={i < rating ? "/reviewstar.svg" : "/reviewstar1.svg"}
          alt="Reviews"
          width={15}
          height={15}
        />
      );
    }
    return stars;
  };

  const getVisibleReviews = () => {
    const start = currentSlideIndex * reviewsPerSlide;
    return reviews.slice(start, start + reviewsPerSlide);
  };

  return (
    <section className="flex justify-center bg-[#E6F5FA] pt-[6rem] pb-[6rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
      <div className="container">
        <div className="flex flex-col justify-center items-center mb-12">
          <h1 className="text-[#222222] text-2xl md:text-[35px] lg:text-[42px] font-bold md:leading-[55px] text-center">
            Why do Brands Love Us?
          </h1>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="w-full lg:w-1/3 px-4 flex-shrink-0"
                style={{ flex: `0 0 ${100 / reviewsPerSlide}%` }}
              >
                <div className="bg-white border-[#D9D9D9] border rounded-md p-5">
                  <p className="text-[#787878] text-sm md:text-[16px] lg:text-[18px] leading-[25px] font-normal">
                    {review.review}
                  </p>
                </div>
                <div className="flex items-center gap-3 my-3">
                  <Image src={review.img} alt="Img" width={50} height={50} />
                  <div>
                    <h3 className="text-[#222222] text-sm md:text-[16px] lg:text-[18px] leading-[22px] font-bold">
                      {review.name}
                    </h3>
                    <p className="text-[#464646] text-xs md:text-[13px] leading-[17px] font-normal">
                      {review.companyName}
                    </p>
                    <span className="flex gap-1">
                      {renderStars(review.rating)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlideIndex ? "bg-[#019ED1]" : "bg-[#B2B9C1]"
                } focus:outline-none`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
