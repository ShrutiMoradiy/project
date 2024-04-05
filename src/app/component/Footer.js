import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.png";
import facebook from "/public/facebook.svg";
import twitter from "/public/twitter.svg";
import linkedin from "/public/linkedin.svg";

export default function Footer() {
  return (
    <>
      <section className="bg-[#f7f7f9] p-[40px] relative w-full">
        <div className="container">
          <div className="row flex lg:justify-center flex-wrap md:items-left sm:text-left">
            <div className="col-xl-auto col-lg-3 col-6 sm:justify-center">
              <div className="pl-[3rem]">
                <Link
                  href="/"
                  className="me-lg-4 mb-4 me-auto d-flex align-items-center pt-0"
                >
                  <Image src={logo} width={119} height={30}></Image>
                </Link>
                <p className="text-muted w-[75%] leading-6 text-[#8a90a2] mt-4">
                  Make your web application stand out with high-quality landing
                  page
                </p>
              </div>
            </div>
            <div className="col-xl-auto col-lg-3 col-6">
              <div className="pl-[3rem]">
                <h6 className="text-sm my-3 font-semibold uppercase">
                  Platform
                </h6>
                <ul className="list-unstyled">
                  <li className="my-3">
                    <Link className="text-muted text-[#8a90a2]" href="/">
                      Demo
                    </Link>
                  </li>
                  <li className="my-3">
                    <Link className="text-muted text-[#8a90a2]" href="/">
                      Pricing
                    </Link>
                  </li>
                  <li className="my-3">
                    <Link className="text-muted text-[#8a90a2]" href="/">
                      Integrations
                    </Link>
                  </li>
                  <li className="my-3">
                    <Link className="text-muted text-[#8a90a2]" href="/">
                      Status
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-auto col-lg-3 col-6">
              <div className="pl-[3rem]">
                <h6 className="text-sm my-3 font-semibold uppercase">
                  Knowledge Base
                </h6>
                <ul className="list-unstyled">
                  <li className="my-3">
                    <Link className="text-muted text-[#8a90a2]" href="/">
                      Blog
                    </Link>
                  </li>
                  <li className="my-3">
                    <Link className="text-muted text-[#8a90a2]" href="/">
                      Help Center
                    </Link>
                  </li>
                  <li className="my-3">
                    <Link className="text-muted text-[#8a90a2]" href="/">
                      Sales Tools catalog
                    </Link>
                  </li>
                  <li className="my-3">
                    <Link className="text-muted text-[#8a90a2]" href="/">
                      API
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-auto col-lg-3 col-6">
              <div className="pl-[3rem]">
                <h6 className="text-sm my-3 font-semibold uppercase">
                  Company
                </h6>
                <ul className="list-unstyled">
                  <li className="my-3">
                    <Link className="text-muted text-[#8a90a2]" href="/">
                      About Us
                    </Link>
                  </li>
                  <li className="my-3">
                    <Link className="text-muted text-[#8a90a2]" href="/">
                      Career
                    </Link>
                  </li>
                  <li className="my-3">
                    <Link className="text-muted text-[#8a90a2]" href="/">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-auto col-lg-3 col-6">
              <div className="pl-[3rem]">
                <h6 className="tet-sm my-3 font-semibold uppercase">Legal</h6>
                <ul className="list-unstyled">
                  <li className="my-3">
                    <a className="text-muted text-[#8a90a2]" href="/">
                      Usage Policy
                    </a>
                  </li>
                  <li className="my-3">
                    <a className="text-muted text-[#8a90a2]" href="/">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="my-3">
                    <a className="text-muted text-[#8a90a2]" href="/">
                      Terms of Service
                    </a>
                  </li>
                  <li className="my-3">
                    <a className="text-muted text-[#8a90a2]" href="/">
                      Trust
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="m-3 h-1 w-">
            <hr />
          </div>

          <div className="md:text-start  flex justify-around flex-wrap text-center">
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
                <ul className="flex flex-wrap space-x-4">
                  <li className="inline-block me-4">
                    <Image src={facebook} width={24} height={24}></Image>
                  </li>
                  <li className="inline-block me-4">
                    <Image src={twitter} width={24} height={24}></Image>
                  </li>
                  <li className="inline-block">
                    <Image src={linkedin} width={24} height={24}></Image>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
