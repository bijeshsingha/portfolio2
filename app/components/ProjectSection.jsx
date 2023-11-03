import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description:
      "Used React Context API to manage state. Used React Hooks like useState, useContext, useEffect, useRefs, and custom hooks as well. Used React Router, Link, NavLink, Switch.",
    image: "/images/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/bijeshsingha/portfolio",
    previewUrl: "https://bijeshsingha.github.io/portfolio",
  },
  {
    id: 2,
    title: "Movie search app",
    description:
      "conditional rendering, use of hooks like useState and useEffect, Side Effects and EventListeners",
    image: "/images/img2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/bijeshsingha/movie_search_app",
    previewUrl: "https://shimmering-conkies-1df5c8.netlify.app/",
  },
  {
    id: 3,
    title: "E-commerce Dashboard",
    description:
      "complete state management with React Context API, it also has use case of various react hooks such as useState, useEffcts, useRefs, useContext etc., make use of Routes, Link and NavLink from react-router-dom, make use of Syncfusion UI components and use tailwind-CSS framework",
    image: "/images/dashboard.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/bijeshsingha/dashboardApplication/",
    previewUrl: "https://pie-dashboard.netlify.app/",
  },
  {
    id: 4,
    title: "Quizzical Application",
    description:
      "Fetch Quiz questions from API, passing query for category. Made use of React Hooks, useEffects, useState. Functional components and conditional rendering",
    image: "/images/Browser1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/bijeshsingha/quizzical",
    previewUrl: "https://8892quiz.netlify.app/",
  },
  {
    id: 5,
    title: "Tenzies game",
    description: "Simple react app, use of state, prop, conditional rendering, simple component",
    image: "/images/img3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/bijeshsingha/tenzies",
    previewUrl: "https://tenzies-game12345.netlify.app/",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-8">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            tags={project.tag}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
