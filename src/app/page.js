import React from "react";
import Features from "./component/Features";
import Footer from "./component/Footer";
import SmartPayroll from "./component/SmartPayroll";
import Pricing from "./component/Pricing";

export default function Home() {
  return (
    <div className="flex min-h-screen m-0 p-0 flex-col items-center justify-between">
      <SmartPayroll />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
