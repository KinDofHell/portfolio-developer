import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-[100]"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/eventapp.png"
          title="Next.js Event Site"
          description="Website for creating and maintaining events"
          href="https://eventapp-green.vercel.app/"
        />
        <ProjectCard
          src="/book-glossary.png"
          title="Online Book Glossary(under constructuion)"
          description="Online encyclopedia for my own fantasy book"
          href="https://book-pet.vercel.app/"
        />
        <ProjectCard
          src="/layout.png"
          title="Layout Example"
          description="Example to demonstrate skills"
          href="https://game-layout-deploy-dv5llgpal-kindofhell.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
