import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Linkedin } from 'lucide-react'

export default function Navbar(){
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#071126] border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-xl font-semibold">Your Name</h1>
          <p className="text-sm text-gray-400">MERN Stack Developer</p>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className="hover:text-blue-300">Home</Link>
          <Link to="/about" className="hover:text-blue-300">About</Link>
          <Link to="/skills" className="hover:text-blue-300">Skills</Link>
          <Link to="/projects" className="hover:text-blue-300">Projects</Link>
          <Link to="/internship" className="hover:text-blue-300">Internship</Link>
          <Link to="/contact" className="hover:text-blue-300">Contact</Link>
          <Link to="/chatbot" className="hover:text-blue-300">ChatBot</Link>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/yourusername" target="_blank">
            <Github className="w-6 h-6 hover:text-blue-300" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank">
            <Linkedin className="w-6 h-6 hover:text-blue-300" />
          </a>
        </div>
      </div>
    </nav>
  )
}
