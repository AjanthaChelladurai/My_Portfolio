
import React, { useState } from "react";
import { Github, Linkedin, Download, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setOpen(false); 
  };

  return (
    <>
     
      <nav className="fixed top-0 left-0 right-0 bg-[#0a1a2f] text-white shadow-md py-4 px-6 flex justify-between items-center z-50 transform transition-transform duration-500 hover:scale-105">

      
        <h1
          className="text-xl font-semibold cursor-pointer hover:text-blue-400 transition-colors duration-300"
          onClick={() => scrollTo("home")}
        >
          <span className="text-[#0a1a2f] text-xs select-none pointer-events-none">ॐ</span>
          My Portfolio
        </h1>

       
        <div className="hidden md:flex items-center gap-6">
          <button className="hover:text-blue-400" onClick={() => scrollTo("home")}>Home</button>
          <button className="hover:text-blue-400" onClick={() => scrollTo("about")}>About</button>
          <button className="hover:text-blue-400" onClick={() => scrollTo("skills")}>Skills</button>
          <button className="hover:text-blue-400" onClick={() => scrollTo("projects")}>Projects</button>
          <button className="hover:text-blue-400" onClick={() => scrollTo("internship")}>Internship</button>
          <button className="hover:text-blue-400" onClick={() => scrollTo("contact")}>Contact</button>

         
          <a
            href="\Ajantha_C_Resume.pdf"
            download
            className="bg-blue-700 px-3 py-1 rounded-md hover:bg-cyan-600 transition flex items-center gap-1"
          >
            <Download size={16} /> CV
          </a>

        
          <a href="https://github.com/AjanthaChelladurai" target="_blank" className="hover:text-blue-400">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/ajantha-chelladurai-5391b1252/" target="_blank" className="hover:text-blue-400">
            <Linkedin size={20} />
          </a>
        </div>

     
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

     
      <div
        className={`fixed top-0 right-0 h-full w-60 bg-[#0a1a2f] text-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
      
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>

      
        <div className="flex flex-col items-start gap-4 px-6 text-lg">
          <button onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("skills")}>Skills</button>
          <button onClick={() => scrollTo("projects")}>Projects</button>
          <button onClick={() => scrollTo("internship")}>Internship</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>


          <a
            href="\Ajantha_C_Resume.pdf"
            download
            className="mt-4 bg-blue-700 px-3 py-1 rounded-md flex items-center gap-1"
          >
            <Download size={16} /> CV
          </a>

        
          <div className="flex gap-6 mt-4">
            <a href="https://github.com/AjanthaChelladurai" target="_blank">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/ajantha-chelladurai-5391b1252/" target="_blank">
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
