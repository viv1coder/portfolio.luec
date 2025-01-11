import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/landingpage'
import Marquee from './components/Marquee'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'




const App = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white overflow-hidden'>
    <Navbar/> 
    <Landingpage/>
    <Marquee/>
    <About/>
    <Experience/>
    <Projects/>
    <Skills/>
    <Footer/>
    </div>
  )
}

export default App