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
  };

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <header className="w-full bg-[#f7f7f9]">
        <div className={"container flex flex-wrap justify-around lg:px-40 px-6 py-5 flex-col md:flex-row items-center"}>
          <div
            className={`flex flex-row flex-grow text-center justify-between ${
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
                  ? "fixed top-0 left-0 h-full bg-white p-3 w-64 transform transition-transform duration-300"
                  : "hidden "
              }`}
            >
              <div className={showNavbar ? "grid items-center" : "flex"}>
                <Link href="/" className="px-3 flex justify-between">
                  Home
                  {showNavbar && (
                    <span onClick={toggleMenu}>
                      <Image src={close} width={24} height={24}></Image>
                    </span>
                  )}
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
                      className={
                        showNavbar
                          ? "absolute grid mt-[80px] p-4 justify-start"
                          : "absolute bg-[#f7f7f9] flex flex-col rounded shadow-md min-w-[160px] mt-28"
                      }
                    >
                      <Link href="/" className="flex p-2">Getting Started</Link>
                      <Link href="/" className="flex p-2">Components</Link>
                    </div>
                  )}
                </div>
              </div>
              <div
                className={showNavbar && showDropdown ? "mt-16 flex" : "flex"}
              >
                <Link href="/">Log In</Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
