import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import MobileNavbar from './components/MobileNavbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Resume from './components/Resume'
import Contact from './components/Contact'

function PageTransition({ children }) {
  const location = useLocation()
  
  return (
    <div className={`page-transition ${location.pathname === '/' ? 'home' : location.pathname.slice(1)}`}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <Sidebar />
      <MobileNavbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <PageTransition>
              <Hero />
            </PageTransition>
          } />
          <Route path="/about" element={
            <PageTransition>
              <About />
            </PageTransition>
          } />
          <Route path="/skills" element={
            <PageTransition>
              <Skills />
            </PageTransition>
          } />
          <Route path="/services" element={
            <PageTransition>
              <Services />
            </PageTransition>
          } />
          <Route path="/projects" element={
            <PageTransition>
              <Projects />
            </PageTransition>
          } />
          <Route path="/education" element={
            <PageTransition>
              <Education />
            </PageTransition>
          } />
          <Route path="/achievements" element={
            <PageTransition>
              <Achievements />
            </PageTransition>
          } />
          <Route path="/resume" element={
            <PageTransition>
              <Resume />
            </PageTransition>
          } />
          <Route path="/contact" element={
            <PageTransition>
              <Contact />
            </PageTransition>
          } />
        </Routes>
      </main>
    </div>
  )
}

export default App
