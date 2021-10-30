import React from "react";
import Chip from "./Chip";

const Technologies = () => {
  const techs = [
    {
      logo: "nodejs.png",
      name: "Node.js",
      link: "https://nodejs.org/en/",
    },
    {
      logo: "django.png",
      name: "Django",
      link: "https://www.djangoproject.com/",
    },
    {
      logo: "flutter.png",
      name: "Flutter",
      link: "https://flutter.dev/",
    },
    {
      logo: "nestjs.png",
      name: "NestJS",
      link: "https://nestjs.com/",
    },
    {
      logo: "express-js.png",
      name: "ExpressJS",
      link: "https://expressjs.com/",
    },
    {
      logo: "nuxt.ico",
      name: "NuxtJS",
      link: "https://nuxtjs.org/",
    },
    {
      logo: "vue.png",
      name: "VueJS",
      link: "https://vuejs.org/",
    },
    {
      logo: "react.png",
      name: "React",
      link: "https://reactjs.org/",
    },
    {
      logo: "nextjs.png",
      name: "Next.js",
      link: "https://nextjs.org/",
    },
    {
      logo: "dotnetcore.png",
      name: "ASP.NET Core",
      link: "https://docs.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-5.0",
    },
    
  ];
  return (
    <section className="flex items-center flex-col-reverse lg:flex-row mx-0 lg:mx-10 mt-10 lg:mt-20">
      <div className="flex-1 space-y-3 text-center lg:text-left">
        <h1 className="font-black text-4xl lg:text-6xl text-portfolio-headers">
          <span className="text-portfolio-primary">Technologies</span> <br />I
          used to use
        </h1>
        <div className="flex flex-wrap justify-center lg:justify-start font-serif ml-1 pb-3">
          {techs.map((tech, i) => (
            <Chip item={tech} key={i} />
          ))}
        </div>
        <br />
      </div>
      <div className="lg:flex-1">
        <img
          className="xs:m-auto lg:w-3/4 w-full lg:ml-auto lg:-mt-20"
          src="/img/techs.png"
          alt="Technologies"
        />
      </div>
    </section>
  );
};

export default Technologies;
