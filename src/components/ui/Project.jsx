import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import {themecontext} from "../../App";
import { useContext } from "react";


const Projects = () => {
const themecont = useContext(themecontext);
const {theme,toggletheme} = themecont;
  // Updated project data from your resume
  const projects = [
    {
      id: 1,
      title: "React E-Commerce Store",
      description: "Fully responsive e-commerce website with modern interface, product listings, and Firebase integration.",
      tags: ["React", "Tailwind CSS", "Firebase"],
      githubLink: "#", // Add your GitHub link if available
      liveDemo: "https://phenomenal-truffle-2aaf42.netlify.app/"
    },
    {
      id: 2,
      title: "Weather App",
      description: "Weather application fetching real-time data with temperature display and location search.",
      tags: ["JavaScript", "API Integration", "CSS"],
      githubLink: "#", // Add your GitHub link if available
      liveDemo: "https://weather-app-ansar.netlify.app/"
    },
    {
      id: 3,
      title: "Text-Utils App",
      description: "React-based utility for text manipulation with dark mode and real-time previews.",
      tags: ["React", "Tailwind CSS", "Responsive UI"],
      githubLink: "#", // Add your GitHub link if available
      liveDemo: "https://text-utils-app-brown.vercel.app/"
    }
  ];

  return (
    <section 
      id="projects" 
      className={`py-20 px-4 ${theme === "dark" ? "bg-gradient-to-br from-gray-900 to-blue-900" :"bg-gradient-to-br from-gray-100 to-blue-400"}`}
      // style={{
      //   backgroundImage: 'radial-gradient(at 20% 30%, rgba(31, 41, 55, 0.8) 0, transparent 50%), radial-gradient(at 80% 80%, rgba(30, 58, 138, 0.6) 0, transparent 50%)'
      // }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className={`${theme === "dark"?"bg-gradient-to-r from-blue-400 to-blue-600" : "bg-gradient-to-r from-blue-400 to-blue-900"} text-transparent bg-clip-text`}>
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
          <p className={`text-lg ${theme === "dark" ? "text-blue-200" : "text-gray-950"} mt-4 max-w-2xl mx-auto`}>
            My practical implementations showcasing web development skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`group ${theme==="dark"?"bg-gray-800/40":"bg-gray-100/40"} rounded-xl overflow-hidden border border-blue-500/20
               hover:border-blue-400/50 transition-all
                duration-300 hover:shadow-xl hover:shadow-blue-500/10 backdrop-blur-sm`}
            >
              {/* Project Image */}
              <div className={`relative h-48 bg-gradient-to-br from-gray-800 to-blue-900 overflow-hidden`}>
                <div className="absolute inset-0 bg-blue-900/30 group-hover:bg-blue-900/10 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaCode className="text-5xl text-blue-400/30 group-hover:text-blue-400/50 transition-all duration-500" />
                </div>
                <span className={`absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow-lg`}>
                  {project.title}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className={`text-2xl font-bold ${theme === "dark" ?"text-white" : "text-black"} mb-2`}>{project.title}</h3>
                <p className={`${theme === "dark" ? "text-blue-100" : "text-black"} mb-4`}>{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 ${theme==="dark"?"bg-blue-900/40":"bg-blue-200/40"} ${theme==="dark"?"text-blue-200":"text-black"} text-sm rounded-full border border-blue-700/30`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex space-x-4">
                  {project.githubLink !== "#" && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-800 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg transition-all duration-300 group-hover:shadow-md group-hover:shadow-blue-500/20"
                    >
                      <FaGithub className="mr-2" /> Code
                    </a>
                  )}
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-lg transition-all duration-300 group-hover:shadow-md group-hover:shadow-blue-400/20 ${project.githubLink === "#" ? "w-full" : ""}`}
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Link */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/anser624"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-800 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/30 border border-blue-700/50"
          >
            <FaExternalLinkAlt className="mr-2 text-xl" />
            Visit My Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;