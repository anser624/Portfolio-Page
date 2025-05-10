// import React from "react";

// const Contact = () => {
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-950 to-blue-900">
//         {/* <form>
//           <div class="grid gap-6 mb-6 md:grid-cols-2">
//             <div>
//               <label
//                 for="first_name"
//                 class="block mb-2 text-md font-medium text-white font-bold  dark:text-white"
//               >
//                 First name
//               </label>
//               <input
//                 type="text"
//                 id="first_name"
//                 class="bg-gray-50 border border-gray-300 text-gray-950 font-bold  text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 placeholder="John"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 for="phone"
//                 class="block mb-2 text-md font-medium text-white font-bold  dark:text-white"
//               >
//                 Phone number
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 class="bg-gray-50 border border-gray-300 text-gray-950 font-bold  text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 placeholder="123-45-678"
//                 pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
//                 required
//               />
//             </div>
//           </div>
//           <div class="mb-6">
//             <label
//               for="email"
//               class="block mb-2 text-md font-medium text-white font-bold  dark:text-white"
//             >
//               Email address
//             </label>
//             <input
//               type="email"
//               id="email"
//               class="bg-gray-50 border border-gray-300 text-black font-bold  text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="john.doe@gmail.com"
//               required
//             />
//           </div>
//           <div class="mb-6">
//             <label
//               for="password"
//               class="block mb-2 text-md font-medium text-white font-bold  dark:text-white"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               class="bg-gray-50 border border-gray-300 text-black font-bold  text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="•••••••••"
//               required
//             />
//           </div>
//           <div class="flex items-start mb-6">
//             <div class="flex items-center h-5">
//               <input
//                 id="remember"
//                 type="checkbox"
//                 value=""
//                 class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
//                 required
//               />
//             </div>
//             <label
//               for="remember"
//               class="ms-2 text-md font-medium text-white font-bold  dark:text-gray-300"
//             >
//               I agree with the{" "}
//               <a
//                 href="#"
//                 class="text-blue-600 hover:underline dark:text-blue-500"
//               >
//                 terms and conditions
//               </a>
//               .
//             </label>
//           </div>
//           <button
//             type="submit"
//             class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Submit
//           </button>
//         </form> */}

//       </div>
//     </>
//   );
// };
// export default Contact;

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div className=" h-screen bg-gradient-to-br from-gray-950 to-blue-900 flex justify-center  items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto p-6 bg-gradient-to-br from-gray-950 to-blue-900 w-full rounded-xl shadow-2xl border-2 border-gold-500"
      >
        <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 animate-pulse bg-clip-text text-transparent">
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
        className=" bg-gradient-to-r from-gold-500 to-purple-600 text-white
        font-bold rounded-lg p-6 shadow-lg max-w-md mx-auto"
      >
        <motion.p
          className="text-center text-3xl text-gray-300 mb-6 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          "This is my contact form. Feel free to reach out if you'd like to
          connect!
          <span className="block mt-1 text-purple-400 font-medium">
            No formalities - just say hello!"
          </span>
        </motion.p>
      </div>
    </div>
  );
};
export default Contact;
