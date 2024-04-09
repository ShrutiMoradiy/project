import React from "react";
import Header from "../Header";
import Image from "next/image";
import Link from "next/link";
import send from "/public/send.svg";
import email from "/public/email.svg";
import phone from "/public/phone.svg";
import location from "/public/location.svg";
import Footer from "../Footer";

function page() {
  return (
    <>
      <Header />

      <section className="bg-[#f7f7f9] w-full py-24">
        <div className="container justify-center">
          <h1 className="text-[#343a40] text-5xl font-semibold text-center">
            Contact Us
          </h1>
          <p className="text-[#8a90a2] text-lg text-center">
            Please fill out the following form and we will get back to you
            shortly
          </p>
        </div>
      </section>

      <section className="overflow-hidden py-20">
        <div className="container xl:px-20 px-10">
          <div className="flex flex-wrap xl:mx-20">
            <div className="lg:w-1/2 mx-auto bg-gradient-to-tl from-[#ff784b1f] to-blue-100 rounded-3xl flex flex-col flex-wrap p-8">
            <h2 className="text-[#343a40] text-[1.546875rem] font-medium text-left">
                Let's Talk Further
              </h2>
              <p className="text-base opacity-[75%] text-left mb-10">
                Please fill out the following form and we will get back to you
                shortly
              </p>
              <form>
                <div className="flex flex-wrap justify-center">
                  <div className="xl:w-1/2 w-full mx-auto flex flex-col flex-wrap">
                    <label className="text-sm font-semibold text-[#343a40] text-left m-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your First Name"
                      className="border border-[dee2e6] text-[#495057] placeholder:text-[#495057] px-3 py-2 m-1 rounded"
                    />
                  </div>
                  <div className="xl:w-1/2 w-full mx-auto flex flex-col flex-wrap">
                    <label className="text-sm font-semibold text-[#343a40] text-left m-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Last Name"
                      className="border border-[dee2e6] text-[#495057] placeholder:text-[#495057] px-3 py-2 m-1 rounded"
                    />
                  </div>
                  <div className="w-full mx-auto flex flex-col flex-wrap">
                    <label className="text-sm font-semibold text-[#343a40] text-left m-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="border border-[dee2e6] text-[#495057] placeholder:text-[#495057] px-3 py-2 m-1 rounded"
                    />
                  </div>
                  <div className="w-full mx-auto flex flex-col flex-wrap">
                    <label className="text-sm font-semibold text-[#343a40] text-left m-1">
                      Message
                    </label>
                    <textarea
                      type="text"
                      placeholder="Type Your Message..."
                      rows={5}
                      className="border border-[dee2e6] text-[#495057] placeholder:text-[#495057] px-3 py-2 m-1 rounded"
                    />
                  </div>
                  <div className="">
                    <button className="flex items-center mt-3 justify-center font-medium text-white bg-[#05f] border-1 border-[#05f] py-2 w-[116px] focus:outline-none hover:border-1 hover:border-[#05f] hover:shadow-[0_8px_20px_-6px_rgba(0,85,255,.6)] rounded">
                      Send
                      <span className="p-1">
                        <Image src={send} width={20} height={20} />
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="lg:w-1/2 w-full mt-6 flex flex-col flex-wrap lg:px-20">
            <h2 className="text-[#343a40] text-[1.546875rem] lg:pt-0 pt-4 font-medium text-left">
            Get in Touch
              </h2>
              <p className="text-base opacity-[75%] text-left mb-10">
              We're eager to hear from you! Whether you have questions, feedback, or just want to chat, drop us a line using the following contect details.
              </p>
              <div className="w-full lg:my-6 my-2 flex flex-wrap">
                <div className="bg-[#0055ff1f] flex justify-center items-center mr-5 rounded-lg w-[48px] h-[48px]">
                  <Image src={email} width={24} height={24}></Image>
                </div>
                <div className="flex flex-col">
                  <h5>Email</h5>
                  <Link href="/component/Contact">youremail@gmail.com</Link>
                </div>
              </div>
              <div className="w-full lg:my-6 my-2 flex flex-wrap">
                <div className="bg-[#ff784b1f] flex justify-center items-center mr-5 rounded-lg w-[48px] h-[48px]">
                  <Image src={phone} width={24} height={24}></Image>
                </div>
                <div className="flex flex-col">
                  <h5>Phone</h5>
                  <Link href="/component/Contact">+00 123 456 7890</Link>
                </div>
              </div>
              <div className="w-full lg:my-6 my-2 flex flex-wrap">
                <div className="bg-[#17a2b81f] flex justify-center items-center mr-5 rounded-lg w-[48px] h-[48px]">
                  <Image src={location} width={24} height={24}></Image>
                </div>
                <div className="flex flex-col">
                  <h5>Address</h5>
                  <Link href="/component/Contact">565 Brrom Str, NY</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default page;
