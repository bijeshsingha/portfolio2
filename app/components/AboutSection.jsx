"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Languages:{" "}
          <span className="font-bold">JavaScript (ES6+), HTML5, CSS3</span>
        </li>
        <li>
          Frameworks/Libraries:{" "}
          <span className="font-bold">ReactJS, Next.js</span>
        </li>
        <li>
          Development Tools:{" "}
          <span className="font-bold">Webpack, Node.js, NPM</span>
        </li>
        <li>
          APIs: <span className="font-bold">RESTful API consumption</span>
        </li>
        <li>
          Optimization:{" "}
          <span className="font-bold">
            Page Load Time, Reusable UI Component with Data Binding
          </span>
        </li>
        <li>
          Other:{" "}
          <span className="font-bold">Exposure to full-stack development</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Scrimba</li>
        <li>LTI Training</li>
        <li>B.Tech in ME - National Institute of Technology, Silchar - 7.45/10</li>
        <li>Class X - CBSE - 8/10</li>
        <li>Class XII - CBSE - 78.4%</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>QA Engineer at LTIMindtree</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Advanced React, Scrimba</li>
        <li>JavaScript, HackerRank</li>
        <li>Problem Solving (Intermediate), HackerRank</li>
        <li>Oracle Database: SQL Fundamentals, HackerRank</li>
        <li>LTI Trainee, LTI</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-centerpy-8 px-4 xl:gap-16 sm:py-16 sm:px-16 lg:mt-0 mt-4">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="about"
        />
        <div className="flex flex-col mt-4 md:mt-0 text-left h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg ">
            <span className="ml-3"></span> 👋 Hello! I'm Bijesh, a passionate
            React developer with a keen interest in building intuitive, dynamic,
            and user-friendly web applications. Over the past 6 months,
            I've immersed myself in the world of React. Skilled in component
            architecture, state management, and hooks, I prioritize responsive
            and clean-coded solutions. I thrive in collaborative settings and
            keep up with the latest in React. Seeking a role where I can
            contribute and grow, I'm eager to join a team valuing innovation.
            Check out my portfolio and GitHub for my work. Let's connect!
          </p>

          <div className="scroll-container overflow-x-auto scrollbar-hide flex flex-row  justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certification
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
