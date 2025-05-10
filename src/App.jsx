// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { useState ,createContext} from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './components/ui/Hero';
import About from './components/ui/About';
import Project from './components/ui/Project';
import Footer from './components/ui/Footer';
import Contact from './components/ui/Contact';
import Faq from './components/ui/Faq';

export const themecontext = createContext();

function App() {
  // const [theme, setTheme] = useState('dark');
  const [theme, setTheme] = useState("dark");

   const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <themecontext.Provider value={{ theme, toggleTheme }}>
    <Navbar/>
    <Hero />
    <About/>
    <Project/>
    <Contact/>
    <Faq/>
    <Footer/>
    </themecontext.Provider>
  //   <Router>
  //   <Navbar />
  //   <Routes>
  //     <Route path="/" element={
  //     <themecontext.Provider value={{ theme, toggleTheme }}>
  //     <Navbar/>
  //     <Hero/>
  //     <About/>
  //     </themecontext.Provider>} />
  //     <Route path="/about" element={<About />} />
  //     <Route path="/projects" element={<Project />} />
  //   </Routes>
  // </Router>
  );
}

export default App;
