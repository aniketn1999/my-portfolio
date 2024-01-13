import React, { useEffect } from 'react'
import "./App.scss"
import { Routes, Route, useLocation } from "react-router-dom"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from './Containers/home'
import About from './Containers/about'
// import Contact from './Containers/contact'
import Portfolio from './Containers/portfolio'
import Resume from './Containers/resume'
import Skills from './Containers/skills'
import NavBar from './Components/navBar'
import particles from "./Utils/particles.js";

const App = () => {

  useEffect(() => {
    document.title = "My-Portfolio"
  })

  const location = useLocation();
  console.log(location);

  const handleInit = async (main) => {
    await loadFull(main)
  }
  const renderParticleJsInHomePage = location.pathname === "/";

  return (

    <div className="App">
      {/* particles js */}

      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}
      {/*Navbar */}
      <NavBar />

      {/* Main Page Content */}
      <div className="App__main-page-content">
        <Routes basename='to/tothepoint_login'>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          {/* <Route path='/contact' element={<Contact />} /> */}
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
