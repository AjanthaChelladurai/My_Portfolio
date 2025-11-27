import React from 'react'

const projects = [
  { id:1,title:'Company-Portfolio-Model', desc:'A clean and modern company portfolio showcasing services, projects, and brand identity with a professional UI.', repo:'https://github.com/yourusername/project-one' },
  { id:2, title:'Task-Manager', desc:'A clean and fast task manager built with React to track and manage daily tasks.', repo:'https://github.com/AjanthaChelladurai/Task-Manager' },
  { id:3,title:'violence Action Detection In CCtV Sureillance', desc:'An AI-powered violence action detection system built using YOLOv11 for real-time surveillance monitoring.Designed with a user-friendly interface to instantly detect violent activities and notify authorities.', repo:'https://github.com/AjanthaChelladurai/Violence_action_detection_' }
]

export default function Projects(){
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map(p=> (
          <div key={p.id} className="p-4 bg-[#071826] border border-gray-800 rounded-md">
            <div className="h-36 bg-gray-800 rounded-md mb-3 flex items-center justify-center">Image</div>
            <h3 className="font-semibold col text-blue-300 " >{p.title}</h3>
            <p className="text-gray-300 mt-2">{p.desc}</p>
            <a href={p.repo} target="_blank" className="mt-3 inline-block px-3 py-2 bg-blue-700 rounded-md">View Code</a>
          </div>
        ))}
      </div>
    </div>
  )
}
