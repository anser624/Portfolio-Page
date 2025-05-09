import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaFire } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiBootstrap, SiFirebase } from "react-icons/si";
import { motion } from "framer-motion";
import {useContext } from "react";
import {themecontext} from "../../App";



const About = () => {

  const themeCont = useContext(themecontext)

  const {theme,toggleTheme} = themeCont ;


  // Tech icons data
  const techIcons = [
    { icon: <FaReact className="text-[#61DAFB]" />, name: "React" },
    { icon: <FaJs className="text-[#F7DF1E]" />, name: "JavaScript" },
    { icon: <SiTypescript className="text-[#3178C6]" />, name: "TypeScript" },
    { icon: <FaHtml5 className="text-[#E34F26]" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-[#1572B6]" />, name: "CSS" },
    { icon: <SiTailwindcss className="text-[#38B2AC]" />, name: "Tailwind" },
    { icon: <SiBootstrap className="text-[#7952B3]" />, name: "Bootstrap" },
    { icon: <SiFirebase className="text-[#FFCA28]" />, name: "Firebase" },
    { icon: <FaGithub className="text-white" />, name: "GitHub" },
    { icon: <FaNodeJs className="text-[#339933]" />, name: "Node.js" },
    // { icon: <FaFire className="text-[#FF5F1F]" />, name: "Firebase" },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className={`py-20 px-4 
    ${theme === 'dark' ? "bg-gradient-to-br from-gray-900 to-blue-900" : "bg-gradient-to-br from-gray-100 to-blue-400"}`}>
      <div className="container mx-auto max-w-6xl">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            About <span className={`${theme === "dark" ? "text-cyan-300" : "text-cyan-700" }`}>Me</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Animated Tech Stack */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`p-8 rounded-xl backdrop-blur-sm border border-cyan-400/20 
              ${theme === "dark" ? "bg-gray-950" : "bg-slate-700"}`}
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-300 flex items-center gap-2">
              <FaFire className="text-orange-400" /> 
              Tech Stack
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {techIcons.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center p-4 bg-gray-900/50 rounded-lg hover:bg-cyan-900/30 transition-all cursor-default"
                >
                  <span className="text-3xl mb-2">{tech.icon}</span>
                  <span className="text-sm text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Animated Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${theme === "dark" ?"text-white" :"text-gray-950"}`}>
              I Build <span className={`${theme === "dark" ? "text-yellow-300" : "text-yellow-600"}`}>Digital Experiences</span>
            </h3>
            
            <motion.p 
              className={`text-lg mb-6 ${theme === "dark" ? "text-gray-300" : "text-gray-800"}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm <span className={`${theme==="dark"?"text-cyan-300":"text-cyan-600"} font-medium`}>
                Ansar Malik</span>, specializing in 
                <span className={`${theme==="dark"?"text-yellow-300":"text-yellow-600"}`}>React.js</span>, 
                <span className={`${theme==="dark"?"text-blue-300":"text-blue-600"}`}>Firebase</span>, 
                and <span className={`${theme==="dark"?"text-purple-300":"text-purple-600"}`}>Bootstrap</span>. 
                I create <span className="font-bold">high-performance</span>
                 web applications with modern tech stacks.
            </motion.p>

            <motion.div 
              className="space-y-4 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-start">
                <span className={`${theme==="dark"?"text-yellow-400":"text-yellow-700"} mr-3 text-xl`}>✦</span>
                <p className={`${theme === "dark" ? "text-gray-300":"text-gray-800"}`}>
                  <span className="font-medium">4+ Projects</span> built with React & Firebase
                </p>
              </div>
              <div className="flex items-start">
                <span className={`${theme==="dark"?"text-yellow-400":"text-yellow-700"} mr-3 text-xl`}>✦</span>
                <p className={`${theme === "dark" ? "text-gray-300":"text-gray-800"}`}>
                  Expert in <span className="font-medium">responsive design</span> using Tailwind/Bootstrap
                </p>
              </div>
              <div className="flex items-start">
                <span className={`${theme==="dark"?"text-yellow-400":"text-yellow-700"} mr-3 text-xl`}>✦</span>
                <p className={`${theme === "dark" ? "text-gray-300":"text-gray-800"}`}>
                  Passionate about <span className="font-medium">clean code</span> and optimization
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-cyan-400"
            >
              <p className="text-gray-300 italic">
                "Currently pursuing my Diploma in Web Development while delivering professional projects."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;