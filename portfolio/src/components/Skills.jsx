import React from "react";

const skills = [
  { name: "Java", img: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
  { name: "React", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Node.js", img: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
  { name: "MongoDB", img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
  { name: "HTML", img: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
  { name: "CSS", img: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
  { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
];

export default function Skills() {
  return (
    <div className="text-white bg-[#0a1a2f] p-10 max-w-4xl mx-auto mt-8 bg-[#0a1a2f] ">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="text-center">
            <img src={skill.img} alt={skill.name} className="w-16 h-16 mx-auto" />
            <p className="mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
