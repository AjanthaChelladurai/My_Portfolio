import React from 'react'

const projects = [
  { id:1, title:'Project One (Dummy)', desc:'Short description.', repo:'https://github.com/yourusername/project-one' },
  { id:2, title:'Project Two (Dummy)', desc:'Short description.', repo:'https://github.com/yourusername/project-two' },
]

export default function Projects(){
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map(p=> (
          <div key={p.id} className="p-4 bg-[#071826] border border-gray-800 rounded-md">
            <div className="h-36 bg-gray-800 rounded-md mb-3 flex items-center justify-center">Image</div>
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-gray-300 mt-2">{p.desc}</p>
            <a href={p.repo} target="_blank" className="mt-3 inline-block px-3 py-2 bg-blue-700 rounded-md">View Code</a>
          </div>
        ))}
      </div>
    </div>
  )
}
