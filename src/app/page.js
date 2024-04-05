import Features from "@/component/features";
import Footer from "@/component/footer";
import Image from "next/image";
import Link from "next/link";
import check from "/public/check.svg"
import arrowright from "/public/arrow-right.svg"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
     
      <Features features={Features} />
      <Footer footer={Footer} />
    </div>
  );
}
