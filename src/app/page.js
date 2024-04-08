import React from "react";
import Features from "./component/Features";
import Footer from "./component/Footer";
import SmartPayroll from "./component/SmartPayroll";
import Pricing from "./component/Pricing";
import Header from "./component/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen m-0 p-0 flex-col items-center justify-between">
      
      <Header />
      <SmartPayroll />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
