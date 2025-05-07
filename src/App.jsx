import React from 'react';
import { useState } from 'react';
import { themecontext } from './components/ui/Navbar';
import Navbar from './components/ui/Navbar';
import Hero from './components/ui/Hero';
import About from './components/About';
import Project from './components/ui/Project';
import Footer from './components/ui/Footer';


function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };
  return (
    <themecontext.Provider value={{ theme, toggleTheme }}>
    <div className="bg-gradient-to-r from-black via-gray-800 to-gray-900">
    <Navbar/>
    <Hero />
    <About/>
    <Project/>
    <Footer/>
    </div>
    </themecontext.Provider>
  );
}

export default App;
