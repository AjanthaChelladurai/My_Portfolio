import React from 'react'

const skills = ['ReactJS','JavaScript','HTML','CSS','Tailwind CSS','Bootstrap','MongoDB','NodeJS']

export default function Skills(){
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map(s=> (
          <div key={s} className="p-4 bg-[#071826] border border-gray-800 rounded-md text-center">{s}</div>
        ))}
      </div>
    </div>
  )
}
