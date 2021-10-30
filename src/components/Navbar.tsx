import React from "react";
import ContactMe from "./ContactMe";

const Navbar = () => {
  return (
    <nav className="flex items-center mb-10">
      <div className="flex-1" id="#myname">
        <h1 className="font-bold text-2xl text-center lg:text-left select-none text-portfolio-headers">
          Borni Ahmed Rami
        </h1>
      </div>
      <div className="items-center space-x-5 hidden lg:flex">
        <a href="/#" className="text-portfolio-headers">Home</a>
        <a href="/#" className="text-portfolio-headers">About Me</a>
        <ContactMe/>
      </div>
    </nav>
  );
};

export default Navbar;
