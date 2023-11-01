"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import EmailSection from "./EmailSection";
import Link from "next/link";

const HeroSection = () => {
  const downloadFileAtURL = (url) => {
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", "");
    document.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div
          className="col-span-7 place-self-center text-center sm:text-left m
        r-0 md:mr-3"
        >
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087EE1] to to-[#05E8BA]">
              Hello, I'm
              <br />
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Bijesh",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "QA Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base mb-6 sm:text-lg lg:text-xl">
            Driven by ReactJS expertise. Crafting seamless, user-focused web
            experiences.
          </p>
          <div className="">
            <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-white hover:bg-slate-200 text-white bg-gradient-to-br from-[#087EE1] to-[#05E8BA]">
              <Link href="#contact">Hire Me</Link>
            </button>
            <button className="px-1 py-1 rounded-full w-full bg-gradient-to-br from-[#087EE1] to to-[#05E8BA] sm:w-fit mr-4 bg-transparent hover:bg-slate-800 text-white  mt-3">
              <a
                href="/resume/Bijesh_Singha_.pdf"
                download
                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className=" self-center rounded-full bg-[#352d2d] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
