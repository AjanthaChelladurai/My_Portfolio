import React from "react";

const skills = [
  { name: "Java", img: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
  { name: "React", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "MongoDB", img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
  { name: "HTML", img: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
  { name: "CSS", img: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
  { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
  { name: "Bootstrap", img: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
  { name: "Tailwind CSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
];

export default function Skills() {
  return (
    <div className="text-white bg-[#0a1a2f] p-10 max-w-4xl mx-auto mt-8 transform transition-transform duration-500 hover:scale-105">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="
              group p-[2px] rounded-xl 
              bg-[#0a1a2f] 
              hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500
              transition-all duration-300
              hover:shadow-lg
            "
          >
            <div className="bg-[#0a1a2f] rounded-xl p-4 flex flex-col items-center">
              <img src={skill.img} alt={skill.name} className="w-16 h-16 mx-auto" />
              <p className="mt-2">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
