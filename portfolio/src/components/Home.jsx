import React from 'react'
import { motion } from 'framer-motion'

export default function Home(){
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="flex flex-col md:flex-row items-center gap-8">
        
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-xl overflow-hidden ring-2 ring-blue-800">
          <img src="\public\erasebg-transformed.png" alt="profile" className="w-full h-full object-cover" />
        </div>

        <div>
          <h2 className="text-3xl font-bold">Hello, I'm Your Name</h2>
          <p className="mt-2 text-gray-300">MERN Developer building modern apps.</p>

          <div className="mt-4 flex gap-3">
            <a href="https://github.com/yourusername" target="_blank" className="px-4 py-2 bg-blue-700 rounded-md hover:bg-blue-600">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" className="px-4 py-2 bg-gray-800 rounded-md border border-gray-700 hover:border-blue-500">LinkedIn</a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
