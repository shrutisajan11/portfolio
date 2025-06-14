import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaSun,
  FaMoon,
  FaGraduationCap,
  FaCertificate,
  FaTools,
  FaDownload,
} from "react-icons/fa";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => setDarkMode(!darkMode);

  const cardClasses =
    "rounded-2xl shadow-xl p-6 transition-transform transform hover:scale-105 bg-opacity-80";
  

  return (
<section id="home">
    <div className={`relative z-10 min-h-screen p-6 pt-20 transition-all duration-500
  ${
    darkMode
      ? "bg-gradient-to-br from-gray-700 to-black text-white"
      : "bg-gradient-to-br from-white to-gray-300 text-gray-900"
  }`}
>
  
  {/* Navbar */}
<nav
  className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center shadow-md backdrop-blur-md bg-opacity-60
    ${darkMode ? "bg-black text-white" : "bg-white text-gray-900"}`}
>
  <h1 className="text-xl font-bold">Shruti Sajan</h1>
  
  <ul className="flex space-x-6 font-medium">
    <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
    <li><a href="#experience" className="hover:text-blue-400 transition">Experience</a></li>
    <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
    <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
  </ul>

  <button
    onClick={toggleTheme}
    className="ml-4 text-xl hover:text-yellow-400 transition"
    aria-label="Toggle Theme"
  >
    {darkMode ? <FaSun /> : <FaMoon />}
  </button>
</nav>

  
  {/* Optional blobs */}
  {darkMode ? (
  <>
    <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-screen opacity-30 filter blur-3xl animate-blob"></div>
    <div className="absolute -top-20 right-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-screen opacity-30 filter blur-2xl animate-blob animation-delay-2000"></div>
    <div className="absolute -top-60 right-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-screen opacity-30 filter blur-2xl animate-blob animation-delay-2000"></div>
  </>
) : (
  <>
    <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply opacity-30 filter blur-3xl animate-blob"></div>
    <div className="absolute -top-20 right-10 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply opacity-25 filter blur-2xl animate-blob animation-delay-2000"></div>
    <div className="absolute -top-60 right-10 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply opacity-25 filter blur-2xl animate-blob animation-delay-2000"></div>
  </>
)}


  {/* Optional floating dots */}
  

  <div
    className="floating-dot"
    style={{ width: 20, height: 20, top: '90%', left: '20%', animationDelay: '0s' }}
  />
   <div
    className="floating-dot"
    style={{ width: 40, height: 40, top: '85%', left: '20%', animationDelay: '0s' }}
  />
   <div
    className="floating-dot"
    style={{ width: 60, height: 60, top: '81%', left: '20%', animationDelay: '0s' }}
  />
  <div
    className="floating-dot"
    style={{ width: 20, height: 20, top: '93%', left: '7%', animationDelay: '0s' }}
  />
  <div
    className="floating-dot"
    style={{ width: 20, height: 20, top: '80%', left: '7%', animationDelay: '0s' }}
  />
  <div
    className="floating-dot"
    style={{ width: 40, height: 40, top: '90%', left: '10%', animationDelay: '0s' }}
  />
  <div
    className="floating-dot"
    style={{ width: 60, height: 60, top: '76%', left: '6%', animationDelay: '0s' }}
  />
  <div
    className="floating-dot"
    style={{ width: 20, height: 20, top: '93%', left: '13%', animationDelay: '0s' }}
  />
  <div
    className="floating-dot"
    style={{ width: 40, height: 40, top: '95%', left: '20%', animationDelay: '0s' }}
  />
  <div
    className="floating-dot"
    style={{ width: 60, height: 60, top: '85%', left: '3%', animationDelay: '0s' }}
  />

   <div
    className="floating-dot"
    style={{ width: 20, height: 20, top: '90%', left: '70%', animationDelay: '0s' }}
  />
   <div
    className="floating-dot"
    style={{ width: 40, height: 40, top: '85%', left: '75%', animationDelay: '0s' }}
  />
   <div
    className="floating-dot"
    style={{ width: 60, height: 60, top: '81%', left: '70%', animationDelay: '0s' }}
  />
  <div
    className="floating-dot"
    style={{ width: 20, height: 20, top: '93%', left: '78%', animationDelay: '0s' }}
  />
  <div
    className="floating-dot"
    style={{ width: 20, height: 20, top: '80%', left: '80%', animationDelay: '0s' }}
  />
  <div
    className="floating-dot"
    style={{ width: 40, height: 40, top: '90%', left: '85%', animationDelay: '0s' }}
  />
  <div
    className="floating-dot"
    style={{ width: 60, height: 60, top: '76%', left: '82%', animationDelay: '0s' }}
  />
  <div
    className="floating-dot"
    style={{ width: 20, height: 20, top: '93%', left: '89%', animationDelay: '0s' }}
  />
  <div
    className="floating-dot"
    style={{ width: 40, height: 40, top: '95%', left: '88%', animationDelay: '0s' }}
  />
  <div
    className="floating-dot"
    style={{ width: 60, height: 60, top: '85%', left: '95%', animationDelay: '0s' }}
  />
 
  {/* Your existing content like header, cards, etc. */}
  <header className="text-center py-12 relative">

        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Shruti Sajan
        </motion.h1>
        <motion.p
          className="text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Software Engineer | ML Enthusiast
        </motion.p>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <FaDownload /> Download Resume
          </a>
        </motion.div>
      </header>

     <section className="py-12 grid md:grid-cols-4 sm:grid-cols-2 gap-8">
  {/** About Me */}
  <motion.div
    className={`${cardClasses} ${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-xl shadow-md flex flex-col justify-between`}
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
  >
    <div>
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p className="mb-4">
        Highly motivated Computer Science Engineering graduate with a passion for developing innovative AI solutions. Practical proficiency in various programming languages, including C, Python and Java.
      </p>
    </div>
  </motion.div>

  {/** Education */}
  <motion.div
    className={`${cardClasses} ${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-xl shadow-md flex flex-col justify-between`}
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <div>
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <FaGraduationCap /> Education
      </h2>
      <ul className="space-y-2 mb-4">
        <li><strong>B.Tech in Computer Science</strong>, 8.82 CGPA | Amal Jyothi College of Engineering | APJ Abdul Kalam University (2021–2025)</li>
        <li><strong>Higher Secondary</strong>, 94.4% | The Indian School, Bahrain (2020–2021)</li>
        <li><strong>Senior Secondary</strong>, 94.8% | The Indian School, Bahrain (2018–2019)</li>
      </ul>
    </div>
  </motion.div>

  {/** Skills */}
  <motion.div
    className={`${cardClasses} ${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-xl shadow-md flex flex-col justify-between`}
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div>
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <FaTools /> Skills
      </h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>Frontend – HTML, CSS, JavaScript</li>
        <li>Backend – Flask, Django</li>
        <li>Languages – Python, C, Java</li>
        <li>ML models, Federated Learning</li>
        <li>Git, GitHub, Overleaf LaTeX</li>
      </ul>
    </div>
  </motion.div>

  {/** Certifications */}
  <motion.div
    className={`${cardClasses} ${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-xl shadow-md flex flex-col justify-between`}
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <div>
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <FaCertificate /> Certifications
      </h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>Infosys Springboard – AI, Deep Learning, NLP</li>
        <li>NPTEL Elite – Joy of Computing Using Python</li>
        <li>Presented project research – 5th International Conference on Expert Clouds and Applications (ICOECA 2025)</li>
      </ul>
    </div>
     <a
          href="https://drive.google.com/drive/folders/1nR9fn4okP-dLwrA-sWXl25ifK-h0ep5G?usp=drive_link"
          className="text-blue-500 hover:underline font-semibold"
          target="_blank"
          rel="noreferrer"
        >
         View Certificates
        </a>
  </motion.div>
</section>


      <section className="py-12" id="experience">
  <motion.h2
    className="text-3xl font-bold mb-6 text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    Experience
  </motion.h2>
  <div className="grid md:grid-cols-3 gap-8">
    {/* Cognizance Card */}
    <motion.div
      className={`${cardClasses} ${darkMode ? "bg-gray-800" : "bg-white"} p-4 flex flex-col justify-between min-h-[300px]`}
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div>
        <h3 className="text-xl font-semibold mb-2">Cognizance IIT Roorkee</h3>
        <p className="mb-4">
          Machine Learning Internship – Built ML models with Python & optimized workflows. Learned advanced Python concepts.
        </p>
        <div className="flex justify-center mb-4">
          <img src="/images/cogni.jpg" alt="Cogni Certificate" className="w-32 h-auto rounded" />
        </div>
        </div>
        <a
          href="https://drive.google.com/drive/folders/1nR9fn4okP-dLwrA-sWXl25ifK-h0ep5G?usp=drive_link"
          className="text-blue-500 hover:underline font-semibold"
          target="_blank"
          rel="noreferrer"
        >
         View Certificate
        </a>
      
    </motion.div>

    {/* AgrowIT Card */}
    <motion.div
      className={`${cardClasses} ${darkMode ? "bg-gray-800" : "bg-white"} p-4 flex flex-col justify-between min-h-[300px]`}
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div>
        <h3 className="text-xl font-semibold mb-2">AgrowIT | IT Services and IT Consulting</h3>
        <p className="mb-4">
          AI Engineer Intern – Participated in the development of AI leveraging prediction system for Agriculture Industry
        </p>
        </div>
        <div className="flex justify-center mb-4">
          <img src="/images/AgrowIT.png" alt="Agrowit logo" className="w-32 h-auto rounded" />
        </div>
        <a
          href="https://drive.google.com/drive/folders/1nR9fn4okP-dLwrA-sWXl25ifK-h0ep5G?usp=drive_link"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          View Certificate
        </a>
      
    </motion.div>

    {/* GDSC AJCE Card */}
    <motion.div
      className={`${cardClasses} ${darkMode ? "bg-gray-800" : "bg-white"} p-4 flex flex-col justify-between min-h-[300px]`}
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div>
        <h3 className="text-xl font-semibold mb-2">GDSC AJCE</h3>
        <p className="mb-4">
          Event Co-ordinator – Volunteered with Google Developer Student Clubs (GDSC) to organize and support technical workshops.
        </p>
        <div className="flex justify-center mb-4">
          <img src="/images/gdscajce.png" alt="GDSC Certificate" className="w-32 h-auto rounded" />
        </div>
        </div>
        <a
          href="https://drive.google.com/drive/folders/1nR9fn4okP-dLwrA-sWXl25ifK-h0ep5G?usp=drive_link"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          View Certificate
        </a>
      
    </motion.div>
  </div>
</section>

      <section className="py-12" id="projects">
        <motion.h2
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
        <motion.div
  className={`${cardClasses} ${darkMode ? "bg-gray-800" : "bg-white"} p-4`}
  whileHover={{ scale: 1.1 }}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <div>
  <h3 className="text-xl font-semibold mb-2">Heartify - Heart Disease Risk Prediction App</h3>
  <p className="mb-4">
    IoT-based heart disease risk prediction system using Federated Learning and live heart rate sensor data. An alert system is also implemented using EmailJS sending alerts to patients,doctors and emergency contacts incase of high risks.
  </p>

  <p className="font-medium mb-2">Technologies Used:</p>

  {/* Image Grid */}
  <div className="grid grid-cols-3 gap-4 justify-items-center mb-4 max-w-md mx-auto">
    <img src="/images/html,css.jpg" alt="HTML/CSS" className="w-20 h-auto rounded" />
    <img src="/images/firebase.png" alt="Firebase" className="w-20 h-auto rounded" />
    <img src="/images/Django-Logo.png" alt="Django" className="w-20 h-auto rounded" />
    <img src="/images/esp32.jpg" alt="ESP32" className="w-20 h-auto rounded" />
    <img src="/images/max30100.jpg" alt="MAX30100" className="w-20 h-auto rounded" />
  </div>
</div>
   <ol className="list-disc list-inside text-base mb-6">
    <li>HTML, CSS, JavaScript</li>
    <li>Django, Firebase</li>
    <li>Hardware - ESP32 NodeMCU, MAX30100 PPG Sensor</li>
  </ol>


</motion.div>
{/* YouTube Transcript Summarizer */}
<motion.div
  className={`${cardClasses} ${darkMode ? "bg-gray-800" : "bg-white"} p-4 flex flex-col justify-between min-h-[420px]`}
  whileHover={{ scale: 1.05 }}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <div>
    <h3 className="text-xl font-semibold mb-2">YouTube Transcript Summarizer App</h3>
    <p className="mb-4">
     A web-based tool that extracts and summarizes YouTube video transcripts to help users quickly grasp key content.
It also supports translated summaries, enhancing accessibility and learning for non-native speakers.
    </p>
<p className="font-medium mb-2">Technologies Used:</p>
    <div className="grid grid-cols-2 gap-4 justify-items-center mb-4 max-w-xs mx-auto">
      <img src="/images/html,css.jpg" alt="HTML/CSS/JS" className="w-40 h-auto rounded" />
      <img src="/images/flask.png" alt="Flask" className="w-40 h-auto rounded" />
    </div>
 </div>
    
    <ol className="list-disc list-inside text-base mb-6">
      <li>HTML, CSS, JavaScript</li>
      <li>Flask backend</li>
    </ol>
 
</motion.div>

{/* Bias Explorer App */}
<motion.div
  className={`${cardClasses} ${darkMode ? "bg-gray-800" : "bg-white"} p-4 flex flex-col justify-between min-h-[420px]`}
  whileHover={{ scale: 1.05 }}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <div>
    <h3 className="text-xl font-semibold mb-2">Advanced Bias Explorer App</h3>
    <p className="mb-4">
      A comprehensive bias detection and mitigation platform built using Streamlit that automatically identifies sensitive attributes in your data, applies industry-standard fairness techniques across pre-processing, in-processing, and post-processing stages, and provides actionable insights with performance-fairness trade-off analysis.
    </p>
    <p className="font-medium mb-2">Technologies Used:</p>
 <div className="grid grid-cols-3 gap-4 justify-items-center mb-4 max-w-md mx-auto">
    <img src="/images/streamlit.png" alt="streamlit" className="w-20 h-auto rounded" />
    <img src="/images/python.png" alt="python" className="w-20 h-auto rounded" />
    <img src="/images/scikit.png" alt="scikit" className="w-20 h-auto rounded" />
    <img src="/images/pandas.png" alt="pandas" className="w-20 h-auto rounded" />
    <img src="/images/numpy.png" alt="numpy" className="w-20 h-auto rounded" />
     <img src="/images/plotly.png" alt="plotly" className="w-20 h-auto rounded" />
     <img src="/images/scipy.png" alt="scipy" className="w-20 h-auto rounded" />
  </div>

     </div>
   <ol className="list-disc list-inside text-base mb-6">
      <li>Streamlit</li>
      <li>Python</li>
      <li>ML-numpy,scikit-learn,pandas,plotly</li>
    </ol>
 

  
</motion.div>


        </div>
      </section>
<section id="contact">
<motion.div
  className={`max-w-md mx-auto ${cardClasses} ${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-xl shadow-md col-span-full`}
  whileHover={{ scale: 1.02 }}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
>


  <h2 className="text-2xl font-semibold mb-4 text-center">Contact Me</h2>
  <form
    action="https://formsubmit.co/360b920b9c0c3a5c5e9862a73e6b76ea"
    method="POST"
    className="space-y-4 max-w-xl mx-auto"
  >
    {/* Hidden fields */}
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_subject" value="New message from portfolio site!" />
    <input type="hidden" name="_next" value="https://yourdomain.com/thanks" />

    <div>
      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
      <input
        type="text"
        name="name"
        required
        className="w-full px-4 py-2 border rounded dark:bg-gray-400 dark:border-gray-600 dark:text-white"
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
      <input
        type="email"
        name="email"
        required
        className="w-full px-4 py-2 border rounded dark:bg-gray-400 dark:border-gray-600 dark:text-white"
      />
    </div>

    <div>
      <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
      <textarea
        name="message"
        rows="4"
        required
        className="w-full px-4 py-2 border rounded resize-none dark:bg-gray-400 dark:border-gray-600 dark:text-white"
      ></textarea>
    </div>

    <div className="text-center">
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Send Message
      </button>
    </div>
  </form>
</motion.div>
</section>
      <footer className="text-center py-12">
        <div className="flex justify-center space-x-6 text-2xl">
          <a href="https://www.linkedin.com/in/shrutisajan/" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-blue-500" />
          </a>
          <a href="https://github.com/shrutisajan11" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-gray-400" />
          </a>
          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=shrutisajan74@gmail.com"
  target="_blank"
  rel="noreferrer"
>
  <FaEnvelope className="hover:text-red-400" />
</a>
        </div>
        <p className="mt-6 text-sm opacity-70">
          © {new Date().getFullYear()} Shruti Sajan. All rights reserved.
        </p>
      </footer>
    </div>
    </section>
  );
}



    
      