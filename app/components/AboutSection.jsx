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
        <li>Node.js</li>
        <li>PostgreSQL</li>
        <li>Manual Testing</li>
        <li>Selenium</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Scrimba</li>
        <li>National Institute of Technology, Silchar</li>
        <li>LTI Training</li>
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
            I am currently learning web development and I am really enjoying it.
            I love the challenge of learning new things and improving my skills.
            I am always looking for new challenges and ways to improve my
            abilities.
            <br />I am a Mechanical Engineer by degree, and I had worked in an
            IT company as a QA Engineer for 2 years and also developing my
            frontend development skills alongside. I have acquired skills in
            HTML, CSS, React, JavaScript. And building projects to level up my
            skills to create more efficient and functional interface.
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
