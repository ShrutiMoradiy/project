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
    showToggle(true)
  };

  return (
    <>
      <header className="w-full bg-slate-200">
        <div className="container flex flex-wrap justify-around p-5 flex-col md:flex-row items-center">
          <div
            className={`flex flex-row flex-grow text-center justify-between ${showToggle ? 'w-full' : 'w-auto'}`}
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
          </div>
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
              <Link href="/" className={showNavbar ? "p-3" : "px-3"}>
                Landings
              </Link>
              <Link href="/" className={showNavbar ? "p-3" : "px-3"}>
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
                  <div className={showNavbar ? "absolute grid mt-[80px] p-3" : "absolute bg-white grid shadow-md p-2 min-w-[200px] mt-28"}>
                    <Link href="/">Getting Started</Link>
                    <Link href="/">Components</Link>
                  </div>
                )}
              </div>
            </div>
            <div className={showNavbar && showDropdown ? "mt-16" : "justify-end"}>
              <Link href="/">Log In</Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
