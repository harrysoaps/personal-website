"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "This website!",
    image: "/images/projects/1.png",
    tag: ["All", "Software"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Discord Game Bot",
    description: "Bot I have been developing in my free time recently to automate YouTube game Ten Words of Wisdom using Sheets API!",
    image: "/images/projects/2.png",
    tag: ["All", "Software"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Top-Down Shooter Embedded System",
    description: "Fun little Galactica-esque game created on mBED microcontroller.",
    image: "/images/projects/3.png",
    tag: ["All", "Software", "Hardware"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "FPGA Timer Peripheral Project",
    description: "Used VHDL and Assembly to create a timer for my FPGA, shown on a seven-segment display.",
    image: "/images/projects/4.jpg",
    tag: ["All", "Hardware"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Software"
          isSelected={tag === "Software"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Hardware"
          isSelected={tag === "Hardware"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
