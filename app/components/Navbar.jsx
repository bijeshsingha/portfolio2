"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Home",
    path: "#home"
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isToggled, setIsToggled] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4">
        <Link
          href="#home"
          className="text-2xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#087EE1] to to-[#05E8BA]"
        >
          <span>{`{`}</span>
          <span className="text-white">bijesh.dev</span>
          <span>{`}`}</span>
        </Link>
        <div className="mobile-menu block md:hidden">
          {isToggled ? (
            <button
              onClick={() => setIsToggled(!isToggled)}
              className="flex items-center px-3 py-2 border border-slate-200 rounded text-slate-200 hover:text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setIsToggled(!isToggled)}
              className="flex items-center px-3 py-2 border border-slate-200 rounded text-slate-200 hover:text-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:px-5 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title}></NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isToggled && windowWidth < 768 ? <MenuOverlay Links={navLinks} /> : null}
    </nav>
  );
};
//<Bars3Icon className="h-5 w-5" />
export default Navbar;
