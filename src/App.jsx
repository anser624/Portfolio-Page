import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './components/ui/Hero';
import About from './components/ui/About';
import Project from './components/ui/Project';
import Footer from './components/ui/Footer';
import Contact from './components/ui/Contact';
import Faq from './components/ui/Faq';

export const themecontext = createContext();

function App() {
    const [theme, setTheme] = useState("dark");

   const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <themecontext.Provider value={{ theme, toggleTheme }}>
        <Router>
          <Navbar />
          <div>
            <section id="Hero">
              <Hero />
            </section>
            <section id="About">
              <About />
            </section>
            <section id="Project">
              <Project />
            </section>
            <section id="Contact">
              <Contact />
            </section>            
              <Faq />
              <Footer />
          </div>
        </Router>
    </themecontext.Provider>
  );
}

export default App;
