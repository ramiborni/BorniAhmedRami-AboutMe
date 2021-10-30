import React from "react";
import { Project } from "../models/project";

const CardProject = ({ project }: { project: Project }) => {
  return (
    <a href={project.link} className="mt-10 mx-10">
      <div className="flex flex-col justify-center space-y-4 text-center">
        <img
          className="rounded-xl shadow-xl w-80 mx-auto"
          src={"/img/projects/" + project.img}
          alt={project.title}
        />
        <h2 className="font-bold text-2xl text-portfolio-headers">
          {project.title}
        </h2>
        <div className="flex flex-wrap justify-center">
          {project.techs.map((tech) => (
            <div className="font-medium mx-2 rounded-full shadow-lg text-white bg-portfolio-headers px-6 py-2">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
};

export default CardProject;
