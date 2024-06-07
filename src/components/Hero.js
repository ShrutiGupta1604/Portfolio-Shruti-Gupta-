import React from "react";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center text-center">
      <Fade bottom>
        <h1 className="text-5xl font-bold mb-4">Hello, I'm YourName</h1>
      </Fade>
      <Fade bottom delay={500}>
        <p className="text-2xl">A passionate Developer</p>
      </Fade>
    </section>
  );
};

export default Hero;
