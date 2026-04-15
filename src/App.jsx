import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./App.css";

import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Navbar from './components/NavBar';

import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <>
      <ParticleBackground/>
      <Navbar />

      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />

      <Footer />
    </>
  );
}

export default App;