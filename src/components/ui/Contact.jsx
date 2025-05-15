import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { themecontext } from "../../App";
import {useContext} from "react"

const Contact = () => {
  const themecont = useContext(themecontext);
  const { theme, toggleTheme } = themecont;

  return (
    <div className={`h-screen 
    ${theme==="dark"?"bg-gradient-to-br from-gray-950 to-blue-900":"bg-gradient-to-br from-gray-200 to-blue-400"} 
    flex justify-center  items-center`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`max-w-md mx-auto p-6 ${theme==="dark"?"bg-gradient-to-br from-gray-950 to-blue-900":"bg-gradient-to-br from-gray-400 to-blue-400"} 
        w-full rounded-xl shadow-2xl border-2 border-gold-500`}
      >
        <h2 className={`text-4xl font-bold text-center mb-6 
        ${theme==="dark"?"bg-gradient-to-r from-blue-400 to-blue-600":"bg-gradient-to-r from-blue-600 to-blue-900"} animate-pulse
         bg-clip-text text-transparent`}>
          Contact Me
        </h2>

        <form className="space-y-4">
          {/* Name Input */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            />
          </motion.div>

          {/* Email Input */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            />
          </motion.div>

          {/* Message Textarea */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <textarea
              placeholder="Your VIP Message..."
              rows="3"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-gold-500 text-white font-bold rounded-lg flex items-center justify-center gap-2"
          >
            <FaPaperPlane /> Send Message
          </motion.button>
        </form>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6">
          <motion.a
            href="https://github.com/anser624"
            whileHover={{ y: -5, scale: 1.2 }}
            className="text-white hover:text-purple-400"
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ansar-malik-30ba1130a/"
            whileHover={{ y: -5, scale: 1.2 }}
            className="text-white hover:text-blue-400"
          >
            <FaLinkedin size={24} />
          </motion.a>
        </div>
      </motion.div>
      <div 
        className={`${theme==="dark"?"bg-gradient-to-r from-gold-500 to-purple-600 ":"bg-gradient-to-r from-gold-700 to-purple-400"} text-white
        font-bold rounded-lg p-6 shadow-lg max-w-md mx-auto`}
      >
        <motion.p
          className={`text-center text-3xl ${theme==="dark"?"text-gray-300":"text-gray-700"} mb-6 italic`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          "This is my contact form. Feel free to reach out if you'd like to
          connect!
          <span className={`block mt-1 ${theme==="dark"?"text-purple-400":"text-purple-700"} font-medium`}>
            No formalities - just say hello!"
          </span>
        </motion.p>
      </div>
    </div>
  );
};
export default Contact;
