import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Hackathon.png"
          title="Hackathon Project"
          description="Photo Album Next JS Tutorial (with Server Actions, Cloudinary, Shadcn). Cloudinary functionality for uploading, tagging, editing images, creating albums, etc."
        />
        <ProjectCard
          src="/Tic Tac Toe.jpg"
          title="Tic Tac Toe Game"
          description="Get ready for electrifying journey into the world of gaming: a cutting-edge Tic Tac Toe Game built with React, Typescript, and Semantic UI React."
        />
        <ProjectCard
          src="/Grid.jpg"
          title="Restaurant Menu Using Grid"
          description="Designing the page of the NEXT JS Learning Journey is a pivotal task that sets the tone for the entire educational experience."
        />
      </div>
    </div>
  );
};

export default Projects;