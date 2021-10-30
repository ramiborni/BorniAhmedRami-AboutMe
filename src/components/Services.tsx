import React from "react";
import CardService from "./CardService";
import { JavaScript, MobileProgramming } from "iconsax-react";

const Services = () => {
  return (
    <section className="flex lg:flex-row flex-col text-center lg:text-left items-center mt-10 mb-10 lg:mx-10 lg:mt-20">
      <div className="flex-1 space-y-4">
        <h1 className="text-portfolio-headers text-4xl lg:text-6xl font-bold">
          My Awesome <br />
          <span className="text-portfolio-primary font-black">Services</span>
        </h1>
        <p>
          All people who used my services are so satisfied , beautiful designs ,
          good performance , and all what i asked to do is DONE
        </p>
      </div>
      <div className="flex-1 select-none">
        <div className="flex lg:flex-row flex-col items-center space-x-5 mt-10">
          <CardService
            className="lg:mt-44"
            icon={<JavaScript size="35" color="#EC00FF" variant="Broken" />}
            serviceName="Web Developement"
            text="I am a good web developer , i use NodeJS , Django , Asp.net Core , ReactJs, VueJs with 3 years of experience delivering qualitative code and Solutions."
          />
          <CardService
            icon={
              <MobileProgramming size="35" color="#EC00FF" variant="Broken" />
            }
            serviceName="Mobile Developement"
            text="With flutter , I have worked with multiple projects and products with Flutter in both of iOS and Android.  "
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
