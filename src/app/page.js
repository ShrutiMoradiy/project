import React from "react";
import Features from "./component/Features";
import Footer from "./component/Footer";
import SmartPayroll from "./component/SmartPayroll";

export default function Home() {
  return (
    <div className="flex min-h-screen m-0 p-0 flex-col items-center justify-between">
      <SmartPayroll />
      <Features />
      <Footer />
    </div>
  );
}
