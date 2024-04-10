"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.png";
import facebook from "/public/facebook.svg";
import twitter from "/public/twitter.svg";
import linkedin from "/public/linkedin.svg";
import arrowup from "/public/arrow-up.svg";

export default function Footer() {
  
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    }
    
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="bg-[#f7f7f9] px-[50px] py-6 relative w-full">
        <div className="container flex pt-5 md:flex-row flex-wrap flex-col sm:mx-0 lg:px-20">
          <div className="flex-shrink-0 p-4 md:text-left sm:justify-center">
            <Link
              href="/"
              className="w-[75%] mb-4 d-flex align-items-center pt-0"
            >
              <Image src={logo} width={119} height={30}></Image>
            </Link>
            <p className="w-[75%] leading-6 text-[#8a90a2] mt-4">
              Make your web application stand out with high-quality landing page
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:items-left sm:text-left">
            <div className="lg:w-1/4 md:w-1/2 w-full p-4">
              <h6 className="text-sm my-3 font-semibold uppercase">Platform</h6>
              <ul>
                <li className="my-3">
                  <Link className="text-[#8a90a2]" href="/">
                    Demo
                  </Link>
                </li>
                <li className="my-3">
                  <Link className="text-[#8a90a2]" href="/">
                    Pricing
                  </Link>
                </li>
                <li className="my-3">
                  <Link className="text-[#8a90a2]" href="/">
                    Integrations
                  </Link>
                </li>
                <li className="my-3">
                  <Link className="text-[#8a90a2]" href="/">
                    Status
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full p-4">
              <h6 className="text-sm my-3 font-semibold uppercase">
                Knowledge Base
              </h6>
              <ul>
                <li className="my-3">
                  <Link className="text-[#8a90a2]" href="/">
                    Blog
                  </Link>
                </li>
                <li className="my-3">
                  <Link className="text-[#8a90a2]" href="/">
                    Help Center
                  </Link>
                </li>
                <li className="my-3">
                  <Link className="text-[#8a90a2]" href="/">
                    Sales Tools catalog
                  </Link>
                </li>
                <li className="my-3">
                  <Link className="text-[#8a90a2]" href="/">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full p-4">
              <h6 className="text-sm my-3 font-semibold uppercase">Company</h6>
              <ul>
                <li className="my-3">
                  <Link className="text-[#8a90a2]" href="/">
                    About Us
                  </Link>
                </li>
                <li className="my-3">
                  <Link className="text-[#8a90a2]" href="/">
                    Career
                  </Link>
                </li>
                <li className="my-3">
                  <Link className="text-[#8a90a2]" href="/">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full p-4">
              <h6 className="tet-sm my-3 font-semibold uppercase">Legal</h6>
              <ul>
                <li className="my-3">
                  <a className="text-[#8a90a2]" href="/">
                    Usage Policy
                  </a>
                </li>
                <li className="my-3">
                  <a className="text-[#8a90a2]" href="/">
                    Privacy Policy
                  </a>
                </li>
                <li className="my-3">
                  <a className="text-[#8a90a2]" href="/">
                    Terms of Service
                  </a>
                </li>
                <li className="my-3">
                  <a className="text-[#8a90a2]" href="/">
                    Trust
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="m-4 h-1">
          <hr />
        </div>
        <div className="container">
          <div className="md:text-start flex justify-around flex-wrap items-center">
            <div className="col-lg-9 col-md-8">
              <p className="pb-0 mb-0 text-wrap md:text-balance text-[#8a90a2]">
                2024 © Prompt. All rights reserved. Crafted by{" "}
                <Link href="/" className="text-[#495057] hover:text-[#05f]">
                  Coderthemes
                </Link>
              </p>
            </div>
            <div className="md:text-end col-lg-3 col-md-4">
              <div className="items-end">
                <ul className="flex flex-wrap lg:mt-0 mt-4 space-x-4">
                  <li className="inline-block">
                    <Image src={facebook} width={20} height={20}></Image>
                  </li>
                  <li className="inline-block">
                    <Image src={twitter} width={20} height={20}></Image>
                  </li>
                  <li className="inline-block">
                    <Image src={linkedin} width={20} height={20}></Image>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showArrow && (
        <button
          className="bottom-4 bg-[#0055ff26] fixed right-4 z-10 p-2 rounded w-[42px]"
          onClick={scrollToTop}
        >
          <Image src={arrowup} width={24} height={24} alt="Back to Top" />
        </button>
      )}
    </>
  );
}
