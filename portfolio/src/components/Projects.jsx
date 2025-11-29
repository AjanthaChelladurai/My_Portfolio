import React from 'react'

const projects = [
  { id:1,title:'Company-Portfolio-Model',
     image:"company.jpeg",
     desc:'A stylish company portfolio built to display business details and attract clients.', 
     tech:"React,Tailwind CSS ,Form API ,React HooK,JSX,Vite",repo:'https://github.com/AjanthaChelladurai/Responsive-website-Reactjs',
     live:'https://responsive-website-ab1710.netlify.app/' 
  },
  { id:2, title:'Task-Manager', 
    image:"task.jpeg",
    desc:'A clean and fast task manager built with React to track and manage daily tasks.',
    tech:"React ,Router DOM ,Framer Motion,Tailwind CSS", repo:'https://github.com/AjanthaChelladurai/Task-Manager' ,
    live:'https://ajantha-task-manager1011ab.netlify.app/'
  },
  { id:3, title:'Modern Admin Dashboard',
    image:"dash.jpeg",
    desc:'A modern React + Redux admin dashboard featuring interactive charts, dark theme UI, gradient visuals, and smooth popup animations with login page.',
    tech:"React, Redux Toolkit, Tailwind CSS, Recharts, React Icons, Vite", repo:'https://github.com/AjanthaChelladurai/Admin-Dashboard' ,
    live:'https://ajantha-admin-dashboard1710.netlify.app/'
  },
  { id:4,title:'violence Action Detection In CCTV Sureillance',
    image:"Ai.jpeg",
    desc:'A real-time violence detection system that monitors CCTV footage and identifies violent actions with high accuracy includng User Interface',
    tech:"YOLO11,OpenCV,Twilio API, HTML,CSS,JavaScript,python",repo:'https://github.com/AjanthaChelladurai/Violence_action_detection_'
  }
]

export default function Projects(){
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map(p=> (
          <div key={p.id} className="p-4 bg-[#071826] border border-gray-800 rounded-md">
             <div className="h-36 bg-gray-800 rounded-md mb-3 flex items-center justify-center">
                  <img src={p.image} className="h-full w-full object-cover rounded-md" /></div>
            <h3 className="font-semibold col text-blue-700 " >{p.title}</h3>
            <p className="text-gray-100 mt-2">{p.desc}</p>
            <p classname="  text-gray-500 mt-2"> <span className="text-blue-500 font-semibold">Tech Stack:</span>{p.tech}</p>
            <a href={p.repo} target="_blank" className="mt-3 inline-block px-3 py-2 bg-blue-700 rounded-md">View Code</a>
            <a href={p.live} target="_blank" className="mt-3 inline-block px-3 py-2 bg-blue-700 rounded-md ml-20">Live Demo</a>

          </div>
        ))}
      </div>
    </div>
  )
}
