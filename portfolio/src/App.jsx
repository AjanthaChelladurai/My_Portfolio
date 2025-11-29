import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Internship from "./components/Internship";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="relative">
      <Navbar />

      <section id="home" className="pt-20">
        <Home />
      </section>

      <section id="about" className="pt-20">
        <About />
      </section>

      <section id="skills" className="pt-20">
        <Skills />
      </section>

      <section id="projects" className="pt-20">
        <Projects />
      </section>

      <section id="internship" className="pt-20">
        <Internship />
      </section>

      <section id="contact" className="pt-20">
        <Contact />
      </section>

      {/* Floating Chatbot */}
      <Footer/>
      
    </div>
  );
}

