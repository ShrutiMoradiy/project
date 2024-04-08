"use client";
import React, { useState, useEffect } from "react";
import Features from "./component/Features";
import Footer from "./component/Footer";
import SmartPayroll from "./component/SmartPayroll";
import Pricing from "./component/Pricing";
import Header from "./component/Header";

import Image from "next/image";
import arrowup from "/public/arrow-up.svg";

export default function Home() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    }

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
    <div className="flex min-h-screen m-0 p-0 flex-col items-center justify-between">
      <Header />
      <SmartPayroll />
      <Features />
      <Pricing />
      <Footer />

      <button
        className="bottom-4 bg-[#0055ff26] fixed right-4 z-10 p-2 rounded w-[42px] show"
        id="btn-back-to-top"
        onClick={scrollToTop}
      >
        <Image src={arrowup} width={24} height={24} alt="Back to Top" />
      </button>
    </div>
  );
}
