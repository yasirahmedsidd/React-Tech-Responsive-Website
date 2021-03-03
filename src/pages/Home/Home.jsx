import React from "react";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Features from "../../components/Features";
import Works from "../../components/Works";
import Faq from "../../components/Faq";
import Pricing from "../../components/Pricing";
import Contact from "../../components/Contact";

const Home = () => {
  return (
    <div className="main">
      <Hero />
      <About />
      <Features />
      <Works />
      <Faq />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Home;
