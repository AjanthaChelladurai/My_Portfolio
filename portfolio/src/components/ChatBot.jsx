import React, { useState } from 'react'

const replies = {
  experience: "I worked on MERN projects, APIs and deployments.",
  skills: "React, Node, Express, MongoDB, HTML, CSS, JS, Tailwind."
}

export default function ChatBot(){
  const [q, setQ] = useState("")
  const [ans, setAns] = useState("")

  function ask(){
    const k = q.toLowerCase()
    if(k.includes("skill")) setAns(replies.skills)
    else if(k.includes("experience")) setAns(replies.experience)
    else setAns("Ask about 'skills' or 'experience'.")
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-3">ChatBot</h2>

      <div className="flex gap-2">
        <input className="flex-1 p-2 bg-gray-900 border border-gray-700 rounded-md"
               placeholder="Ask something..."
               value={q}
               onChange={e=>setQ(e.target.value)} />
        <button onClick={ask} className="px-4 bg-blue-700 rounded-md">Ask</button>
      </div>

      <div className="mt-4 p-3 bg-[#071826] border border-gray-800 rounded-md">
        {ans || "No reply yet."}
      </div>
    </div>
  )
}
