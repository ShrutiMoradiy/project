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
    
    <section classNameName="bg-[#f7f7f9] p-[40px] relative w-full">
        <div classNameName="container-flud mx-auto">
          <div classNameName="row flex justify-center flex-wrap sm:text-left">
            <div classNameName="col-xl-auto col-lg-3 col-6">
              <Link
                href="/"
                classNameName="me-lg-4 mb-4 me-auto d-flex align-items-center pt-0"
              >
                <Image src={logo} width={119} height={30}></Image>
              </Link>
              <p classNameName="text-muted w-[75%] leading-6 text-[#8a90a2] mt-4">
                Make your web application stand out with high-quality landing
                page
              </p>
            </div>
            <div classNameName="col-xl-auto col-lg-3 col-6">
              <div classNameName="pl-[3rem]">
                <h6 classNameName="text-sm my-3 font-semibold uppercase">
                  Platform
                </h6>
                <ul classNameName="list-unstyled">
                  <li classNameName="my-3">
                    <Link
                      classNameName="text-muted text-[#8a90a2]"
                      href="/"
                    >
                      Demo
                    </Link>
                  </li>
                  <li classNameName="my-3">
                    <Link
                      classNameName="text-muted text-[#8a90a2]"
                      href="/"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li classNameName="my-3">
                    <Link
                      classNameName="text-muted text-[#8a90a2]"
                      href="/"
                    >
                      Integrations
                    </Link>
                  </li>
                  <li classNameName="my-3">
                    <Link
                      classNameName="text-muted text-[#8a90a2]"
                      href="/"
                    >
                      Status
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div classNameName="col-xl-auto col-lg-3 col-6">
              <div classNameName="pl-[3rem]">
                <h6 classNameName="text-sm my-3 font-semibold uppercase">
                  Knowledge Base
                </h6>
                <ul classNameName="list-unstyled">
                  <li classNameName="my-3">
                    <Link
                      classNameName="text-muted text-[#8a90a2]"
                      href="/"
                    >
                      Blog
                    </Link>
                  </li>
                  <li classNameName="my-3">
                    <Link
                      classNameName="text-muted text-[#8a90a2]"
                      href="/"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li classNameName="my-3">
                    <Link
                      classNameName="text-muted text-[#8a90a2]"
                      href="/"
                    >
                      Sales Tools catalog
                    </Link>
                  </li>
                  <li classNameName="my-3">
                    <Link
                      classNameName="text-muted text-[#8a90a2]"
                      href="/"
                    >
                      API
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div classNameName="col-xl-auto col-lg-3 col-6">
              <div classNameName="pl-[3rem]">
                <h6 classNameName="text-sm my-3 font-semibold uppercase">
                  Company
                </h6>
                <ul classNameName="list-unstyled">
                  <li classNameName="my-3">
                    <Link
                      classNameName="text-muted text-[#8a90a2]"
                      href="/"
                    >
                      About Us
                    </Link>
                  </li>
                  <li classNameName="my-3">
                    <Link
                      classNameName="text-muted text-[#8a90a2]"
                      href="/"
                    >
                      Career
                    </Link>
                  </li>
                  <li classNameName="my-3">
                    <Link
                      classNameName="text-muted text-[#8a90a2]"
                      href="/"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div classNameName="col-xl-auto col-lg-3 col-6">
              <div classNameName="pl-[3rem]">
                <h6 classNameName="tet-sm my-3 font-semibold uppercase">Legal</h6>
                <ul classNameName="list-unstyled">
                  <li classNameName="my-3">
                    <a
                      classNameName="text-muted text-[#8a90a2]"
                      href="/"
                    >
                      Usage Policy
                    </a>
                  </li>
                  <li classNameName="my-3">
                    <a
                      classNameName="text-muted text-[#8a90a2]"
                      href="/"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li classNameName="my-3">
                    <a
                      classNameName="text-muted text-[#8a90a2]"
                      href="/"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li classNameName="my-3">
                    <a
                      classNameName="text-muted text-[#8a90a2]"
                      href="/"
                    >
                      Trust
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div classNameName="m-3 h-1 w-">
            <hr />
          </div>
          
          <div className="md:text-start  flex justify-around flex-wrap text-center flex-col-reverse lg:flex-row row">
            <div className="col-lg-9 col-md-8">
              <p className="pb-0 mb-0 text-wrap md:text-balance text-[#8a90a2]">
                2024 © Prompt. All rights reserved. Crafted by{" "}
                <Link href="/" classNameName="text-[#495057] hover:text-[#05f]">Coderthemes</Link>
              </p>
            </div>
            <div classNameName="md:text-end col-lg-3 col-md-4">
              <div classNameName="items-end">
                <ul className="flex flex-wrap space-x-4">
                  <li classNameNameName="inline-block me-4">
                    <Image src={facebook} width={24} height={24}></Image>  
                  </li>
                  <li classNameName="inline-block me-4">
                    <Image src={twitter} width={24} height={24}></Image>
                  </li>
                  <li classNameName="inline-block">
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
