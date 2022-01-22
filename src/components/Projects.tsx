import React from "react";
import { Project } from "../models/project";
import CardProject from "./CardProject";

const Projects = () => {
  const myProjects : Array<Project> = [
    {
      title: "Hackathon DZ",
      img: "hackathondz.png",
      link: "https://www.hackathon2021.dz",
      techs:['Vue','Vuetify','NuxtJs']
    },
    {
        title:"HardWork DZ Website Prototype",
        img:'hardwork.png',
        link:'https://hardwork.vercel.app/',
        techs:['React','Material-UI','NextJs']
    },
    {
        title:"DZ National Library Prototype",
        img:'nationallibrary.png',
        link:'https://biblio-national.vercel.app/',
        techs:['Vue','Vuetify','NuxtJs']
    },
    {
        title:"DCO Online Game Website Prototype",
        img:'dco.png',
        link:'https://dco-website.vercel.app/',
        techs:['React','Material-UI','NextJs']
    },
    {
      title:"Jojo characters wiki",
      img:'jojo.png',
      link:'https://jojo-khaki.vercel.app/',
      techs:['React','TailwindCSS','NextJs']
    }

  ];
  return (
    <section className="flex flex-col  space-y-16 text-center my-36 lg:mx-10">
      <h1 className="text-6xl font-bold text-portfolio-headers">
        My Beautiful{" "}
        <span className="font-black text-portfolio-primary">Projects</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 justify-center">
        {myProjects.map((project) => (
          <CardProject project={project} />
        ))}
      </div>
      <div>
          PS : More Projects Will be added soon
      </div>
    </section>
  );
};

export default Projects;
