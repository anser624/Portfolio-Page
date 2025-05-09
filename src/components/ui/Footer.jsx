import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import {themecontext} from "../../App";
import { useContext } from "react";

const Footer = () => {
const themeCont = useContext(themecontext);
const {theme,toggleTheme} = themeCont;

  return (
    <footer className={`${theme==="dark"?"bg-gradient-to-br from-gray-900 to-blue-900":"bg-gradient-to-br from-gray-100 to-blue-700"} border-t border-blue-800/50`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className={`text-xl font-bold ${theme==="dark"?"text-white":"text-black"} flex items-center`}>
              <span className={`${theme==="dark"?"bg-gradient-to-r from-blue-400 to-blue-600":"bg-gradient-to-r from-blue-700 to-blue-900"} text-transparent bg-clip-text`}>
                Ansar Malik
              </span>
            </h3>
            <p className={`${theme==="dark"?"text-blue-200":"text-gray-900 font-bold"} `}>
              Aspiring web developer specializing in React, JavaScript, and modern web technologies. Currently pursuing a diploma in Computer Science.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/ansar-malik-30bai30a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${theme==="dark"?"text-blue-300":"text-gray-950"} hover:text-blue-100 transition-colors`}
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${theme==="dark"?"text-blue-300":"text-gray-950"} hover:text-blue-100 transition-colors`}
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className={`text-xl font-bold ${theme==="dark"?"text-white":"text-black"}`}>Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaEnvelope className={`${theme==="dark"?"text-blue-400":"text-black"} mt-1 mr-3 flex-shrink-0`} />
                <a 
                  href="mailto:am24236526mailk@gmail.com" 
                  className={`${theme==="dark"?"text-blue-200":"text-black"} hover:text-white transition-colors`}
                >
                  am24236526mailk@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <FaPhoneAlt className={`${theme==="dark"?"text-blue-400":"text-black"} mt-1 mr-3 flex-shrink-0`} />
                <a 
                  href="tel:933283302096" 
                  className={`${theme==="dark"?"text-blue-200":"text-black"} hover:text-white transition-colors`}
                >
                  +92 333 83302096
                </a>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className={`${theme==="dark"?"text-blue-400":"text-black"} mt-1 mr-3 flex-shrink-0`} />
                <span className={`${theme==="dark"?"text-blue-200":"text-black"}`}>Karachi, Sindh, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className={`text-xl font-bold ${theme==="dark"?"text-white":"text-black"}`}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className={`${theme==="dark"?"text-blue-200":"text-black"} hover:text-white transition-colors`}
                >
                  About Me
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className={`${theme==="dark"?"text-blue-200":"text-black"} hover:text-white transition-colors`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="https://websolution-team.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${theme==="dark"?"text-blue-200":"text-black"} hover:text-white transition-colors`}
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-blue-800/50 mt-12 pt-8 text-center">
          <p className={`${theme==="dark"?"text-blue-200":"text-gray-900"}`}>
            &copy; {new Date().getFullYear()} Ansar Malik. All rights reserved.
          </p>
          <p className={`${theme==="dark"?"text-blue-400/70":"text-blue-950"} text-sm mt-2`}>
            Built with React and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;