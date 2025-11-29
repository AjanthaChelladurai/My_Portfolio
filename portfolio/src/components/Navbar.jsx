

import React from "react";
import { Github, Linkedin, Download } from "lucide-react"; // optional Download icon

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0a1a2f] text-white shadow-md py-4 px-6 flex justify-between items-center z-50 transform transition-transform duration-500 hover:scale-105">
      
      {/* Logo / Name */}
      <h1
        className="text-xl font-semibold cursor-pointer hover:text-blue-400 transition-colors duration-300"
        onClick={() => scrollTo("home")}
      >
        <span
          className="text-[#0a1a2f] text-xs select-none pointer-events-none">ॐ</span>
        My Portfolio 
      </h1>

      {/* Nav Links */}
      <div className="flex items-center gap-6">
        <button
          className="hover:text-blue-400 transition-colors duration-300"
          onClick={() => scrollTo("home")}
        >
          Home
        </button>
        <button
          className="hover:text-blue-400 transition-colors duration-300"
          onClick={() => scrollTo("about")}
        >
          About
        </button>
        <button
          className="hover:text-blue-400 transition-colors duration-300"
          onClick={() => scrollTo("skills")}
        >
          Skills
        </button>
        <button
          className="hover:text-blue-400 transition-colors duration-300"
          onClick={() => scrollTo("projects")}
        >
          Projects
        </button>
        <button
          className="hover:text-blue-400 transition-colors duration-300"
          onClick={() => scrollTo("internship")}
        >
          Internship
        </button>
        <button
          className="hover:text-blue-400 transition-colors duration-300"
          onClick={() => scrollTo("contact")}
        >
          Contact
        </button>

        {/* Download CV Button */}
        <a
          href="\Ajantha_C_Resume.pdf" // place your PDF in the public folder
          download
          className="bg-blue-700 text-white px-3 py-1 rounded-md hover:bg-cyan-600 transition-colors duration-300 flex items-center gap-1"
        >
          <Download size={16} /> CV
        </a>

        {/* Social Icons */}
        <a
          href="https://github.com/AjanthaChelladurai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors duration-300"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/ajantha-chelladurai-5391b1252/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors duration-300"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </nav>
  );
}
