import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}} className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-3">About Me</h2>
      <p className="text-gray-300">Write about your education & goals.</p>
    </motion.div>
  )
}
