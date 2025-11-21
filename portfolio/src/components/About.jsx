import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}} className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-3">About Me</h2>
      <p className="text-gray-300">Hello, I'm Ajantha  — a dedicated Computer Science Post-Graduate specializing in modern web development.<span className='text-blue-500'>My focus is on translating complex requirements into dynamic, responsive UIs</span>, leveraging the power of React.js and modular CSS.
I bring practical experience in developing dynamic web applications and integrating APIs, emphasizing optimal UI performance. Proficient in <span className='text-blue-500'>Java,JavaScript (ES6+), React,MongoDB,MySQL and Git/GitHub</span>, I thrive on collaborative challenges and continuous learning.</p>
    </motion.div>
  )
}
