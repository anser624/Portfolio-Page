import React, { useContext } from "react";
import { themecontext } from "../../App"; // Import your theme context

const Hero = () => {
  const themecont = useContext(themecontext); // Get theme from context
    const {theme,toggleTheme} = themecont;
  return (
    <div 
      className={`flex flex-col md:flex-row h-auto min-h-screen px-6 sm:px-6 lg:px-8 ${
        theme === "dark" 
          ? "bg-gradient-to-br from-gray-950 to-blue-900" 
          : "bg-gradient-to-br from-gray-100 to-blue-400"
      }`}
    >
      {/* Text Content - Left Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center md:justify-self-start overflow-hidden md:py-0">
        <div className="apna-slide-right flex gap-6 mt-6 flex-col md:gap-4 max-w-[500px]">
          <h1 className="text-2xl md:text-6xl font-bold">
            <span className={`bg-gradient-to-r animate-pulse ${
              theme === "dark" 
                ? "from-cyan-400 to-blue-600" 
                : "from-blue-400 to-cyan-600"
            } bg-clip-text text-transparent`}>
              Ansar Malik
            </span>
          </h1>
          
          <p className={`text-md text-pretty md:text-2xl w-full font-mono tracking-tight ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}>
            <span className={`${
              theme === "dark" ? "text-cyan-400" : "text-blue-600"
            } animate-pulse`}>
              Frontend Engineer
            </span>
            |
            <span className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
              Crafting Digital Excellence with
            </span>
            . React.js, TypeScript, TailwindCSS
          </p>

          <p className={`text-sm text-balance md:text-xl mb-8 leading-relaxed ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}>
            Transforming
            <span className={`${theme === "dark" ? "text-yellow-400" : "text-yellow-600"} font-bold`}>ideas</span> into
            <span className={`${theme === "dark" ? "text-yellow-400" : "text-yellow-600"} font-bold`}>
              pixel-perfect realities
            </span>
            . Specializing in high-performance web applications with
            <span className={theme === "dark" ? "text-cyan-400" : "text-blue-600"}> 100ms render times</span> and
            <span className={theme === "dark" ? "text-green-400" : "text-green-600"}> zero-lag interactions</span>.
          </p>
          
          <div className="flex gap-14 mb-8">
            <a
              href="#projects"
              className={`${
                theme === "dark" 
                  ? "bg-cyan-600 hover:bg-cyan-700" 
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white px-6 py-3 rounded-lg font-semibold transition-all`}
            >
              My Projects
            </a>
            
            <div className="flex items-center gap-4">
              {/* GitHub Link */}
              <a
                href="https://github.com/anser624"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                } hover:text-cyan-400 transition-all`}
              >
                {/* GitHub SVG icon */}
              </a>
              
              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/ansar-malik-30ba1130a/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                } hover:text-cyan-400 transition-all`}
              >
                {/* LinkedIn SVG icon */}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Image - Right Side */}
      <div className="w-full md:w-1/2 flex justify-center items-center overflow-hidden py-8 md:py-0">
        <div className="relative apna-slide-left">
          <div className={`w-64 h-64 md:w-80 md:h-80 ${
            theme === "dark" 
              ? "bg-cyan-500/20" 
              : "bg-blue-500/20"
          } rounded-full flex items-center justify-center`}>
            <div className={`w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br ${
              theme === "dark" 
                ? "from-cyan-400 to-blue-600" 
                : "from-blue-400 to-cyan-600"
            } rounded-full animate-pulse`}>
              <img
                className="rounded-full"
                src="https://avatars.githubusercontent.com/u/173068235?s=400&u=53c2209daf21d0d932981beeffdc065fe4c496f1&v=4"
                alt="Ansar Malik"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;