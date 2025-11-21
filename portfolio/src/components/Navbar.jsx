import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#071126] text-white shadow-md py-4 px-6 flex justify-between z-50">
      <h1 className="text-xl font-semibold cursor-pointer" onClick={() => scrollTo("home")}>
        My Portfolio
      </h1>

      <div className="flex gap-6">
        <button onClick={() => scrollTo("home")}>Home</button>
        <button onClick={() => scrollTo("about")}>About</button>
        <button onClick={() => scrollTo("skills")}>Skills</button>
        <button onClick={() => scrollTo("projects")}>Projects</button>
        <button onClick={() => scrollTo("internship")}>Internship</button>
        <button onClick={() => scrollTo("contact")}>Contact</button>

        <a href="https://github.com/AjanthaChelladurai" target="_blank">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/ajantha-chelladurai-5391b1252/" target="_blank">
          <Linkedin />
        </a>
      </div>
    </nav>
  );
}
