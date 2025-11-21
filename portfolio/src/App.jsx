import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Internship from './components/Internship'
import Contact from './components/Contact'
import ChatBot from './components/Chatbot'

export default function App(){
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 px-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/internship" element={<Internship/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/chatbot" element={<ChatBot/>} />
        </Routes>
      </div>
    </div>
  )
}


