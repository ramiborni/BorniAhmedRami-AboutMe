import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Code1 } from "iconsax-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mt-16 bg-portfolio-headers py-4 flex flex-wrap justify-center items-center space-x-2">
        <Code1 size="25" color="#d9e3f0" variant="Broken" />

        <h1 className="font-bold text-white">
          Designed & Developed By Borni Ahmed Rami
        </h1>
      </footer>
      <footer className="bg-portfolio-headers py-4 flex flex-wrap  justify-center items-center space-x-2">

        <h1 className="font-bold text-white ">
          Developed with <FontAwesomeIcon icon={faReact} size="lg" /> React &  
        </h1>
        <img width="24" src="/img/icons/tailwind.svg" alt="TailwindCSS"/> 
        <h1  className="font-bold text-white ">
          Tailwind CSS
          </h1>

      </footer>
    </>
  );
};

export default Footer;
