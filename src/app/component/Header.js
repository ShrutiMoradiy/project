"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.png";
import arrowdown from "/public/arrow-down.svg";
import menutoggle from "/public/menu-toggle.svg";
import close from "/public/close.svg";

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showToggle, setShowToggle] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);
  const toggleMenu = () => {
    setShowNavbar(!showNavbar);
    if (!showNavbar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  return (
    <>
      <header className="w-full bg-[#f7f7f9]">
        <div
          className={
            "container flex flex-wrap justify-around lg:px-40 px-6 py-5 flex-col md:flex-row items-center"
          }
        >
          <div
            className={`flex flex-row flex-grow text-center col-2 justify-between ${
              showToggle ? "w-full" : "w-full"
            }`}
          >
            <Link href="/">
              <Image src={logo} width={119} height={30}></Image>
            </Link>

            <button
              className="md:hidden"
              onClick={() => {
                toggleMenu();
                setShowDropdown(false);
              }}
              aria-label={showNavbar ? "Close main menu" : "Open main menu"}
            >
              <Image src={menutoggle} width={20} height={20}></Image>
            </button>
            <nav
              className={`md:flex flex-grow items-center justify-end space-x-4 ${
                showNavbar
                  ? "fixed top-0 left-0 bottom-0 h-full bg-white w-full transform transition-transform duration-100"
                  : "hidden"
              }`}
            >
              {showNavbar && (
                <div className="w-full md:hidden flex justify-between border-b p-3 mb-4">
                  <Link href="/">
                    <Image
                      src={logo}
                      width={119}
                      height={30}
                      alt="Logo"
                    />
                  </Link>
                  <span onClick={toggleMenu}>
                    <Image src={close} width={24} height={24} />
                  </span>
                </div>
              )}
              <div className={showNavbar ? "grid items-center" : "flex"}>
                <Link href="/" className={showNavbar ? "p-3 flex" : "px-3"}>
                  Home
                </Link>
                <Link href="/" className={showNavbar ? "p-3 flex" : "px-3"}>
                  Landings
                </Link>

                <Link href="/" className={showNavbar ? "p-3 flex" : "px-3"}>
                  pages
                </Link>
                <div
                  className="relative inline-flex items-center px-3"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <span>Docs</span>
                  <span className={showNavbar ? "p-3" : "px-3"}>
                    <Image src={arrowdown} width={20} height={20}></Image>
                  </span>

                  {showDropdown && (
                    <div
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                      className={
                        showNavbar
                          ? "absolute grid mt-[80px] p-4 pt-8 justify-start"
                          : "absolute bg-[#f7f7f9] flex flex-col rounded shadow-md min-w-[160px] mt-28"
                      }
                    >
                      <Link href="/component/about" className="flex p-2">
                        About Us
                      </Link>
                      <Link href="/component/contact" className="flex p-2">
                        Contact Us
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <div
                className={showNavbar && showDropdown ? "mt-16 p-3 flex" : "flex px-3 pt-3 lg:pt-0 md:pt-0"}
              >
                <Link href="/">Log In</Link>
              </div>

              {showNavbar && (
                <div className={`w-full md:hidden flex justify-center relative border-t align-bottom p-3 ${showDropdown ? "mt-36" : "mt-56"}`}>
                 <Link
                href="/"
                class="flex items-center mt-3 justify-center font-medium text-white uppercase bg-[#05f] border-1 border-[#05f] py-2 px-4 w-[164px] h-[45px] focus:outline-none hover:border-1 hover:border-[#05f] hover:shadow-[0_8px_20px_-6px_rgba(0,85,255,.6)] rounded-3xl"
              >
                Get Started
              </Link>
                </div>
              )}
            </nav>
            
          </div>
        </div>
      </header>
      
    </>
  );
}

export default Header;
