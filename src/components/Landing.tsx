import React from "react";
import ContactMe from "./ContactMe";

const Landing = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row mx-0 lg:mx-10 mt-1 lg:mt-20">
      <div className="flex-1 space-y-3 text-center lg:text-left">
        <h2 className="font-bold text-xl lg:text-6xl text-portfolio-headers">Hi ! I am</h2>
        <h1 className="font-black text-3xl lg:text-6xl text-portfolio-primary">
          Borni Ahmed Rami
        </h1>
        <p className="font-light font-serif ml-1 pb-3">
          I'm 22 Years old living in Algeria, a Computer Science Student at University Mohamed
          Khider <br />
          I'm a <span className="font-bold">Full Stack Web Developer</span> and{" "}
          <span className="font-bold">Mobile Developer</span> with <span className="font-bold">3</span> years experience
        </p>
        <br/>
        <ContactMe />
      </div>
      <div className="lg:flex-1">
        <img
          className="xs:m-auto lg:w-3/4 w-full lg:ml-auto lg:-mt-20"
          src="/img/borniahmedrami.png"
          alt="Borni Ahmed Rami"
        />
      </div>
    </section>
  );
};

export default Landing;
